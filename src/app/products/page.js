import Link from 'next/link';

export default function ProductsPage() {
    return (
        <div className="mt-5">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Products Page</h2>
            <ul className="space-y-2">
                {[...Array(10)].map((_, index) => {
                    const id = index + 1;
                    return (
                        <li key={id}>
                            <Link
                                href={`/products/${id}`}
                                className="text-green-600 hover:underline"
                            >
                                View Product {id}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}