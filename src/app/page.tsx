import Link from "next/link";
import ConnectionStatus from "./components/ConnectionStatus";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-6">MerlinFest</h1>
        <h2 className="text-2xl mb-8">Interactive Visuals</h2>

        <ConnectionStatus />

        <div className="flex space-x-4">
          <Link
            href="/controller"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Control Visuals
          </Link>
          <Link
            href="/projection"
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Projection View
          </Link>
        </div>

        <p className="mt-8 text-gray-600">May 17 • 4PM-8PM • 78 Arnold St</p>
      </main>
    </div>
  );
}
