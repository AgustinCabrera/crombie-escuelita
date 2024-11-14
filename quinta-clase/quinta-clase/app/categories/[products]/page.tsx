import { productsdb } from "@/app/data/productsDB";
import ProductGrid from "@/app/components/ProductCard/ProductGrid";

interface CategoryPageProps {
  params: { products: string };
}
// Genera paramatros estaticos para cada categoria
export async function generateStaticParams() {
  const categories = Array.from(new Set(productsdb.map((product) => product.category)));

  return categories.map((category) => ({
    products: category,
  }));
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const {products: category } = await params;

  return (
    <main>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Section</h1>
      <ProductGrid category={category} />
    </main>
  );
};

export default CategoryPage;
