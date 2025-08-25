import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductListPage";
import { MainLayout } from "./layout";
import { CartPage } from "./pages/CartPage";
import CartContextProvider from "./CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
