export const revalidate = 60; 

const ProductsPage = async () => {
    const res = await fetch("https://dummyjson.com/products", {
        next: { revalidate: 60 }
    });

    const data = await res.json();

    return (
        <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <ul className="space-y-2 mt-4">
                {data.products.map((product) => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`} className="text-blue-600 underline">
                            {product.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsPage;
