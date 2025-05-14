import Banner from "@/components/Banner";
import ProductsFilter from "@/components/Products/ProductsFilter";
import ProductsSection from "@/components/Products/ProductsSection";
import { productsData } from "@/data/products";
import React from "react";

const List = () => {
  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <ProductsSection title="All Products For You" products={productsData} />
    </div>
  );
};

export default List;
