import { Minus, Plus, Trash } from "lucide-react";
import type { ProductDetail } from "../../schema/cart";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

const CartProductCard = ({
  productDetail,
}: {
  productDetail: ProductDetail;
}) => {
  const { addToCart, reduceFromCart , removeFromCart} = useContext(CartContext);

  return (
    <div className="py-4 px-3 bg-white rounded-[8px] shadow-md border border-gray-300">
      <div className="flex gap-3 items-center w-full md:flex-row flex-col ">
        <img
          src={productDetail.cartProduct.image}
          alt=""
          className="min-h-40 w-40"
        />
        <div className="flex flex-col   w-full">
          <p className="font-medium text-[14px] md:text-[18px]">
            {productDetail.cartProduct.title}
          </p>

          <div className=" md:mb-2  text-[12px] md:text-[14px] rounded-[8px] text-emerald-700">
            ₹{Math.round(productDetail.cartProduct.price)}
          </div>

          <div className=" flex items-center justify-between w-full md:mt-0 mt-1  ">
            {/* counter */}
            <div className="flex gap-3 items-center">
              <button
                className="border cursor-pointer p-1 rounded-[8px] border-gray-300"
                onClick={() => reduceFromCart(productDetail.cartProduct)}
              >
                <Minus size={18}/>
              </button>
              <div className="  p-1 font-bold rounded-[8px] border-gray-300">
                {productDetail.productCount}
              </div>
              <button
                className="border p-1 cursor-pointer 
              rounded-[8px] border-gray-300"
                onClick={() => addToCart(productDetail.cartProduct)}
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <div
                className="bg-emerald-100 rounded-[8px] md:min-w-16 
                py-1 text-center px-3"
              >
                ₹ {productDetail.totalAmount}
              </div>
              <button
                className="  p-1 rounded-[8px] bg-red-700 
                hover:cursor-pointer  hover:scale-110 transition-transform 
                duration-300 shadow-md"
                onClick={() => removeFromCart(productDetail.cartProduct.id)}
              >
                <Trash
                size={18}
                  className="text-white  hover:animate-pulse 
                transition-transform duration-300  "
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
