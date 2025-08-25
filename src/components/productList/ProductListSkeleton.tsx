import { Star } from "lucide-react";

export const ProductCardSkeleton = () => {
  return (
    <div
      className="h-full w-full flex border border-gray-300 gap-2
      bg-lime-100/10 shadow-sm flex-col items-center p-3 
        rounded-[8px] 
        hover:shadow-md  backdrop-blur-sm "
    >
      {/* image */}
      <div className="h-30 md:h-50 w-full rounded-[8px] animate-pulse bg-gray-300" />

      {/* title */}
      <div className="h-4 w-full rounded bg-gray-300 animate-pulse" />

      <div className="flex items-center justify-between w-full ">
        <div className="w-[40%] h-4 bg-gray-300 animate-pulse "></div>
        <div className="flex items-center   gap-1">
          <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
          <div className="text-sm w-6 h-4 bg-gray-300 animate-pulse"></div>
        </div>
      </div>

      {/* button */}
      <div className="p-2 mt-3 h-10 w-full rounded-[8px] bg-gray-300 animate-pulse"></div>
    </div>
  );
};

const ProductListSkeleton = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
