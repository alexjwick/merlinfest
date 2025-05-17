import dynamic from 'next/dynamic';

// Import only the default-exported component
const MerlinViewer = dynamic(
    () => import('@/components/MerlinViewer').then(mod => mod.default),
    {
    loading: () => (
        <div className="w-full h-screen flex items-center justify-center">
            Loading 3D viewer...
        </div>
    ),
    ssr: false,
    }
);