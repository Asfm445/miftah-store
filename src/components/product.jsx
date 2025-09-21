// src/components/ProductList.jsx
import React from "react"; // Removed useState, useEffect
import ProductCard from "./ProductCard";
import { products } from "../data.js"; // Restored static import

const ProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
