import { NextRequest, NextResponse } from "next/server";
import { createServer } from "http";
import { Server } from "socket.io";

// This configuration is important - it tells Next.js to skip body parsing
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Initialize Socket.io server
function initSocketIO(): Server | null {
  // Static server instance
  let io: Server | null = null;

  if (io) {
    console.log("Socket.io server already running");
    return io;
  }

  try {
    // Create a simple HTTP server
    const httpServer = createServer();

    // Create Socket.io server
    io = new Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    // Setup event handlers
    io.on("connection", (socket) => {
      console.log("New client connected:", socket.id);

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });

      // Basic ping/pong for testing
      socket.on("ping", (data: unknown) => {
        console.log("Received ping:", data);
        socket.emit("pong", {
          message: "Server received your ping",
          timestamp: new Date(),
        });
      });
    });

    // Start the server on a random available port
    const PORT = process.env.SOCKET_PORT || 0;
    httpServer.listen(PORT, () => {
      const address = httpServer.address();
      const port = typeof address === "object" ? address?.port : PORT;
      console.log(`Socket.io server running on port ${port}`);
    });

    return io;
  } catch (error) {
    console.error("Failed to initialize Socket.io server:", error);
    throw error;
  }
}

// Endpoint to initialize Socket.io server
export async function GET(request: NextRequest) {
  try {
    // Use request to log details
    console.log("Socket.io GET request from:", request.url);

    // Initialize Socket.io
    initSocketIO();

    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Socket.io server initialized",
        timestamp: new Date(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }
    );
  } catch (error) {
    console.error("Error initializing Socket.io server:", error);

    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "Failed to initialize Socket.io server",
        error: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request: NextRequest) {
  console.log("CORS preflight request received", request.method);

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
}
