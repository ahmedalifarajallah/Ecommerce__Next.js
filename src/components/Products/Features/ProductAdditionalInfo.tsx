import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

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

      {additionalInfo.description && (
        <div
          className="product-info__description my-2 text-sm"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(additionalInfo.description) ?? "",
          }}
        ></div>
      )}
    </div>
  );
};

export default ProductAdditionalInfo;
