'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface EffectsProps {
    scene: THREE.Scene;
    audioData?: {
        volume: number;
        bass: number;
        mid: number;
        treble: number;
        beat: boolean;
        frequencyData: number[];
    } | null;
    activeTheme: string;
}

const VisualEffects: React.FC<EffectsProps> = ({ scene, audioData, activeTheme }) => {
    const particleSystemRef = useRef<THREE.Points | null>(null);
    const glowRef = useRef<THREE.Mesh | null>(null);
    const floorRef = useRef<THREE.Mesh | null>(null);
    const updateRef = useRef<number | null>(null);

    // Theme settings
    const [themeSettings, setThemeSettings] = useState({
        particleColor: new THREE.Color(0x00aaff),
        glowColor: new THREE.Color(0x0088ff),
        floorColor: new THREE.Color(0x000033),
        particleCount: 2000,
        particleSize: 0.05,
    });

    // Initialize effects
    useEffect(() => {
        // Clean up any existing effects
        cleanup();

        // Create new effects based on active theme
        initEffects();

        // Update theme settings based on activeTheme
        updateThemeSettings(activeTheme);

        return () => {
            cleanup();
            if (updateRef.current) {
                cancelAnimationFrame(updateRef.current);
            }
        };

        // Initialize the visual effects
        function initEffects() {
            // 1. Create particle system
            createParticleSystem();

            // 2. Create glow effect
            createGlowEffect();

            // 3. Create reflective floor
            createFloor();

            // Start the update loop
            updateEffects();
        }

        // Create particle system
        function createParticleSystem() {
            const particleCount = themeSettings.particleCount;
            const particles = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);

            const color = themeSettings.particleColor;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                // Position particles in a sphere around the origin
                const radius = 3 + Math.random() * 3;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;

                positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i3 + 2] = radius * Math.cos(phi);

                // Set particle colors with slight variation
                colors[i3] = color.r + Math.random() * 0.1;
                colors[i3 + 1] = color.g + Math.random() * 0.1;
                colors[i3 + 2] = color.b + Math.random() * 0.1;

                // Vary the particle sizes
                sizes[i] = themeSettings.particleSize * (0.5 + Math.random());
            }

            particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            // Create shader material for better-looking particles
            const particleMaterial = new THREE.PointsMaterial({
                size: themeSettings.particleSize,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
                sizeAttenuation: true,
            });

            const particleSystem = new THREE.Points(particles, particleMaterial);
            scene.add(particleSystem);

            particleSystemRef.current = particleSystem;
        }

        // Create glow effect around the center
        function createGlowEffect() {
            const glowGeometry = new THREE.SphereGeometry(1.5, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: themeSettings.glowColor,
                transparent: true,
                opacity: 0.15,
                side: THREE.BackSide,
            });

            const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
            glowMesh.scale.set(1.5, 1.5, 1.5);
            scene.add(glowMesh);

            glowRef.current = glowMesh;
        }

        // Create reflective floor
        function createFloor() {
            const floorGeometry = new THREE.PlaneGeometry(20, 20);
            const floorMaterial = new THREE.MeshStandardMaterial({
                color: themeSettings.floorColor,
                metalness: 0.8,
                roughness: 0.2,
                side: THREE.DoubleSide,
            });

            const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.rotation.x = Math.PI / 2;
            floor.position.y = -2;
            scene.add(floor);

            floorRef.current = floor;
        }

        // Update effects on each frame
        function updateEffects() {
            // Update particle positions based on time
            if (particleSystemRef.current) {
                const positions = particleSystemRef.current.geometry.attributes.position.array as Float32Array;
                const time = Date.now() * 0.001;

                for (let i = 0; i < positions.length; i += 3) {
                    // Add a gentle wave motion to particles
                    const x = positions[i];
                    const y = positions[i + 1];
                    const z = positions[i + 2];

                    const distance = Math.sqrt(x * x + y * y + z * z);

                    // Move particles in a slight circular motion
                    positions[i] += Math.sin(time + distance) * 0.003;
                    positions[i + 1] += Math.cos(time + distance) * 0.003;
                    positions[i + 2] += Math.sin(time * 0.5) * 0.003;

                    // Keep particles within bounds
                    if (distance > 6) {
                        const scale = 5.5 / distance;
                        positions[i] *= scale;
                        positions[i + 1] *= scale;
                        positions[i + 2] *= scale;
                    }
                }

                particleSystemRef.current.geometry.attributes.position.needsUpdate = true;
            }

            // Pulse the glow effect
            if (glowRef.current) {
                const time = Date.now() * 0.001;
                const pulse = 0.8 + Math.sin(time * 2) * 0.2;
                glowRef.current.scale.set(pulse, pulse, pulse);

                // Update glow based on audio if available
                if (audioData) {
                    const bassPulse = 1 + audioData.bass * 0.5;
                    glowRef.current.scale.set(bassPulse, bassPulse, bassPulse);

                    // Transition colors on beat
                    if (audioData.beat) {
                        const glowMaterial = glowRef.current.material as THREE.MeshBasicMaterial;
                        const hue = (time * 0.1) % 1;
                        glowMaterial.color.setHSL(hue, 1, 0.5);
                    }

                    // Change opacity based on volume
                    const glowMaterial = glowRef.current.material as THREE.MeshBasicMaterial;
                    glowMaterial.opacity = 0.1 + audioData.volume * 0.2;
                }
            }

            // Floor effects
            if (floorRef.current && audioData) {
                const floorMaterial = floorRef.current.material as THREE.MeshStandardMaterial;

                // Change floor color slightly based on bass
                if (audioData.beat) {
                    const hue = (Date.now() * 0.0001) % 1;
                    floorMaterial.color.setHSL(hue, 0.5, 0.2 + audioData.bass * 0.2);
                }
            }

            updateRef.current = requestAnimationFrame(updateEffects);
        }

        // Clean up effects
        function cleanup() {
            if (particleSystemRef.current && scene.children.includes(particleSystemRef.current)) {
                scene.remove(particleSystemRef.current);
                particleSystemRef.current.geometry.dispose();
                (particleSystemRef.current.material as THREE.Material).dispose();
                particleSystemRef.current = null;
            }

            if (glowRef.current && scene.children.includes(glowRef.current)) {
                scene.remove(glowRef.current);
                glowRef.current.geometry.dispose();
                (glowRef.current.material as THREE.Material).dispose();
                glowRef.current = null;
            }

            if (floorRef.current && scene.children.includes(floorRef.current)) {
                scene.remove(floorRef.current);
                floorRef.current.geometry.dispose();
                (floorRef.current.material as THREE.Material).dispose();
                floorRef.current = null;
            }
        }
    }, [scene, activeTheme, audioData]);

    // Update effects when audio data changes - moved this logic to the main useEffect
    // to avoid dependency issues, since we already have these same dependencies there

    // Update theme settings based on selected theme
    const updateThemeSettings = (theme: string) => {
        switch (theme) {
            case 'dj':
                setThemeSettings({
                    particleColor: new THREE.Color(0xff3300),
                    glowColor: new THREE.Color(0xff5500),
                    floorColor: new THREE.Color(0x220000),
                    particleCount: 3000,
                    particleSize: 0.04,
                });
                break;
            case 'wizard':
                setThemeSettings({
                    particleColor: new THREE.Color(0x9900ff),
                    glowColor: new THREE.Color(0x8800ff),
                    floorColor: new THREE.Color(0x110022),
                    particleCount: 2500,
                    particleSize: 0.05,
                });
                break;
            case 'cosmic':
                setThemeSettings({
                    particleColor: new THREE.Color(0x00ffff),
                    glowColor: new THREE.Color(0x00aaff),
                    floorColor: new THREE.Color(0x000033),
                    particleCount: 4000,
                    particleSize: 0.03,
                });
                break;
            case 'brown':
                setThemeSettings({
                    particleColor: new THREE.Color(0xbb0000),
                    glowColor: new THREE.Color(0x993300),
                    floorColor: new THREE.Color(0x221100),
                    particleCount: 2000,
                    particleSize: 0.05,
                });
                break;
            default:
                // Default theme
                setThemeSettings({
                    particleColor: new THREE.Color(0x00aaff),
                    glowColor: new THREE.Color(0x0088ff),
                    floorColor: new THREE.Color(0x000033),
                    particleCount: 2000,
                    particleSize: 0.05,
                });
        }
    };

    // This component doesn't render anything visually
    return null;
};

export default VisualEffects;