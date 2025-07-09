import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Basic layout with header and footer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-900 font-sans flex flex-col">
        {/* Header */}
        <header className="bg-green-700 text-white p-4 shadow-md">
          <h1 className="text-2xl font-bold">Products Store</h1>
        </header>

        {/* Page Content */}
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-green-800 text-white p-4 text-center mt-4">
          &copy; {new Date().getFullYear()} Yatharth Rathi. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
