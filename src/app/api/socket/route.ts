import { Server as SocketServer } from "socket.io";
import { NextRequest } from "next/server";

// Define interfaces for visual state
interface VisualParameters {
  speed: number;
  intensity: number;
  colorScheme: string;
  effectIds: string[];
}

interface VisualState {
  activeTheme: string;
  parameters: VisualParameters;
  activeUsers: number;
  lastUpdated: Date;
}

// Track active connections and visual state
let activeConnections: number = 0;
let currentVisualState: VisualState = {
  activeTheme: "default",
  parameters: {
    speed: 50,
    intensity: 50,
    colorScheme: "#ff5500",
    effectIds: [],
  },
  activeUsers: 0,
  lastUpdated: new Date(),
};

// This map stores all active socket connections
const socketMap: Map<string, any> = new Map();

export async function GET(req: NextRequest) {
  // We need to check if the socket server is already initialized on this response
  const res = new Response();

  // Get the socket instance from the server if it exists
  const socketInstance = await initializeSocket(req, res);

  // Return a 200 response
  return new Response("Socket initialized", {
    status: 200,
  });
}

// Helper function to initialize Socket.io on the server
const initializeSocket = async (req: NextRequest, res: Response) => {
  // Get the server instance
  const requestHeaders = new Headers(req.headers);
  const protocol = requestHeaders.get("x-forwarded-proto") || "http";
  const host = requestHeaders.get("host") || "localhost:3000";

  // Check if we have a socket.io instance already in the global scope
  if ((global as any).io) {
    return (global as any).io;
  }

  // Create a new socket.io server
  const io = new SocketServer({
    path: "/api/socket/io",
    addTrailingSlash: false,
    cors: {
      origin: `${protocol}://${host}`,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  // Store the io instance on the global object
  (global as any).io = io;

  // Set up socket.io event handlers
  io.on("connection", (socket) => {
    // Increment active connection count
    activeConnections++;
    currentVisualState.activeUsers = activeConnections;
    socketMap.set(socket.id, socket);

    console.log(`New connection established. ID: ${socket.id}`);
    console.log(`Active connections: ${activeConnections}`);

    // Send current visual state to new client
    socket.emit("initial-state", currentVisualState);

    // Broadcast updated user count to all clients
    io.emit("user-count-update", { count: activeConnections });

    // Handle client disconnect
    socket.on("disconnect", () => {
      activeConnections--;
      currentVisualState.activeUsers = activeConnections;
      socketMap.delete(socket.id);

      console.log(`Connection closed. ID: ${socket.id}`);
      console.log(`Active connections: ${activeConnections}`);

      // Broadcast updated user count
      io.emit("user-count-update", { count: activeConnections });
    });

    // Handle visual parameter changes from clients
    socket.on("update-visuals", (data: Partial<VisualState>) => {
      // Update the current visual state
      currentVisualState = {
        ...currentVisualState,
        ...data,
        activeUsers: activeConnections,
        lastUpdated: new Date(),
      };

      // Broadcast the updated state to all clients except sender
      socket.broadcast.emit("visual-update", currentVisualState);

      // Log the update (for development)
      console.log("Visual state updated:", currentVisualState);
    });

    // Handle theme changes
    socket.on("change-theme", (theme: string) => {
      currentVisualState.activeTheme = theme;
      currentVisualState.lastUpdated = new Date();

      // Broadcast the theme change to all clients
      io.emit("theme-changed", { theme });

      console.log(`Theme changed to: ${theme}`);
    });

    // Handle effect triggers
    socket.on("trigger-effect", (effectId: string) => {
      // Broadcast the effect trigger to all clients
      io.emit("effect-triggered", { effectId });

      console.log(`Effect triggered: ${effectId}`);
    });
  });

  return io;
};
