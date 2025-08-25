import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { toalCartItems } = useContext(CartContext);

  const navigateToCart = () => {
    if (location.pathname !== "/cart") {
      navigate("/cart");
    }
  };

  return (
    <nav className="h-[60px] flex flex-col items-center justify-center  bg-emerald-700">
      <div className=" section-wrap px-[20px] mx-auto flex justify-between items-center">
        <p className="text-2xl   font-serif font-bold text-white ">Starlfinx</p>
        <div
          className="hover:bg-white/10 p-2 cursor-pointer rounded-[8px] relative"
          onClick={navigateToCart}
        >
          <ShoppingCart className="text-white  " />
          {toalCartItems > 0 && (
            <div
              className="h-5 min-w-5  p-1 flex items-center rounded-full
              justify-center   text-emerald-600 bg-white absolute -top-1 
              -right-3 text-xs font-bold"
            >
              {toalCartItems}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
