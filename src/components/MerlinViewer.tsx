'use client';
// src/components/MerlinViewer.tsx

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
// Don't import Three.js modules directly here - we'll import them dynamically inside useEffect

const MerlinViewer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [modelPath, setModelPath] = useState<string>('/models/merlin.glb');

    useEffect(() => {
        // Return early if containerRef is not yet available
        if (!containerRef.current) return;

        // Keep a reference to the current DOM element
        const container = containerRef.current;

        // Dynamically import Three.js modules
        const initScene = async () => {
            try {
                // Import the modules we need
                const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
                const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');

                // Create scene
                const scene = new THREE.Scene();
                scene.background = new THREE.Color(0x121212);

                // Add ambient light
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);

                // Add directional light
                const dirLight = new THREE.DirectionalLight(0xffffff, 1);
                dirLight.position.set(5, 5, 5);
                scene.add(dirLight);

                // Add fill light from opposite side
                const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
                fillLight.position.set(-5, 0, -5);
                scene.add(fillLight);

                // Camera setup
                const camera = new THREE.PerspectiveCamera(
                    45,
                    container.clientWidth / container.clientHeight,
                    0.1,
                    1000
                );
                camera.position.z = 5;

                // Renderer setup
                const renderer = new THREE.WebGLRenderer({ antialias: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.outputColorSpace = THREE.SRGBColorSpace;
                container.appendChild(renderer.domElement);

                // Controls for camera
                const controls = new OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.05;

                // Helper grid (optional)
                const gridHelper = new THREE.GridHelper(10, 10);
                scene.add(gridHelper);

                // Load 3D model
                const loader = new GLTFLoader();
                let mixer: THREE.AnimationMixer | null = null;

                loader.load(
                    modelPath,
                    (gltf) => {
                        // Success callback
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

                        // Setup animation if model is rigged
                        if (gltf.animations && gltf.animations.length > 0) {
                            mixer = new THREE.AnimationMixer(gltf.scene);
                            const animation = gltf.animations[0]; // Use first animation
                            const action = mixer.clipAction(animation);
                            action.play();
                        }
                    },
                    (progress) => {
                        // Progress callback
                        console.log(`Loading: ${Math.round(progress.loaded / progress.total * 100)}%`);
                    },
                    (error) => {
                        // Error callback
                        console.error('Error loading model:', error);
                        setLoading(false);
                        setError("Failed to load 3D model. Please make sure the model file exists.");
                    }
                );

                // Animation loop
                const clock = new THREE.Clock();

                const animate = () => {
                    requestAnimationFrame(animate);

                    // Update controls
                    controls.update();

                    // Update animations
                    if (mixer) {
                        mixer.update(clock.getDelta());
                    }

                    // Auto-rotate the scene gently
                    scene.rotation.y += 0.001;

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
                    window.removeEventListener('resize', handleResize);
                    if (container && container.contains(renderer.domElement)) {
                        container.removeChild(renderer.domElement);
                    }
                    renderer.dispose();
                };
            } catch (err) {
                console.error('Error initializing 3D scene:', err);
                setError('Failed to initialize 3D viewer. Please try again later.');
                setLoading(false);
            }
        };

        initScene();
    }, [modelPath]);

    return (
        <div className="w-full h-full flex flex-col">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="text-white">Loading Merlin...</div>
                </div>
            )}

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="text-white bg-red-500 p-4 rounded">{error}</div>
                </div>
            )}

            <div ref={containerRef} className="w-full h-full" />
        </div>
    );
};

export default MerlinViewer;