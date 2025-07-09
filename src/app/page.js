'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-4xl font-bold text-green-700">
        Welcome to the Products Store
      </h1>
      <button
        onClick={() => router.push('/products')}
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
      >
        View Products
      </button>
    </div>
  );
}
