'use client';

import { createContext, useContext, ReactNode } from 'react';

// Mock Socket type to avoid the dependency
interface Socket {
    on: (event: string, callback: (data: any) => void) => void;
    emit: (event: string, data: any) => void;
    disconnect: () => void;
}

// Define the shape of our context
interface SocketContextType {
    socket: Socket | null;
    isConnected: boolean;
    activeUsers: number;
    sendVisualUpdate: (data: any) => void;
    sendEffectTrigger: (effect: string) => void;
    lastEffect: string | null;
}

interface SocketProviderProps {
    children: ReactNode;
}

// Create the context with a default value
const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false,
    activeUsers: 0,
    sendVisualUpdate: () => { },
    sendEffectTrigger: () => { },
    lastEffect: null,
});

// Create a temporary provider component that doesn't use socket.io-client
export const SocketProvider = ({ children }: SocketProviderProps) => {
    // Just return a dummy implementation that doesn't connect to anything
    return (
        <SocketContext.Provider
            value={{
                socket: null,
                isConnected: false,
                activeUsers: 0,
                sendVisualUpdate: (data: any) => {
                    console.log('Would send visual update:', data);
                },
                sendEffectTrigger: (effect: string) => {
                    console.log('Would trigger effect:', effect);
                },
                lastEffect: null,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

// Create a custom hook for using the socket context
export const useSocket = () => useContext(SocketContext);