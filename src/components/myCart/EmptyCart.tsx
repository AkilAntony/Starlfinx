import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div
      className="p-2 py-6 w-[90%] flex flex-col items-center gap-4 
            rounded-[8px] shadow-md border border-gray-300 mx-auto md:w-[50%] bg-g"
    >
      <ShoppingCart className="mx-auto h-10 w-10 md:h-16 md:w-16 text-gray-600 mb-4" />

      <div className="flex flex-col justify-center items-center">
        <p className="text-[18px] md:text-[22px] font-bold">
          Your cart is empty
        </p>
        <p className="text-gray-600 text-[12px] md:text-[14px] text-center">
          Add some products to get started!
        </p>
      </div>

      <button
        className="bg-emerald-700 cursor-pointer 
      px-2 md:px-4 p-1 md:p-2 rounded-[8px] text-white"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};
