"use client";

import { useState, useEffect } from "react";
import { getSocketService, VisualState } from "../lib/socketService";

/**
 * Interface for the socket hook return values
 */
interface UseSocketReturn {
  isConnected: boolean;
  visualState: VisualState;
  userCount: number;
  updateVisuals: (visualData: Partial<VisualState>) => void;
  changeTheme: (theme: string) => void;
  triggerEffect: (effectId: string) => void;
}

/**
 * Custom React hook for WebSocket functionality
 * @returns Socket state and methods
 */
export function useSocket(): UseSocketReturn {
  // Get the socket service singleton
  const socketService = getSocketService();

  // Track connection status
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Track current visual state
  const [visualState, setVisualState] = useState<VisualState>({
    activeTheme: "default",
    parameters: {
      speed: 50,
      intensity: 50,
      colorScheme: "#ff5500",
      effectIds: [],
    },
    activeUsers: 0,
    lastUpdated: new Date(),
  });

  // Track user count
  const [userCount, setUserCount] = useState<number>(0);

  // Connect to socket server on component mount
  useEffect(() => {
    // Create event listeners
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    const onInitialState = (data?: VisualState) => {
      if (data) setVisualState(data);
    };
    const onVisualUpdate = (data?: VisualState) => {
      if (data) setVisualState(data);
    };
    const onUserCountUpdate = (data?: { count: number }) => {
      if (data) setUserCount(data.count);
    };

    // Register event listeners
    const connectCleanup = socketService.on("connect", onConnect);
    const disconnectCleanup = socketService.on("disconnect", onDisconnect);
    const initialStateCleanup = socketService.on<VisualState>(
      "initial-state",
      onInitialState
    );
    const visualUpdateCleanup = socketService.on<VisualState>(
      "visual-update",
      onVisualUpdate
    );
    const userCountCleanup = socketService.on<{ count: number }>(
      "user-count-update",
      onUserCountUpdate
    );

    // Initialize connection
    socketService.connect();

    // Set initial connection state
    setIsConnected(socketService.isConnected());

    // Cleanup function
    return () => {
      connectCleanup();
      disconnectCleanup();
      initialStateCleanup();
      visualUpdateCleanup();
      userCountCleanup();
    };
  }, [socketService]); // Added socketService as dependency

  // Methods to interact with the socket
  const updateVisuals = (visualData: Partial<VisualState>): void => {
    socketService.updateVisuals(visualData);
    // Update local state immediately for responsive UI
    setVisualState((prev) => ({
      ...prev,
      ...visualData,
      lastUpdated: new Date(),
    }));
  };

  const changeTheme = (theme: string): void => {
    socketService.changeTheme(theme);
    // Update local state immediately
    setVisualState((prev) => ({
      ...prev,
      activeTheme: theme,
      lastUpdated: new Date(),
    }));
  };

  const triggerEffect = (effectId: string): void => {
    socketService.triggerEffect(effectId);
  };

  // Return socket state and methods
  return {
    isConnected,
    visualState,
    userCount,
    updateVisuals,
    changeTheme,
    triggerEffect,
  };
}
