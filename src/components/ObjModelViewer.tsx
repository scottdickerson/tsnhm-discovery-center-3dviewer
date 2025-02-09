import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

export interface ObjModelViewerProps {
    modelFileName: string
}
export const ObjModelViewer = ({ modelFileName }: ObjModelViewerProps) => {
    const thisRef = useRef({})
    const mountRef = useRef()
    const initialDate = useRef(Date.now())
    const [modelResetTimerIsRunning, setModelResetTimerIsRunning] =
        useState(false)
    const [userInteractingWithModel, setUserInteractingWithModel] =
        useState(false)

    const resetModelPosition = () => {
        thisRef.current.camera.position.x = 0
        thisRef.current.camera.position.y = 0
        thisRef.current.camera.position.z = 1
        thisRef.current.camera.updateProjectionMatrix()
        thisRef.current.controls.update()
        initialDate.current = Date.now()
        setModelResetTimerIsRunning(false)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            // check whether we should reset the model after user interacts with it
            if (modelResetTimerIsRunning) {
                resetModelPosition()
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [modelResetTimerIsRunning])

    useEffect(() => {
        thisRef.current.sceneSetup()
        thisRef.current.addLights()
        thisRef.current.loadTheModel()
        thisRef.current.startAnimationLoop()
        window.addEventListener('resize', thisRef.current.handleWindowResize)
        return () => {
            window.removeEventListener(
                'resize',
                thisRef.current.handleWindowResize
            )
            window.cancelAnimationFrame(thisRef.current.requestID)
            thisRef.current.controls.dispose()
        }
    }, [])

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    thisRef.current.sceneSetup = () => {
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
        // thisRef.current.camera.position.z = 2; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        thisRef.current.controls = new OrbitControls(
            thisRef.current.camera,
            mountRef.current
        )
        thisRef.current.renderer = new THREE.WebGLRenderer({ antialias: true })
        thisRef.current.renderer.shadowMap.type = THREE.PCFSoftShadowMap
        thisRef.current.renderer.outputEncoding = THREE.sRGBEncoding
        thisRef.current.renderer.toneMapping = THREE.LinearToneMapping
        thisRef.current.renderer.setSize(width, height)
        mountRef.current?.appendChild(thisRef.current.renderer.domElement) // mount using React ref
    }

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    thisRef.current.loadTheModel = () => {
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
                        thisRef.current.scene.add(object)

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
                    (xhr) => {
                        const loadingPercentage = Math.ceil(
                            (xhr.loaded / xhr.total) * 100
                        )
                        console.log(loadingPercentage + '% loaded')
                    },
                    // called when loading has errors
                    (error) => {
                        console.log('An error happened:' + error)
                    }
                )
        })
    }

    // adding some lights to the scene
    thisRef.current.addLights = () => {
        // let lights = [];

        // // // set color and intensity of lights
        // lights[0] = new THREE.PointLight(0xffffff, 1, 0);
        // lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        // lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        // lights.forEach((light) => {
        //   light.castShadow = false;
        //   // light.intensity = 0.7;
        //   light.decay = 2;
        // });

        // // // place some lights around the scene for best looks and feel
        // lights[0].position.set(0, 2000, 0);
        // lights[1].position.set(1000, 2000, 1000);
        // lights[2].position.set(-1000, -2000, -1000);

        // thisRef.current.scene.add(lights[0]);
        // thisRef.current.scene.add(lights[1]);
        // thisRef.current.scene.add(lights[2]);

        const ambientLight = new THREE.AmbientLight(0x777777)
        // ambientLight.castShadow = true;
        ambientLight.intensity = 1.5
        thisRef.current.scene.add(ambientLight)

        // add some extra light, gives a bit of a texture pop
        const extraLight = new THREE.DirectionalLight()
        extraLight.position.set(0, 2000, 1000)
        extraLight.intensity = 0.2
        thisRef.current.scene.add(extraLight)
    }

    thisRef.current.startAnimationLoop = () => {
        // slowly rotate an object

        // Rotate camera around the model
        if (
            thisRef.current.camera &&
            !userInteractingWithModel &&
            !modelResetTimerIsRunning
        ) {
            const radius = 1
            const speed = 0.0005
            const time = (Date.now() - initialDate.current) * speed

            thisRef.current.camera.position.x = radius * Math.cos(time)
            thisRef.current.camera.position.z = radius * Math.sin(time)
            thisRef.current.camera.lookAt(0, 0, 0)
            thisRef.current.controls.update()
        }

        thisRef.current.renderer.render(
            thisRef.current.scene,
            thisRef.current.camera
        )

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        thisRef.current.requestID = window.requestAnimationFrame(
            thisRef.current.startAnimationLoop
        )
    }

    thisRef.current.handleWindowResize = () => {
        const width = mountRef.current.clientWidth
        const height = mountRef.current.clientHeight

        thisRef.current.renderer.setSize(width, height)
        thisRef.current.camera.aspect = width / height

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        thisRef.current.camera.updateProjectionMatrix()
    }

    return (
        <div
            onMouseDown={() => {
                setUserInteractingWithModel(true)
            }}
            onMouseUp={() => {
                setModelResetTimerIsRunning(true)
                setUserInteractingWithModel(false)
            }}
            className="w-full h-[803px]"
            ref={mountRef}
        />
    )
}
