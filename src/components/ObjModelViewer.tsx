import { useRef, useState, useEffect, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { ContentData } from '@/data/contentData'
type ObjModelViewerProps = Pick<
    ContentData,
    | 'modelFileName'
    | 'modelScale'
    | 'modelType'
    | 'lightIntensity'
    | 'modelRotation'
    | 'modelPosition'
>
export const ObjModelViewer = ({
    modelFileName,
    modelType = 'obj',
    modelScale = 1,
    lightIntensity = 1,
    modelRotation = [0.5, 0, 0],
    modelPosition = [0.1, 0.1, 0],
}: ObjModelViewerProps) => {
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
    const [modelIsLoaded, setModelIsLoaded] = useState(false)

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    const sceneSetup = useCallback(() => {
        if (mountRef.current) {
            // get container dimensions and use them for scene sizing
            const width = mountRef.current.clientWidth
            const height = mountRef.current.clientHeight

            thisRef.current.scene = new THREE.Scene()
            thisRef.current.scene.background = new THREE.Color(0x868b86)
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
            thisRef.current.controls.minDistance = 0.5
            thisRef.current.controls.maxDistance = 1
            thisRef.current.renderer = new THREE.WebGLRenderer({
                precision: 'lowp',
                powerPreference: 'high-performance',
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
            extraLight.intensity = lightIntensity
            // extraLight.intensity = .1 // skull
            // extraLight.intensity = 0.05 femur
            // extraLight.intensity = 0.025 // sauropod
        }
    }, [])

    const loadTheModel = useCallback(() => {
        if (modelType === 'gltf') {
            const loader = new GLTFLoader()
            loader.load(
                `${modelFileName}.glb`,
                (gltf) => {
                    thisRef.current.model = gltf.scene
                    setModelIsLoaded(true)
                },
                undefined,
                (error) => {
                    console.error(error)
                }
            )
        } else {
            const mtlLoader = new MTLLoader()
            // instantiate a loader
            const loader = new OBJLoader()

            // load a resource
            mtlLoader.load(`${modelFileName}.mtl`, (materials) => {
                loader.setMaterials(materials)
                loader.load(
                    // resource URL relative to the /public/index.html of the app
                    `${modelFileName}.obj`,
                    // called when resource is loaded

                    (object) => {
                        thisRef.current.model = object
                    },
                    // called when loading is in progresses
                    (xhr: ProgressEvent) => {
                        console.log('loading')
                        const loadingPercentage = Math.ceil(
                            (xhr.loaded / xhr.total) * 100
                        )
                        console.log(loadingPercentage + '% loaded')
                        if (loadingPercentage === 100) {
                            // wait for the textures to load
                            setTimeout(() => setModelIsLoaded(true), 2000)
                        }
                    }
                )
            })
        }
    }, [])

    const resetModelPosition = () => {
        if (thisRef.current.camera) {
            updateCameraPosition({ x: 0, y: 0, z: 1 })
        }
        if (thisRef.current.controls) {
            thisRef.current.controls.autoRotate = true
        }
        setModelResetTimerIsRunning(false)
    }

    useEffect(() => {
        if (thisRef.current.model && modelIsLoaded) {
            thisRef.current.scene?.add(thisRef.current.model)
            thisRef.current.model.scale.set(modelScale, modelScale, modelScale)
            // make this element available inside of the whole component to do any animation later
            // centering the model
            // THREE.Box3() is AABB (axis-aligned bounding box). You can set it from the object you've loaded.
            // Then use .getCenter() method to get its center. Then simply subtract the vector of the center
            // from the default position of the object. https://threejs.org/docs/index.html#api/en/math/Box3
            const box = new THREE.Box3().setFromObject(thisRef.current.model)
            const center = new THREE.Vector3()
            box.getCenter(center)
            thisRef.current.model.position.sub(center)
            thisRef.current.model.translateX(modelPosition[0])
            thisRef.current.model.translateY(modelPosition[1])
            thisRef.current.model.translateZ(modelPosition[2])
            const quaternion = new THREE.Quaternion(...modelRotation)
            thisRef.current.model.setRotationFromQuaternion(quaternion)
            thisRef.current.quaternion = quaternion
        }
    }, [thisRef.current.model, modelIsLoaded])

    useEffect(() => {
        const timer = setInterval(() => {
            // check whether we should reset the model after user interacts with it
            if (modelResetTimerIsRunning) {
                resetModelPosition()
            }
        }, 10000)
        return () => clearInterval(timer)
    }, [modelResetTimerIsRunning])

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
    }, [sceneSetup, addLights, loadTheModel, handleWindowResize])

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

    return (
        <>
            <div
                className={`w-full h-[803px] absolute bg-[#868b86] flex pointer-events-none items-center justify-center transition-all duration-1000 ${modelIsLoaded ? 'opacity-0' : 'opacity-1'}`}
            >
                <div className="loader text-white text-xl animate-pulse">
                    Loading...
                </div>
            </div>
            <div
                onMouseDown={() => {
                    setModelResetTimerIsRunning(false)
                    if (thisRef.current.controls) {
                        thisRef.current.controls.autoRotate = false
                    }
                }}
                onMouseUp={() => {
                    setModelResetTimerIsRunning(true)
                }}
                onTouchStart={() => {
                    setModelResetTimerIsRunning(false)
                    if (thisRef.current.controls) {
                        thisRef.current.controls.autoRotate = false
                    }
                }}
                onTouchEnd={() => {
                    setModelResetTimerIsRunning(true)
                }}
                className="w-full h-[803px]"
                ref={mountRef}
            />
        </>
    )
}
