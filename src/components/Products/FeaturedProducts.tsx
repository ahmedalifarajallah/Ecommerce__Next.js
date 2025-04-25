import { productsData } from "@/data/products";
import { IProduct } from "@/interfaces/productInterface";
import ProductsSection from "./ProductsSection";
const FeaturedProducts = () => {
  const products: IProduct[] = productsData.filter((product) => product.featured === true).slice(0, 4);
  return (
    <ProductsSection products={products} title="Featured Products" />
  )
}

export default FeaturedProducts