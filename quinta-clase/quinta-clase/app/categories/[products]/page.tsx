interface CategoryParams {
  products: string;
}
export default async function Category({
  params,
}: { params: CategoryParams }) {
  const { products } = params;
  const ProductGrid = (await import('@/app/components/ProductCard/ProductGrid')).default;
  return (
    <>
      <ProductGrid category={products}/>
    </>
  );
}