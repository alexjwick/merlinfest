"use client";

import { useEffect, ReactNode } from "react";
import { getSocketService } from "../../lib/socketService";

interface SocketProviderProps {
  children: ReactNode;
}

export default function SocketProvider({ children }: SocketProviderProps) {
  // Initialize socket connection when app loads
  useEffect(() => {
    // Get the socket service singleton
    const socketService = getSocketService();

    // Initialize socket connection
    socketService.connect();

    // Clean up on app unmount
    return () => {
      socketService.disconnect();
    };
  }, []);

  return <>{children}</>;
}
