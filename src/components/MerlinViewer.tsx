'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import AudioAnalyzer from './AudioAnalyzer';
import VisualEffects from './VisualEffects';

// Theme options
const THEMES = [
    { id: 'default', name: 'Default Merlin' },
    { id: 'dj', name: 'DJ Merlin' },
    { id: 'wizard', name: 'Wizard Merlin' },
    { id: 'cosmic', name: 'Cosmic Merlin' },
    { id: 'brown', name: 'Brown University Merlin' }
];

// Define AudioData type at the module level
interface AudioData {
    volume: number;
    bass: number;
    mid: number;
    treble: number;
    beat: boolean;
    frequencyData: number[];
}

const MerlinViewer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTheme, setActiveTheme] = useState('default');
    const [modelPath, setModelPath] = useState<string>('/models/merlin.glb');
    const [audioData, setAudioData] = useState<AudioData | null>(null);

    // Refs to store Three.js objects
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const merlinModelRef = useRef<THREE.Group | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);

    // Handle audio data from AudioAnalyzer
    const handleAudioData = (data: AudioData) => {
        setAudioData(data);

        // Apply audio reactivity to Merlin model
        if (merlinModelRef.current && data) {
            // Make Merlin bounce to the beat
            if (data.beat) {
                merlinModelRef.current.scale.y = 1 + data.bass * 0.2;
                merlinModelRef.current.scale.x = 1 + data.bass * 0.1;
                merlinModelRef.current.scale.z = 1 + data.bass * 0.1;
            } else {
                // Smoothly return to normal scale
                merlinModelRef.current.scale.y = THREE.MathUtils.lerp(
                    merlinModelRef.current.scale.y,
                    1,
                    0.1
                );
                merlinModelRef.current.scale.x = THREE.MathUtils.lerp(
                    merlinModelRef.current.scale.x,
                    1,
                    0.1
                );
                merlinModelRef.current.scale.z = THREE.MathUtils.lerp(
                    merlinModelRef.current.scale.z,
                    1,
                    0.1
                );
            }

            // Rotate Merlin based on mid-frequencies
            merlinModelRef.current.rotation.y += data.mid * 0.05;
        }
    };

    // Handle theme change
    const handleThemeChange = (theme: string) => {
        setActiveTheme(theme);

        // Update model path based on theme
        switch (theme) {
            case 'dj':
                setModelPath('/models/merlin-dj.glb');
                break;
            case 'wizard':
                setModelPath('/models/merlin-wizard.glb');
                break;
            case 'cosmic':
                setModelPath('/models/merlin-cosmic.glb');
                break;
            case 'brown':
                setModelPath('/models/merlin-brown.glb');
                break;
            default:
                setModelPath('/models/merlin.glb');
        }
    };

    // Function to load the model
    const loadModel = async (
        path: string,
        scene: THREE.Scene,
        GLTFLoaderClass: typeof import('three/examples/jsm/loaders/GLTFLoader.js').GLTFLoader
    ) => {
        // Clear previous model
        if (merlinModelRef.current) {
            scene.remove(merlinModelRef.current);
            merlinModelRef.current = null;
        }

        // Clear previous animation mixer
        if (mixerRef.current) {
            mixerRef.current = null;
        }

        setLoading(true);
        setError(null);

        const loader = new GLTFLoaderClass();

        try {
            // Define the GLTF type
            interface GLTF {
                scene: THREE.Group;
                scenes: THREE.Group[];
                animations: THREE.AnimationClip[];
                cameras: THREE.Camera[];
                asset: {
                    version: string;
                    [key: string]: any;
                };
            }

            const gltf = await new Promise<GLTF>((resolve, reject) => {
                loader.load(
                    path,
                    resolve,
                    (progress: { loaded: number; total: number }) => {
                        console.log(`Loading: ${Math.round(progress.loaded / progress.total * 100)}%`);
                    },
                    reject
                );
            });

            setLoading(false);

            // Center and scale model
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Reset model position to center
            gltf.scene.position.x = -center.x;
            gltf.scene.position.y = -center.y;
            gltf.scene.position.z = -center.z;

            // Scale model to reasonable size
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 2 / maxDim;
            gltf.scene.scale.set(scale, scale, scale);

            scene.add(gltf.scene);
            merlinModelRef.current = gltf.scene;

            // Setup animation if model is rigged
            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(gltf.scene);
                mixerRef.current = mixer;
                const animation = gltf.animations[0]; // Use first animation
                const action = mixer.clipAction(animation);
                action.play();
            }
        } catch (error) {
            console.error('Error loading model:', error);
            setLoading(false);
            setError("Failed to load 3D model. Please make sure the model file exists.");
        }
    };

    // Setup Three.js scene
    useEffect(() => {
        if (!containerRef.current) return;

        // Store the container DOM element
        const container = containerRef.current;
        const clock = new THREE.Clock();

        // Dynamically import Three.js modules
        const initScene = async () => {
            try {
                // Import the modules we need
                const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
                const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');

                // Create scene
                const scene = new THREE.Scene();
                scene.background = new THREE.Color(0x000000);
                sceneRef.current = scene;

                // Add ambient light
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
                scene.add(ambientLight);

                // Add directional light
                const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
                dirLight.position.set(5, 5, 5);
                scene.add(dirLight);

                // Add fill light from opposite side
                const fillLight = new THREE.DirectionalLight(0xffffff, 0.4);
                fillLight.position.set(-5, 0, -5);
                scene.add(fillLight);

                // Add spot light from top
                const spotLight = new THREE.SpotLight(0xffffff, 0.8);
                spotLight.position.set(0, 8, 0);
                spotLight.angle = Math.PI / 6;
                spotLight.penumbra = 0.2;
                scene.add(spotLight);

                // Camera setup
                const camera = new THREE.PerspectiveCamera(
                    45,
                    container.clientWidth / container.clientHeight,
                    0.1,
                    1000
                );
                camera.position.z = 5;
                camera.position.y = 2;
                cameraRef.current = camera;

                // Renderer setup
                const renderer = new THREE.WebGLRenderer({
                    antialias: true,
                    alpha: true
                });
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                renderer.shadowMap.enabled = true;
                container.appendChild(renderer.domElement);
                rendererRef.current = renderer;

                // Controls for camera
                const controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;
                // TS doesn't know these exist on OrbitControls, so lift the check:
                (controls as any).rotateSpeed = 0.7;
                (controls as any).maxPolarAngle = Math.PI / 1.5;

                // Load 3D model
                await loadModel(modelPath, scene, GLTFLoader);

                // Animation loop
                const animate = () => {
                    animationFrameRef.current = requestAnimationFrame(animate);

                    // Update animation mixer if it exists
                    if (mixerRef.current) {
                        mixerRef.current.update(clock.getDelta());
                    }

                    // Update controls
                    controls.update();

                    // Render
                    renderer.render(scene, camera);
                };

                animate();

                // Handle window resize
                const handleResize = () => {
                    if (!container) return;

                    camera.aspect = container.clientWidth / container.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(container.clientWidth, container.clientHeight);
                };

                window.addEventListener('resize', handleResize);

                // Cleanup
                return () => {
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }

                    window.removeEventListener('resize', handleResize);
                    if (container && renderer.domElement && container.contains(renderer.domElement)) {
                        container.removeChild(renderer.domElement);
                    }
                    renderer.dispose();

                    // Dispose of the current model
                    if (merlinModelRef.current) {
                        scene.remove(merlinModelRef.current);
                        merlinModelRef.current = null;
                    }
                };
            } catch (err) {
                console.error('Error initializing 3D scene:', err);
                setError('Failed to initialize 3D viewer. Please try again later.');
                setLoading(false);
            }
        };

        initScene();
    }, []); // Empty dependency array for initial setup

    // Effect to handle model changes when theme changes
    useEffect(() => {
        if (!sceneRef.current) return;

        // Store scene in a local variable to satisfy TypeScript
        const scene = sceneRef.current;

        const updateModel = async () => {
            try {
                const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
                await loadModel(modelPath, scene, GLTFLoader);
            } catch (error) {
                console.error('Error importing GLTFLoader:', error);
                setError('Failed to load 3D model loader.');
            }
        };

        updateModel();
    }, [modelPath]); // Run when modelPath changes

    return (
        <div className="w-full h-full flex flex-col">
            {/* Loading overlay */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                    <div className="text-white text-xl">Loading Merlin...</div>
                </div>
            )}

            {/* Error message */}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-10">
                    <div className="text-white bg-red-600 p-4 rounded max-w-md">
                        <h3 className="text-lg font-bold mb-2">Error</h3>
                        <p>{error}</p>
                    </div>
                </div>
            )}

            {/* Theme selector */}
            <div className="absolute top-4 right-4 z-10">
                <select
                    className="bg-gray-800 text-white rounded px-4 py-2 border border-gray-600"
                    value={activeTheme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                >
                    {THEMES.map(theme => (
                        <option key={theme.id} value={theme.id}>
                            {theme.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Audio analyzer */}
            <AudioAnalyzer onAudioData={handleAudioData} />

            {/* Visual effects */}
            {sceneRef.current && (
                <VisualEffects
                    scene={sceneRef.current}
                    audioData={audioData}
                    activeTheme={activeTheme}
                />
            )}

            {/* 3D container */}
            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default MerlinViewer;