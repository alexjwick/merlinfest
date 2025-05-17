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
type CallbackFunction<T = unknown> = (data?: T) => void;
type CallbackMap = {
  [event: string]: CallbackFunction[];
};

// Socket option types
type SocketOptions = {
  path: string;
  reconnectionAttempts: number;
  reconnectionDelay: number;
  timeout: number;
  transports: string[];
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
    connect_error: [],
  };
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private connectionAttempts: number = 0;
  private maxReconnectAttempts: number = 10;

  // Initialize socket connection
  connect(): void {
    if (this.socket) {
      console.log("Socket already exists, not reconnecting");
      return;
    }

    this.connectionAttempts++;
    console.log(`Socket connection attempt ${this.connectionAttempts}`);

    // Log host information for debugging
    const host = window.location.host;
    const protocol = window.location.protocol;
    console.log(`Current host: ${protocol}//${host}`);

    // Try a different connection approach based on attempts
    // This helps debug which connection method works
    let socketOptions: SocketOptions;

    if (this.connectionAttempts <= 3) {
      console.log("Trying primary connection method: path=/api/socket");
      socketOptions = {
        path: "/api/socket",
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        timeout: 10000,
        transports: ["websocket", "polling"],
      };
    } else if (this.connectionAttempts <= 6) {
      console.log("Trying secondary connection method: path=/api/socket/io");
      socketOptions = {
        path: "/api/socket/io",
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        timeout: 10000,
        transports: ["websocket", "polling"],
      };
    } else {
      console.log("Trying tertiary connection method: direct connect to host");
      socketOptions = {
        path: "/",
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
        timeout: 10000,
        transports: ["websocket", "polling"],
      };
    }

    try {
      // Connect to the socket server
      this.socket = io("", socketOptions);

      // Set up listeners for socket events
      this.socket.on("connect", () => {
        console.log("Socket connected successfully!", this.socket?.id);
        this.connectionAttempts = 0; // Reset counter on successful connection
        this._triggerCallbacks("connect");
      });

      this.socket.on("connect_error", (err: Error) => {
        console.error("Socket connection error:", err.message, err);
        this._triggerCallbacks("connect_error", err);

        // If we've tried all approaches and still failing
        if (this.connectionAttempts >= this.maxReconnectAttempts) {
          console.error(
            "Max reconnection attempts reached, stopping reconnection attempts"
          );
          this.disconnect();
          return;
        }

        // Try reconnecting with a different approach
        if (this.reconnectTimer) {
          clearTimeout(this.reconnectTimer);
        }

        this.reconnectTimer = setTimeout(() => {
          console.log("Attempting to reconnect with a different approach...");
          this.disconnect();
          this.connect();
        }, 3000);
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

      // Additional debug listeners
      this.socket.on("error", (error: Error) => {
        console.error("Socket error:", error);
      });

      this.socket.on("reconnect", (attemptNumber: number) => {
        console.log("Socket reconnected after", attemptNumber, "attempts");
      });

      this.socket.on("reconnect_attempt", (attemptNumber: number) => {
        console.log("Socket reconnection attempt", attemptNumber);
      });

      this.socket.on("reconnect_error", (error: Error) => {
        console.error("Socket reconnection error:", error);
      });

      this.socket.on("reconnect_failed", () => {
        console.error("Socket reconnection failed");
      });
    } catch (error) {
      console.error("Error creating socket connection:", error);
    }
  }

  // Disconnect socket
  disconnect(): void {
    if (!this.socket) return;

    console.log("Disconnecting socket...");
    this.socket.disconnect();
    this.socket.removeAllListeners();
    this.socket = null;

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  // Add event listener for socket events
  on<T = unknown>(event: string, callback: CallbackFunction<T>): () => void {
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
  private _triggerCallbacks(event: string, data?: unknown): void {
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
    if (!this.socket || !this.socket.connected) {
      console.warn("Cannot update visuals - socket not connected");
      return;
    }
    this.socket.emit("update-visuals", visualData);
  }

  // Change the active theme
  changeTheme(theme: string): void {
    if (!this.socket || !this.socket.connected) {
      console.warn("Cannot change theme - socket not connected");
      return;
    }
    this.socket.emit("change-theme", theme);
  }

  // Trigger a visual effect
  triggerEffect(effectId: string): void {
    if (!this.socket || !this.socket.connected) {
      console.warn("Cannot trigger effect - socket not connected");
      return;
    }
    this.socket.emit("trigger-effect", effectId);
  }

  // Force a health check ping to the socket server
  ping(): void {
    if (!this.socket) {
      console.warn("Cannot ping - socket not initialized");
      return;
    }

    console.log("Sending ping to socket server...");
    fetch("/api/socket")
      .then((response) => response.text())
      .then((data) => console.log("Socket server health check response:", data))
      .catch((error) =>
        console.error("Socket server health check failed:", error)
      );
  }
}

// Interface for mock socket service
interface MockSocketService {
  connect: () => void;
  disconnect: () => void;
  on: <T>(event: string, callback: CallbackFunction<T>) => () => void;
  isConnected: () => boolean;
  updateVisuals: (visualData: Partial<VisualState>) => void;
  changeTheme: (theme: string) => void;
  triggerEffect: (effectId: string) => void;
  ping: () => void;
}

// Mock implementation for server-side rendering
const createMockSocketService = (): MockSocketService => ({
  connect: () => {},
  disconnect: () => {},
  on: () => () => {},
  isConnected: () => false,
  updateVisuals: () => {},
  changeTheme: () => {},
  triggerEffect: () => {},
  ping: () => {},
});

// Singleton instance
let socketServiceInstance: SocketService | null = null;

// Function to get the singleton instance
export const getSocketService = (): SocketService | MockSocketService => {
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
