"use client";

import { useState, useEffect } from "react";
import { getSocketService } from "@/lib/socketService";

interface ConnectionDetails {
  attempts: number;
  lastError: string;
  socketId: string;
  lastAttempt: string;
}

// Define the socket shape to avoid the "any" cast
interface SocketWithId {
  socket?: {
    id?: string;
  };
}

export default function SocketDebug() {
  const socketService = getSocketService();
  const [isConnected, setIsConnected] = useState(false);
  const [connectionDetails, setConnectionDetails] = useState<ConnectionDetails>(
    {
      attempts: 0,
      lastError: "",
      socketId: "",
      lastAttempt: "",
    }
  );
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    // Register socket event handlers
    const onConnect = () => {
      setIsConnected(true);
      // Safe way to access socket id
      const socketServiceWithId = socketService as SocketWithId;
      setConnectionDetails((prev) => ({
        ...prev,
        socketId: socketServiceWithId.socket?.id || "unknown",
      }));
      setDebugInfo((prev) => prev + "\nConnected to socket server");
    };

    const onDisconnect = () => {
      setIsConnected(false);
      setDebugInfo((prev) => prev + "\nDisconnected from socket server");
    };

    // Fixed error handler to accept optional parameter
    const onConnectError = (error?: Error) => {
      setConnectionDetails((prev) => ({
        ...prev,
        attempts: prev.attempts + 1,
        lastError: error?.message || "Unknown error",
        lastAttempt: new Date().toISOString(),
      }));
      setDebugInfo(
        (prev) =>
          prev + `\nConnection error: ${error?.message || "Unknown error"}`
      );
    };

    // Register listeners
    const connectCleanup = socketService.on("connect", onConnect);
    const disconnectCleanup = socketService.on("disconnect", onDisconnect);
    const errorCleanup = socketService.on("connect_error", onConnectError);

    // Initialize connection
    socketService.connect();

    // Check server health
    checkServerHealth();

    // Cleanup on unmount
    return () => {
      connectCleanup();
      disconnectCleanup();
      errorCleanup();
    };
  }, [socketService]); // Include socketService in dependencies

  // Function to check server health
  const checkServerHealth = async () => {
    try {
      setDebugInfo((prev) => prev + "\nChecking server health...");

      // Try regular socket endpoint
      const socketResp = await fetch("/api/socket");
      const socketText = await socketResp.text();
      setDebugInfo(
        (prev) =>
          prev +
          `\nSocket endpoint response: ${
            socketResp.status
          } ${socketText.substring(0, 50)}`
      );

      // Try alternative socket endpoint
      const socketioResp = await fetch("/api/socketio");
      const socketioJson = await socketioResp.json();
      setDebugInfo(
        (prev) =>
          prev +
          `\nSocketIO endpoint response: ${
            socketioResp.status
          } ${JSON.stringify(socketioJson).substring(0, 50)}`
      );
    } catch (error) {
      setDebugInfo(
        (prev) =>
          prev +
          `\nHealth check error: ${
            error instanceof Error ? error.message : String(error)
          }`
      );
    }
  };

  // Connect/disconnect handlers
  const handleConnect = () => {
    setDebugInfo((prev) => prev + "\nManually connecting...");
    socketService.connect();
  };

  const handleDisconnect = () => {
    setDebugInfo((prev) => prev + "\nManually disconnecting...");
    socketService.disconnect();
  };

  const handlePing = () => {
    setDebugInfo((prev) => prev + "\nSending ping...");
    socketService.ping();
  };

  const handleClearLogs = () => {
    setDebugInfo("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto my-4">
      <h2 className="text-xl font-bold mb-4">Socket Connection Debugger</h2>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="mr-2">Status:</span>
          <span
            className={`px-2 py-1 rounded text-white ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>

        <div className="text-sm mb-4">
          <p>Connection attempts: {connectionDetails.attempts}</p>
          {connectionDetails.lastError && (
            <p>Last error: {connectionDetails.lastError}</p>
          )}
          {connectionDetails.socketId && (
            <p>Socket ID: {connectionDetails.socketId}</p>
          )}
          {connectionDetails.lastAttempt && (
            <p>Last attempt: {connectionDetails.lastAttempt}</p>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleConnect}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Connect
          </button>

          <button
            onClick={handleDisconnect}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Disconnect
          </button>

          <button
            onClick={handlePing}
            className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Ping Server
          </button>

          <button
            onClick={checkServerHealth}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Check Health
          </button>

          <button
            onClick={handleClearLogs}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear Logs
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Debug Logs:</h3>
        <pre className="bg-black text-green-400 p-3 rounded text-xs h-64 overflow-y-auto whitespace-pre-wrap">
          {debugInfo || "No logs yet"}
        </pre>
      </div>
    </div>
  );
}
