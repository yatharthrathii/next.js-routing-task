export async function generateMetadata({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-1 font-semibold">Price: ${product.price}</p>
    </div>
  );
}
