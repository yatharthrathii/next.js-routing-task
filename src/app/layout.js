import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { verifyToken } from './lib/auth';

export const metadata = {
  title: 'Next.js App',
  description: 'Basic Auth Protected Pages',
};

export default async function RootLayout({ children }) {
  const token = cookies().get('token')?.value;
  const user = await verifyToken(token);

  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900 font-sans flex flex-col min-h-screen">
        <header className="bg-green-700 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="text-2xl font-bold">Products Store</h1>
            </div>

            <nav className="flex gap-4 text-lg items-center">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>

              {user ? (
                <form method="POST" action="/api/logout">
                  <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
                </form>
              ) : (
                <Link href="/login" className="hover:underline">Login</Link>
              )}
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-4">{children}</main>

        <footer className="bg-green-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Yatharth Rathi. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
