'use client';

import dynamic from 'next/dynamic';

// Import the MerlinViewer component with dynamic import to avoid SSR issues
const MerlinViewer = dynamic(() => import('@/components/MerlinViewer'), {
    loading: () => <div className="w-full h-screen flex items-center justify-center">Loading 3D viewer...</div>
});

export default function MerlinViewerClient() {
    return (
        <div className="w-full h-[70vh]">
            <MerlinViewer />
        </div>
    );
}