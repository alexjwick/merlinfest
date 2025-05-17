import MerlinViewerClient from '@/components/MerlinViewerClient';

export default function MerlinViewerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-6">Merlin in 3D</h1>

      <div className="w-full max-w-6xl flex-1 bg-gray-100 rounded-xl overflow-hidden shadow-xl">
        <MerlinViewerClient />
      </div>

      <div className="mt-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-3">Welcome to Merlinfest</h2>
        <p className="text-lg">
          Celebrating Merlin with interactive 3D visuals that will be projected during the May 17th event.
          Orbit around Merlin by dragging your mouse, zoom with the scroll wheel.
        </p>
      </div>
    </main>
  );
}