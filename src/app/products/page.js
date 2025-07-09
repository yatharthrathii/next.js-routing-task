export const metadata = {
  title: "Products Store - Products List",
  description: "Browse all the amazing products available in our store.",
};

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-700">Products List</h1>
      <ul className="space-y-2">
        {data.products.map((product) => (
          <li key={product.id}>
            <a href={`/products/${product.id}`} className="text-blue-600 underline">{product.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
