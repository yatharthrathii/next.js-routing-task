export const revalidate = 60;

const ProductDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  const product = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p>{product.description}</p>
      <p className="text-green-700 mt-2 font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
