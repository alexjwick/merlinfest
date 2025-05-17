import React, { useState, useEffect } from 'react';
import * as THREE from 'three';

// Custom hook for creating particle effects around Merlin
export function useParticleEffect(scene: THREE.Scene | null) {
    useEffect(() => {
        if (!scene) return;

        // Create particles
        const particleCount = 500;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        // Create material with custom shader
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x0088ff,
            size: 0.05,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending
        });

        // Position particles in a sphere around the origin
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            // Random spherical distribution
            const radius = 2 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Create particle system
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        // Animation effect data
        const velocities = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            velocities[i] = (Math.random() - 0.5) * 0.01;
        }

        // Animation update function
        const updateParticles = () => {
            const positions = particles.attributes.position.array as Float32Array;

            for (let i = 0; i < particleCount * 3; i += 3) {
                // Update positions based on velocities
                positions[i] += velocities[i];
                positions[i + 1] += velocities[i + 1];
                positions[i + 2] += velocities[i + 2];

                // Boundary check - keep particles within certain radius
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];
                const r = Math.sqrt(x * x + y * y + z * z);

                if (r > 5) {
                    // Reset position if particle goes too far
                    positions[i] *= 4.5 / r;
                    positions[i + 1] *= 4.5 / r;
                    positions[i + 2] *= 4.5 / r;

                    // Reverse velocity
                    velocities[i] *= -0.5;
                    velocities[i + 1] *= -0.5;
                    velocities[i + 2] *= -0.5;
                }
            }

            particles.attributes.position.needsUpdate = true;

            requestAnimationFrame(updateParticles);
        };

        // Start animation
        updateParticles();

        // Clean up
        return () => {
            scene.remove(particleSystem);
            particleMaterial.dispose();
            particles.dispose();
        };
    }, [scene]);
}

// Hook for creating a visual loading indicator
export function useLoadingEffect(container: HTMLDivElement | null, isLoading: boolean) {
    const [loadingRenderer, setLoadingRenderer] = useState<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        if (!container || !isLoading) return;

        // Create a simple scene for loading animation
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000);
        container.appendChild(renderer.domElement);

        setLoadingRenderer(renderer);

        // Create a loading animation (spinning cube)
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00aaff,
            wireframe: true
        });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Add some text
        const animate = () => {
            if (!isLoading) return;

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.02;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [container, isLoading]);

    // Remove loading renderer when done loading
    useEffect(() => {
        if (!isLoading && loadingRenderer && container) {
            if (container.contains(loadingRenderer.domElement)) {
                container.removeChild(loadingRenderer.domElement);
            }
            loadingRenderer.dispose();
            setLoadingRenderer(null);
        }
    }, [isLoading, loadingRenderer, container]);
}

// Hook for post-processing effects
export function usePostProcessing(renderer: THREE.WebGLRenderer | null, scene: THREE.Scene | null, camera: THREE.Camera | null) {
    // NOTE: This is a placeholder for adding more advanced visual effects using 
    // Three.js postprocessing library. This would need 'three/examples/jsm/postprocessing' imports.
    // For simplicity, I'm not implementing the full effect chain in this example.

    useEffect(() => {
        if (!renderer || !scene || !camera) return;

        // This is where you would set up:
        // - Bloom effects
        // - Film grain
        // - Color correction
        // - Other visual effects for the Merlinfest aesthetic

        return () => {
            // Clean up effects
        };
    }, [renderer, scene, camera]);
}