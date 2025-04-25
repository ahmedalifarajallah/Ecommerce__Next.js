// CategoryBox.tsx
import { ICategory } from "@/interfaces/categoryInterface";
import Image from "next/image";
import Link from "next/link";

interface CategoryBoxProps {
  category: ICategory;
  isDragging: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ category, isDragging }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <Link
      href={"/"}
      onClick={handleClick}
      className="flex-shrink-0 w-[200px] sm:w-[250px] lg:w-[300px] transform transition-transform duration-300 hover:scale-105"
      data-category-id={category.id}
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 200px, 300px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <h2 className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow">
          {category.name}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryBox;
