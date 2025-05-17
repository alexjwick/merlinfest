"use client";

import { useSocket } from "../../hooks/useSocket";
import Link from "next/link";

export default function Controller() {
  const {
    isConnected,
    visualState,
    userCount,
    updateVisuals,
    changeTheme,
    triggerEffect,
  } = useSocket();

  // This is a placeholder for demonstration purposes
  // The actual controller UI would have sliders, buttons, etc.
  const handleSendUpdate = (): void => {
    // Example of sending a parameter update
    updateVisuals({
      parameters: {
        ...visualState.parameters,
        speed: Math.floor(Math.random() * 100),
        intensity: Math.floor(Math.random() * 100),
      },
    });
  };

  // Example of changing the theme
  const handleChangeTheme = (themeName: string): void => {
    changeTheme(themeName);
  };

  // Example of triggering an effect
  const handleTriggerEffect = (effectId: string): void => {
    triggerEffect(effectId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          MerlinFest Visual Controller
        </h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </header>

      <main className="flex flex-col space-y-8">
        {/* Connection Status */}
        <section className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Connection Status</h2>
          <p>
            Socket:
            <span
              className={`ml-2 font-bold ${
                isConnected ? "text-green-500" : "text-red-500"
              }`}
            >
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </p>
          <p className="mt-2">
            Active Users: <span className="font-bold">{userCount}</span>
          </p>
        </section>

        {/* Current State Display */}
        <section className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Current Visual State</h2>
          <p>Theme: {visualState.activeTheme}</p>
          <p>Speed: {visualState.parameters.speed}</p>
          <p>Intensity: {visualState.parameters.intensity}</p>
          <p>Color: {visualState.parameters.colorScheme}</p>
          <p>
            Last Updated:{" "}
            {new Date(visualState.lastUpdated).toLocaleTimeString()}
          </p>
        </section>

        {/* Test Controls */}
        <section className="p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Test Controls</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleSendUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={!isConnected}
            >
              Send Random Parameter Update
            </button>

            <button
              onClick={() => handleChangeTheme("merlinDJ")}
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              disabled={!isConnected}
            >
              Change to DJ Merlin Theme
            </button>

            <button
              onClick={() => handleTriggerEffect("sparkle")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              disabled={!isConnected}
            >
              Trigger Sparkle Effect
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
