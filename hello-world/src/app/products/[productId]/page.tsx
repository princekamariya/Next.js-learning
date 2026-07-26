export default async function Product({ params }: { params:  Promise<{ productId: string }> }) {
  const { productId } = await params;
  return (
    <div>
      <h1>Product {productId}</h1>
    </div>
  );
}