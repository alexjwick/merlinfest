"use client";

import { useState, useEffect, CSSProperties } from "react";
import { useSocket } from "../../hooks/useSocket";

// Define theme style type
interface ThemeStyle extends CSSProperties {
  backgroundColor: string;
  transition: string;
  opacity: number;
}

export default function Projection() {
  const { isConnected, visualState, userCount } = useSocket();

  // This would be where you'd integrate with Three.js or p5.js
  // For now, we'll create a simple placeholder display

  // Generate a background style based on the current theme and parameters
  const getBackgroundStyle = (): ThemeStyle => {
    const { parameters, activeTheme } = visualState;
    const { speed, intensity, colorScheme } = parameters;

    // Different themes would have different visual presentations
    switch (activeTheme) {
      case "merlinDJ":
        return {
          backgroundColor: colorScheme,
          transition: `background-color ${100 - speed * 0.8}ms ease-in-out`,
          opacity: intensity / 100,
        };
      case "wizard":
        return {
          backgroundColor: "#9C27B0",
          transition: `all ${100 - speed * 0.8}ms ease-in-out`,
          opacity: intensity / 100,
        };
      default:
        return {
          backgroundColor: colorScheme,
          transition: `all ${100 - speed * 0.8}ms ease-in-out`,
          opacity: intensity / 100,
        };
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Placeholder for the visual canvas - would be replaced with Three.js or p5.js */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={getBackgroundStyle()}
      >
        <h1 className="text-5xl font-bold text-white mb-8">
          MerlinFest Visuals
        </h1>
        <div className="text-white text-xl">
          <p>Theme: {visualState.activeTheme}</p>
          <p>Connected Users: {userCount}</p>
          <p>Speed: {visualState.parameters.speed}</p>
          <p>Intensity: {visualState.parameters.intensity}</p>
        </div>
      </div>

      {/* Connection status indicator - visible only during setup/testing */}
      <div className="absolute top-2 right-2 p-2 bg-black bg-opacity-50 text-white rounded">
        <p>
          Status:
          <span
            className={`ml-2 ${
              isConnected ? "text-green-500" : "text-red-500"
            }`}
          >
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </p>
      </div>
    </div>
  );
}
