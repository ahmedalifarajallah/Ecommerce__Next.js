import ProductSinglePage from "@/components/Products/ProductSinglePage";

const SinglePage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <div className="container">
      <ProductSinglePage slug={slug} />
    </div>
  );
};

export default SinglePage;
