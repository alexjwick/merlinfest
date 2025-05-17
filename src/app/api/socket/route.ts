import { NextRequest, NextResponse } from "next/server";

// Next.js Edge Runtime is required for WebSockets
export const runtime = "edge";

export async function GET(request: NextRequest) {
  // A simple response to validate the route is working
  console.log("Socket route handler called", request.url);

  // Return a success response
  return new NextResponse("Socket API route is working", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

// This is needed to handle WebSocket connections properly
export async function POST(req: NextRequest) {
  try {
    console.log("Socket POST route handler called");

    // With App Router, we need to use the Edge Runtime
    // For debugging, let's echo back the request headers
    const headers = Object.fromEntries(req.headers.entries());
    console.log("Request headers:", headers);

    // For debugging, return the headers we received
    return new NextResponse(
      JSON.stringify({
        message: "Socket API POST route is working",
        headers,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      }
    );
  } catch (error) {
    console.error("Socket POST handler error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

// This is needed for CORS preflight requests
export async function OPTIONS(request: NextRequest) {
  console.log("Socket OPTIONS request", request.method);

  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Max-Age": "86400",
    },
  });
}
