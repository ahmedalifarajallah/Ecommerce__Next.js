import { productsData } from "@/data/products";
import { IProduct } from "@/interfaces/productInterface";
import ProductsSection from "./ProductsSection";

const NewProducts = () => {
  const products: IProduct[] = productsData.filter((product) => product.new === true).slice(0, 4);
  
  return (
    <ProductsSection products={products} title="New Products" />
  )
}

export default NewProducts