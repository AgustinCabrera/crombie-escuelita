import React from 'react';
import ProductCard from './ProductCard';
import {productsdb} from '../../data/productsDB';

interface ProductGridProps {
  category: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category }) => {
  const filteredProducts = productsdb.filter((product) => product.category === category);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={`$${product.price}`}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductGrid;