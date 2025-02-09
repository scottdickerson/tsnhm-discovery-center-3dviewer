import { useRef, useState, useEffect, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'

export interface ObjModelViewerProps {
    modelFileName: string
}
export const ObjModelViewer = ({ modelFileName }: ObjModelViewerProps) => {
    const thisRef = useRef<
        Partial<{
            camera: THREE.PerspectiveCamera
            scene: THREE.Scene
            renderer: THREE.WebGLRenderer
            controls: OrbitControls
            model: THREE.Object3D
            requestID: number
            quaternion: THREE.Quaternion
            startAnimationLoop: FrameRequestCallback
        }>
    >({})

    const mountRef = useRef<HTMLDivElement>(null)
    const [modelResetTimerIsRunning, setModelResetTimerIsRunning] =
        useState(false)

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    const sceneSetup = useCallback(() => {
        if (mountRef.current) {
            // get container dimensions and use them for scene sizing
            const width = mountRef.current.clientWidth
            const height = mountRef.current.clientHeight

            thisRef.current.scene = new THREE.Scene()
            thisRef.current.scene.background = new THREE.Color(0x686868)
            thisRef.current.camera = new THREE.PerspectiveCamera(
                75, // fov = field of view
                width / height, // aspect ratio
                0.1, // near plane
                1000 // far plane
            )
            thisRef.current.camera.position.z = 1 // is used here to set some distance from a cube that is located at z = 0
            // OrbitControls allow a camera to orbit around the object
            // https://threejs.org/docs/#examples/controls/OrbitControls
            thisRef.current.controls = new OrbitControls(
                thisRef.current.camera,
                mountRef.current
            )
            thisRef.current.controls.autoRotate = true
            thisRef.current.controls.autoRotateSpeed = 5
            thisRef.current.renderer = new THREE.WebGLRenderer({
                antialias: true,
            })
            thisRef.current.renderer.shadowMap.type = THREE.PCFSoftShadowMap
            thisRef.current.renderer.toneMapping = THREE.LinearToneMapping
            thisRef.current.renderer.setSize(width, height)
            mountRef.current.appendChild(thisRef.current.renderer.domElement) // mount using React ref
        }
    }, [])

    // adding some lights to the scene
    const addLights = useCallback(() => {
        if (thisRef.current.scene) {
            const ambientLight = new THREE.AmbientLight(0xffffff)
            ambientLight.castShadow = true
            ambientLight.intensity = 1.5
            thisRef.current.scene.add(ambientLight)

            // add some extra light, gives a bit of a texture pop
            const extraLight = new THREE.DirectionalLight()
            extraLight.position.set(0, 2000, 1000)
            extraLight.intensity = 0.5
            extraLight.castShadow = true
            thisRef.current.scene.add(extraLight)
        }
    }, [])

    const loadTheModel = useCallback(() => {
        const mtlLoader = new MTLLoader()
        // instantiate a loader
        const loader = new OBJLoader()

        // load a resource
        mtlLoader.loadAsync(`${modelFileName}.mtl`).then((materials) => {
            loader.setMaterials(materials)
            loader
                .loadAsync(
                    // resource URL relative to the /public/index.html of the app
                    `${modelFileName}.obj`
                    // called when resource is loaded
                )
                .then(
                    (object) => {
                        thisRef.current.scene?.add(object)

                        // centering the model
                        // THREE.Box3() is AABB (axis-aligned bounding box). You can set it from the object you've loaded.
                        // Then use .getCenter() method to get its center. Then simply subtract the vector of the center
                        // from the default position of the object. https://threejs.org/docs/index.html#api/en/math/Box3
                        const box = new THREE.Box3().setFromObject(object)
                        const center = new THREE.Vector3()
                        box.getCenter(center)
                        object.position.sub(center)
                        object.translateY(0.1)
                        object.translateX(0.1)
                        const quaternion = new THREE.Quaternion(0.35, 0, 0)
                        object.setRotationFromQuaternion(quaternion)
                        // make this element available inside of the whole component to do any animation later
                        thisRef.current.model = object
                        thisRef.current.quaternion = quaternion
                    },
                    // called when loading is in progresses
                    (xhr: ProgressEvent) => {
                        const loadingPercentage = Math.ceil(
                            (xhr.loaded / xhr.total) * 100
                        )
                        console.log(loadingPercentage + '% loaded')
                    }
                )
        })
    }, [])

    const resetModelPosition = () => {
        if (thisRef.current.camera) {
            updateCameraPosition({ x: 0, y: 0, z: 1 })
        }
        setModelResetTimerIsRunning(false)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            // check whether we should reset the model after user interacts with it
            if (modelResetTimerIsRunning) {
                resetModelPosition()
            }
        }, 10000)
        return () => clearInterval(timer)
    }, [modelResetTimerIsRunning])

    useEffect(() => {
        if (thisRef.current) {
            sceneSetup?.()
            addLights?.()
            loadTheModel?.()
            thisRef.current.startAnimationLoop?.(0)
            if (handleWindowResize) {
                window.addEventListener('resize', handleWindowResize)
                return () => {
                    if (handleWindowResize) {
                        window.removeEventListener('resize', handleWindowResize)
                    }
                    window.cancelAnimationFrame(thisRef.current.requestID ?? 0)
                    thisRef.current.controls?.dispose()
                }
            }
        }
    }, [sceneSetup])

    const updateCameraPosition = ({
        x,
        y,
        z,
    }: { x?: number; y?: number; z?: number } = {}) => {
        if (thisRef.current.camera) {
            if (x || y || z) {
                thisRef.current.camera.position.x = x || 0
                thisRef.current.camera.position.y = y || 0
                thisRef.current.camera.position.z = z || 0
            }
            thisRef.current.camera.lookAt(0, 0, 0)
            thisRef.current.controls?.update()
            thisRef.current.camera.updateProjectionMatrix()

            if (thisRef.current.renderer && thisRef.current.scene) {
                thisRef.current.renderer.render(
                    thisRef.current.scene,
                    thisRef.current.camera
                )
            }
        }
    }

    thisRef.current.startAnimationLoop = () => {
        // slowly rotate an object

        // Rotate camera around the model
        // if (!modelResetTimerIsRunning) {
        updateCameraPosition()
        // }

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        if (thisRef.current.startAnimationLoop) {
            thisRef.current.requestID = window.requestAnimationFrame(
                thisRef.current.startAnimationLoop
            )
        }
    }

    const handleWindowResize = useCallback(() => {
        const width = mountRef.current?.clientWidth
        const height = mountRef.current?.clientHeight
        if (
            width &&
            height &&
            thisRef.current.renderer &&
            thisRef.current.camera
        ) {
            thisRef.current.renderer.setSize(width, height)
            thisRef.current.camera.aspect = width / height
            // Note that after making changes to most of camera properties you have to call
            // .updateProjectionMatrix for the changes to take effect.
            thisRef.current.camera.updateProjectionMatrix()
        }
    }, [])

    return (
        <div
            onMouseDown={(event) => {
                return event
            }}
            onMouseUp={(event) => {
                setModelResetTimerIsRunning(true)
                return event
            }}
            className="w-full h-[803px]"
            ref={mountRef}
        />
    )
}
