'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'; // ✅ for GitHub login

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/protected');
    } else {
      alert('Invalid login!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-black px-4">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-white rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-green-700 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Login
        </button>

        <div className="text-center text-gray-500">OR</div>

        <button
          type="button"
          onClick={() => signIn('github', { callbackUrl: '/protected' })}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
        >
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
}
