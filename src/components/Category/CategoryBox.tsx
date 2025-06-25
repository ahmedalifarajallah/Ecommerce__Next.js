import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

interface CategoryBoxProps {
  category: collections.Collection;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ category }) => {
  return (
    <Link href={`/products?category=${category.slug}`}>
      <div className="bg-slate-100 w-full h-96 relative">
        <Image
          src={category.media?.mainMedia?.image?.url || ""}
          alt={category.name + "-IMG" || "Category-Img"}
          fill
          sizes="(max-width: 768px) 200px, 300px"
          style={{ objectFit: "cover", objectPosition: "top" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <h2 className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow">
          {category.name}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryBox;
