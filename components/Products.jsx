import React from "react";
import Product from "./Product";

function Products() {
  return (
    <div className="mt-8">
      <h1 className="font-semibold">All Products</h1>
      <div className="flex items-center gap-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
