import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="w-full bg-gray-200 min-h-screen relative">
      <div className="top-0 sticky z-[10]">
        <Navbar />
      </div>
      <main className="section-wrap mx-auto px-4 py-6  ">
        <Outlet />
      </main>
    </div>
  );
};
