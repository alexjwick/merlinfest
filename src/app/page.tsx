'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ControlPanel from '@/components/ControlPanel';

// Import the enhanced MerlinViewer component with dynamic import
const MerlinViewer = dynamic(
  () => import('@/components/MerlinViewer').then(mod => mod.default), {
  loading: () => <div className="w-full h-screen flex items-center justify-center bg-black text-white">Loading immersive visualizer...</div>,
  ssr: false
});

export default function DJVisualPage() {
  const [activeTheme, setActiveTheme] = useState('default');

  // Shared state for user controls
  const [visualSettings, setVisualSettings] = useState({
    intensity: 50,
    speed: 50,
    color: '#00aaff',
  });

  // Handle control panel interactions
  const handleThemeChange = (theme: string) => {
    setActiveTheme(theme);
    // You would send this to your WebSocket server here
    console.log(`Theme changed to: ${theme}`);
  };

  const handleEffectTrigger = (effect: string) => {
    // You would send this to your WebSocket server here
    console.log(`Effect triggered: ${effect}`);

    // For demonstration, we'll just log it
    // In a real implementation, you would broadcast this to all connected clients
  };

  const handleColorChange = (color: string) => {
    setVisualSettings(prev => ({
      ...prev,
      color
    }));
    // You would send this to your WebSocket server here
    console.log(`Color changed to: ${color}`);
  };

  const handleIntensityChange = (intensity: number) => {
    setVisualSettings(prev => ({
      ...prev,
      intensity
    }));
    // You would send this to your WebSocket server here
    console.log(`Intensity changed to: ${intensity}`);
  };

  const handleSpeedChange = (speed: number) => {
    setVisualSettings(prev => ({
      ...prev,
      speed
    }));
    // You would send this to your WebSocket server here
    console.log(`Speed changed to: ${speed}`);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full-screen visualization */}
      <div className="absolute inset-0">
        <MerlinViewer />
      </div>

      {/* DJ Information Overlay */}
      <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-70 p-4 rounded">
        <h2 className="text-white text-xl font-bold">Merlinfest DJ Set</h2>
        <p className="text-gray-300">May 17, 2025 • 78 Arnold St</p>
        <p className="text-blue-400 mt-1">Currently playing: DJ Set Name</p>
      </div>

      {/* Active Users */}
      <div className="absolute top-4 right-4 z-10 bg-black bg-opacity-70 p-3 rounded text-white">
        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
        <span>42 users connected</span>
      </div>

      {/* Control Panel for User Interaction */}
      <ControlPanel
        onThemeChange={handleThemeChange}
        onEffectTrigger={handleEffectTrigger}
        onColorChange={handleColorChange}
        onIntensityChange={handleIntensityChange}
        onSpeedChange={handleSpeedChange}
      />
    </main>
  );
}