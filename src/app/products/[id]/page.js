export default async function ProductDetails({ params }) {
    const { id } = params;

    return (
        <div className="max-w-xl mx-auto mt-20 border border-green-300 p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium text-center text-green-700">
                Product {id} details page — <span className="text-green-500">content coming soon!</span>
            </h2>
        </div>
    );
}
