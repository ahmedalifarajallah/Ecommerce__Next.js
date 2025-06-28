"use client";
import { useEffect, useState } from "react";
import FilterInput from "../FilterInput";
import FilterSelect from "../FilterSelect";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useWixClient from "@/hooks/useWixClient";
import { collections } from "@wix/stores";

// Filter options config
const filterConfig = {
  types: [
    { value: "physical", label: "Physical" },
    { value: "digital", label: "Digital" },
  ],
  // sizes: [
  //   { value: "s", label: "Small" },
  //   { value: "md", label: "Medium" },
  //   { value: "lg", label: "Large" },
  //   { value: "xl", label: "X-Large" },
  //   { value: "2xl", label: "2X-Large" },
  // ],
  // colors: [
  //   { value: "red", label: "Red" },
  //   { value: "green", label: "Green" },
  //   { value: "blue", label: "Blue" },
  // ],
  // categories: [
  //   { value: "category1", label: "Category 1" },
  //   { value: "category2", label: "Category 2" },
  //   { value: "category3", label: "Category 3" },
  // ],
  sortOptions: [
    { value: "asc price", label: "Low to High (price)" },
    { value: "desc price", label: "High to Low (price)" },
  ],
};

const ProductsFilter = () => {
  const wixClient = useWixClient();
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);
  const [filters, setFilters] = useState({
    productType: "",
    min_price: "",
    max_price: "",
    // product_size: "",
    // product_color: "",
    category: "",
    product_sort: "",
  });
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await wixClient.collections.queryCollections().find();
        const handledCategories = res.items.map((item) => ({
          value: item.slug ?? "",
          label: item.name ?? "",
        }));

        setCategories(handledCategories || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    getCategories();
  }, [wixClient.collections]);

  const handleReset = () => {
    setFilters({
      productType: "",
      min_price: "",
      max_price: "",
      // product_size: "",
      // product_color: "",
      category: "",
      product_sort: "",
    });
    replace(`${pathname}`);
  };

  return (
    <div className="my-10 flex flex-wrap gap-4">
      {/* Type Filter */}
      <FilterSelect
        id="productType"
        name="productType"
        label="Type"
        options={filterConfig.types}
        onChange={handleFilterChange}
        value={filters.productType}
      />

      {/* Price Range */}
      <div className="flex gap-4 w-full sm:w-auto">
        <FilterInput
          id="min_price"
          name="min_price"
          placeholder="Min Price"
          onChange={handleFilterChange}
          value={filters.min_price}
        />
        <FilterInput
          id="max_price"
          name="max_price"
          placeholder="Max Price"
          onChange={handleFilterChange}
          value={filters.max_price}
        />
      </div>

      {/* Size Filter */}
      {/* <FilterSelect
        id="product_size"
        name="product_size"
        label="Size"
        options={filterConfig.sizes}
        onChange={handleFilterChange}
        value={filters.product_size}
      /> */}

      {/* Color Filter */}
      {/* <FilterSelect
        id="product_color"
        name="product_color"
        label="Color"
        options={filterConfig.colors}
        onChange={handleFilterChange}
        value={filters.product_color}
      /> */}

      {/* Category Filter */}
      <FilterSelect
        id="category"
        name="category"
        label="Category"
        options={categories}
        onChange={handleFilterChange}
        value={filters.category}
      />

      {/* Sort Filter */}
      <FilterSelect
        id="product_sort"
        name="product_sort"
        label="Sort By"
        options={filterConfig.sortOptions}
        onChange={handleFilterChange}
        value={filters.product_sort}
      />

      {/* Reset Button */}
      <button
        type="button"
        className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        onClick={handleReset}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default ProductsFilter;
