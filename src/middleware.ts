import { NextRequest, NextResponse } from "next/server";

// This middleware is needed to handle WebSocket connections
// for the Socket.io server in Next.js App Router
export function middleware(request: NextRequest): NextResponse {
  // Return early if this isn't a socket.io request
  if (!request.url.includes("/api/socket")) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Add required headers for WebSocket connections
  response.headers.set("Connection", "keep-alive");

  // Allow CORS for WebSocket connections in development
  if (process.env.NODE_ENV === "development") {
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "*");
  }

  return response;
}

// Configure middleware to run on socket API routes
export const config = {
  matcher: "/api/socket/:path*",
};
