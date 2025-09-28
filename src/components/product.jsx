// src/components/ProductList.jsx
import React from "react"; // Removed useState, useEffect
import ProductCard from "./ProductCard";
import { products } from "../data.js"; // Restored static import

const ProductList = () => (
  <div className="grid grid-cols-1 [@media(min-width:350px)]:grid-cols-2 [@media(min-width:640px)]:grid-cols-3 gap-6 p-4"> 
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
