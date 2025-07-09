export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `Post ${id} - My Blog`,
    description: `This is the description for post ${id}.`,
  };
}

export default function PostPage({ params }) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">Post #{id}</h1>
      <p>This is the content for post {id}.</p>
    </div>
  );
}
