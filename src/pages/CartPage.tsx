
import { EmptyCart } from "../components/myCart/EmptyCart";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProductCard from "../components/myCart/CartProductCard";

export const CartPage = () => {
  const { cart, toalCartItems, totalCartAmount  } = useContext(CartContext);
  return (
    <div className="  relative">
      

      <div className={`flex md:flex-row flex-col md:justify-between gap-5 ${toalCartItems > 0 && 'min-h-screen'} `}>
        <div className= {`${toalCartItems ? 'md:w-[70%]' : 'w-full'} `}>
          <h2 className="md:text-[24px] font-bold  ">My Cart</h2>

          {cart.length < 1 ? (
            <div className=" w-full mt-4">
              <EmptyCart />
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-6">
              {cart.map((item) => (
                <CartProductCard
                  key={item.cartProduct.id}
                  productDetail={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* title */}

       { toalCartItems > 0 && <div className=" md:w-[30%] ">
          <div className="md:top-18 bg-white border-gray-300 md:sticky 
          max-h-max border shadow-md px-3 py-2 rounded-[8px]
           flex  flex-col ">
            <h2 className="md:text-[24px] text-[18px]  text-emerald-700 font-bold ">Cart Summary</h2>

            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between ">
                <p className="text-gray-600">Total Items </p>
                <p className=" font-bold">{toalCartItems} </p>
              </div>
               <div className="w-full flex justify-between ">
                <p className="text-gray-600">Total Amount</p>
                <p className=" font-bold">₹ {totalCartAmount}</p>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};
