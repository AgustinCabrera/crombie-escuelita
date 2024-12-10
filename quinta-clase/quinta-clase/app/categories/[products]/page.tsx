"use client";
import { useEffect, useState } from "react";

/*
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
*/
const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data); // Store categories in state
    };
    fetchCategories();
  }, []); // Empty dependency array ensures this runs once when the component mounts
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} {/* Display the category name */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
