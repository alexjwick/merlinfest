"use client";

import { useSocket } from "../../hooks/useSocket";

export default function ConnectionStatus() {
  const { isConnected, userCount } = useSocket();

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg">
      <p>
        Socket Status:
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
    </div>
  );
}
