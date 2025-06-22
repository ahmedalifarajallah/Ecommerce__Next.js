"use client";
import Banner from "@/components/Banner";
import ProductsFilter from "@/components/Products/ProductsFilter";
import ProductsSection from "@/components/Products/ProductsSection";
import { productsData } from "@/data/products";
import useWixClient from "@/hooks/useWixClient";
import React, { useEffect } from "react";

const ProductsListPage = () => {
  const wixClient = useWixClient();
  useEffect(() => {
    const getProducts = async () => {
      const { items } = await wixClient.products.queryProducts().find();

      console.log(items);
    };

    getProducts();
  }, [wixClient]);
  return (
    <div className="container">
      <Banner />
      <ProductsFilter />
      <ProductsSection title="All Products For You" products={productsData} />
    </div>
  );
};

export default ProductsListPage;
