import { Star } from "lucide-react";
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import type { Product } from "../../schema/ProductRes";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      className="h-full w-full flex border border-gray-300 gap-2
      bg-lime-100/10 shadow-md flex-col  p-3 
        rounded-[8px] hover:border hover:border-emerald-700 
        hover:shadow-md  backdrop-blur-sm relative"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={product.images[0]}
          alt={`${product.title} image`}
          className={` h-40 w-40 md:h-50 md:w-full rounded-[8px] transition-opacity duration-500`}
          loading="lazy"
        />
      </div>

      <p className="font-semibold text-start   text-gray-700 text-lg ">
        {product.title}
      </p>

      {/* This Empty Div Needed to align the Add to cart button */}
      <div className="flex-grow"></div>

      {/* Price and Rating */}
      <div className="flex items-center justify-between w-full ">
        <div className="bg-emerald-100/60 rounded-[8px] px-4">
          <p className="text-[16px] font-semibold md:text-[20px] md:text-lg   text-emerald-700 ">
            {" "}
            ₹ {Math.round(product.price) ?? 0}
          </p>
        </div>
        <div className="flex items-center   gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

          <span className="text-sm text-gray-600 font-medium">
            {product.rating ?? 0} ({product.reviews.length ?? 0})
          </span>
        </div>
      </div>
      <button
        className="w-full text-[14px] bg-emerald-700 
          p-2 mt-3 rounded-[8px] text-white cursor-pointer"
        onClick={() =>
          addToCart({
            id: product.id,
            image: product.images[0],
            price: product.price,
            title: product.title,
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
