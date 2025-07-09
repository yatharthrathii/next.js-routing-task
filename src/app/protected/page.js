import { cookies } from 'next/headers';
import { verifyToken } from '@/utils/auth';

export default async function ProtectedPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  const user = await verifyToken(token);

  if (!user) {
    return (
      <div className="p-6 text-red-600">
        Unauthorized. Please <a href="/login" className="underline">Login</a>.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">Welcome, {user.email}</h1>
      <form action="/api/logout" method="POST">
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
