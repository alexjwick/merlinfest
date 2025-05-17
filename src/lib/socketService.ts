"use client";

import { io, Socket } from "socket.io-client";

// Interface for visual parameters
export interface VisualParameters {
  speed: number;
  intensity: number;
  colorScheme: string;
  effectIds: string[];
}

// Interface for visual state
export interface VisualState {
  activeTheme: string;
  parameters: VisualParameters;
  activeUsers: number;
  lastUpdated: Date;
}

// Define callback types
type CallbackFunction<T = any> = (data?: T) => void;
type CallbackMap = {
  [event: string]: CallbackFunction[];
};

// SocketService singleton for client-side socket connections
class SocketService {
  private socket: Socket | null = null;
  private callbacks: CallbackMap = {
    connect: [],
    disconnect: [],
    "initial-state": [],
    "visual-update": [],
    "user-count-update": [],
    "theme-changed": [],
    "effect-triggered": [],
  };

  // Initialize socket connection
  connect(): void {
    if (this.socket) return;

    // Connect to the socket server using the app router path
    this.socket = io("", {
      path: "/api/socket/io",
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      autoConnect: true,
      transports: ["websocket"],
    });

    // Set up listeners for socket events
    this.socket.on("connect", () => {
      console.log("Socket connected!", this.socket?.id);
      this._triggerCallbacks("connect");
    });

    this.socket.on("connect_error", (err: Error) => {
      console.error("Socket connection error:", err);
    });

    this.socket.on("disconnect", (reason: string) => {
      console.log("Socket disconnected! Reason:", reason);
      this._triggerCallbacks("disconnect");
    });

    this.socket.on("initial-state", (data: VisualState) => {
      console.log("Received initial state:", data);
      this._triggerCallbacks("initial-state", data);
    });

    this.socket.on("visual-update", (data: VisualState) => {
      console.log("Visual update received:", data);
      this._triggerCallbacks("visual-update", data);
    });

    this.socket.on("user-count-update", (data: { count: number }) => {
      console.log("User count update:", data);
      this._triggerCallbacks("user-count-update", data);
    });

    this.socket.on("theme-changed", (data: { theme: string }) => {
      console.log("Theme changed:", data);
      this._triggerCallbacks("theme-changed", data);
    });

    this.socket.on("effect-triggered", (data: { effectId: string }) => {
      console.log("Effect triggered:", data);
      this._triggerCallbacks("effect-triggered", data);
    });
  }

  // Disconnect socket
  disconnect(): void {
    if (!this.socket) return;
    this.socket.disconnect();
    this.socket = null;
  }

  // Add event listener for socket events
  on<T = any>(event: string, callback: CallbackFunction<T>): () => void {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push(callback as CallbackFunction);

    return () => {
      this.callbacks[event] = this.callbacks[event].filter(
        (cb) => cb !== callback
      );
    };
  }

  // Trigger registered callbacks for an event
  private _triggerCallbacks(event: string, data?: any): void {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach((callback) => callback(data));
    }
  }

  // Check if socket is connected
  isConnected(): boolean {
    return this.socket?.connected || false;
  }

  // Send an update to the visual parameters
  updateVisuals(visualData: Partial<VisualState>): void {
    if (!this.socket) return;
    this.socket.emit("update-visuals", visualData);
  }

  // Change the active theme
  changeTheme(theme: string): void {
    if (!this.socket) return;
    this.socket.emit("change-theme", theme);
  }

  // Trigger a visual effect
  triggerEffect(effectId: string): void {
    if (!this.socket) return;
    this.socket.emit("trigger-effect", effectId);
  }
}

// Mock implementation for server-side rendering
const createMockSocketService = () => ({
  connect: () => {},
  disconnect: () => {},
  on: () => () => {},
  isConnected: () => false,
  updateVisuals: () => {},
  changeTheme: () => {},
  triggerEffect: () => {},
});

// Singleton instance
let socketServiceInstance: SocketService | null = null;

// Function to get the singleton instance
export const getSocketService = ():
  | SocketService
  | ReturnType<typeof createMockSocketService> => {
  if (typeof window !== "undefined") {
    // Only create the service on the client side
    if (!socketServiceInstance) {
      socketServiceInstance = new SocketService();
    }
    return socketServiceInstance;
  }

  // Return a mock for SSR
  return createMockSocketService();
};

export default getSocketService;
