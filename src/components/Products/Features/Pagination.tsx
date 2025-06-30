"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (currentPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pagination my-6 flex justify-between items-center gap-2">
      <button
        className="px-2 py-1 w-24 cursor-pointer text-white bg-primary rounded-md text-sm border border-primary hover:text-primary hover:bg-white transition-all duration-300 ease disabled:cursor-not-allowed disabled:bg-pink-200 disabled:border-none disabled:text-white"
        disabled={!hasPrev}
        aria-label="Previous Page"
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="px-2 py-1 w-24 cursor-pointer text-white bg-primary rounded-md text-sm border border-primary hover:text-primary hover:bg-white transition-all duration-300 ease disabled:cursor-not-allowed disabled:bg-pink-200 disabled:border-none disabled:text-white"
        disabled={!hasNext}
        aria-label="Next Page"
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
