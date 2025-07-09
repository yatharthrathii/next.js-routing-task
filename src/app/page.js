export const metadata = {
  title: "This is Homepage",
  description: "Welcome to the homepage of our blog!",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-green-700">Welcome to the Homepage</h1>
    </div>
  );
}
