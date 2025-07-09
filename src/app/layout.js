import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { verifyToken } from './lib/auth';

export const metadata = {
  title: 'Next.js',
  description: 'Basic layout with header and footer',
};

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  const user = await verifyToken(token);

  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900 font-sans flex flex-col min-h-screen">
        <header className="bg-green-700 text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo & Title */}
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                priority
              />
              <h1 className="text-2xl font-bold">Products Store</h1>
            </div>

            {/* Navigation */}
            <nav className="space-x-4 text-lg flex items-center">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/products" className="hover:underline">Products</Link>

              {user ? (
                <form action="/api/logout" method="POST" className="inline">
                  <button
                    type="submit"
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 ml-4"
                  >
                    Logout
                  </button>
                </form>
              ) : (
                <Link href="/login" className="hover:underline text-white ml-4">
                  Login
                </Link>
              )}
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        <footer className="bg-green-800 text-white p-4 text-center mt-4">
          &copy; {new Date().getFullYear()} Yatharth Rathi. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
