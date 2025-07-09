import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Next.js',
  description: 'Basic layout with header and footer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900 font-sans flex flex-col min-h-screen">

        <header className="bg-green-700 text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">

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

            <nav className="space-x-4 text-lg">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/products" className="hover:underline">Products</Link>
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
