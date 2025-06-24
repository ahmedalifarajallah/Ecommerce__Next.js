import { products } from "@wix/stores";

const ProductAdditionalInfo = ({
  additionalInfo,
}: {
  additionalInfo: products.AdditionalInfoSection;
}) => {
  return (
    <div className="product-info">
      <h2 className="product-info__title font-semibold">
        {additionalInfo.title ?? ""}
      </h2>
      <p className="product-info__description my-2 text-sm">
        {additionalInfo.description ?? ""}
      </p>
    </div>
  );
};

export default ProductAdditionalInfo;
