import './globals.css';

export const metadata = {
  title: 'Routing Task',
  description: 'Next.js basic routing example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-green-800 font-sans p-4">
        {children}
      </body>
    </html>
  );
}
