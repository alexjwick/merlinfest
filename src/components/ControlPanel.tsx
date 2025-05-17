'use client';

import React, { useState } from 'react';

interface ControlPanelProps {
    onThemeChange: (theme: string) => void;
    onEffectTrigger: (effect: string) => void;
    onColorChange: (color: string) => void;
    onIntensityChange: (intensity: number) => void;
    onSpeedChange: (speed: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    onThemeChange,
    onEffectTrigger,
    onColorChange,
    onIntensityChange,
    onSpeedChange,
}) => {
    const [theme, setTheme] = useState('default');
    const [intensity, setIntensity] = useState(50);
    const [speed, setSpeed] = useState(50);
    const [color, setColor] = useState('#00aaff');
    const [isExpanded, setIsExpanded] = useState(false);

    const themes = [
        { id: 'default', name: 'Default Merlin' },
        { id: 'dj', name: 'DJ Merlin' },
        { id: 'wizard', name: 'Wizard Merlin' },
        { id: 'cosmic', name: 'Cosmic Merlin' },
        { id: 'brown', name: 'Brown University Merlin' },
    ];

    const effects = [
        { id: 'explosion', name: '💥 Explosion' },
        { id: 'rain', name: '🌧️ Particle Rain' },
        { id: 'flash', name: '⚡ Flash' },
        { id: 'spin', name: '🌀 Spin' },
        { id: 'rainbow', name: '🌈 Rainbow' },
    ];

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        onThemeChange(newTheme);
    };

    const handleIntensityChange = (newIntensity: number) => {
        setIntensity(newIntensity);
        onIntensityChange(newIntensity);
    };

    const handleSpeedChange = (newSpeed: number) => {
        setSpeed(newSpeed);
        onSpeedChange(newSpeed);
    };

    const handleColorChange = (newColor: string) => {
        setColor(newColor);
        onColorChange(newColor);
    };

    return (
        <div className={`fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white transition-all duration-300 z-20 ${isExpanded ? 'h-64' : 'h-12'}`}>
            {/* Toggle button */}
            <button
                className="absolute top-0 right-4 transform -translate-y-full bg-black px-4 py-2 rounded-t-md"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? '⬇️ Hide Controls' : '⬆️ Show Controls'}
            </button>

            {/* Controller content */}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Merlin Visualizer Controls</h2>

                {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            {/* Theme Selection */}
                            <div className="mb-4">
                                <label className="block mb-2">Visual Theme</label>
                                <div className="flex flex-wrap gap-2">
                                    {themes.map(t => (
                                        <button
                                            key={t.id}
                                            className={`px-3 py-1 rounded ${theme === t.id ? 'bg-blue-600' : 'bg-gray-700'}`}
                                            onClick={() => handleThemeChange(t.id)}
                                        >
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Effect Triggers */}
                            <div className="mb-4">
                                <label className="block mb-2">Trigger Effects</label>
                                <div className="flex flex-wrap gap-2">
                                    {effects.map(effect => (
                                        <button
                                            key={effect.id}
                                            className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700"
                                            onClick={() => onEffectTrigger(effect.id)}
                                        >
                                            {effect.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Sliders */}
                            <div className="mb-4">
                                <label className="block mb-2">Intensity: {intensity}%</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={intensity}
                                    onChange={(e) => handleIntensityChange(Number(e.target.value))}
                                    className="w-full"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2">Speed: {speed}%</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={speed}
                                    onChange={(e) => handleSpeedChange(Number(e.target.value))}
                                    className="w-full"
                                />
                            </div>

                            {/* Color Picker */}
                            <div className="mb-4">
                                <label className="block mb-2">Accent Color</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => handleColorChange(e.target.value)}
                                        className="w-10 h-10 rounded cursor-pointer"
                                    />
                                    <span>{color}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ControlPanel;