import productsData from "../../../../../data/products.json"; // adjust path if needed

export async function generateStaticParams() {
  const paths = [];

  productsData.forEach((category) => {
    category.products.forEach((product) => {
      paths.push({
        categoryId: category.categoryId,
        productId: product.id,
      });
    });
  });

  return paths;
}

export default function ProductPage({ params }) {
  const { categoryId, productId } = params;

  const category = productsData.find((c) => c.categoryId === categoryId);
  const product = category?.products.find((p) => p.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
