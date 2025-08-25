import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../components/productList/ProductCard";
import type { ProductsResponse } from "../schema/ProductRes";
import ProductListSkeleton from "../components/productList/ProductListSkeleton";

const ProductList = () => {
  // Fetch Product details
  const fetchProducts = useQuery({
    queryKey: ["fetchProducts"],
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products`);
      const data: ProductsResponse = response.data;
      return data;
    },
  });

  if (fetchProducts.isError) {
    return (
      <div className="  h-[calc(100vh-90px)]   flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-destructive mb-4">
                Error Loading Products
              </h2>
              <button
                onClick={() => fetchProducts.refetch()}
                className="bg-primary hover:bg-primary/90"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fetchProducts.isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <div>
      {fetchProducts.data?.products &&
      fetchProducts.data?.products.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {fetchProducts.data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductList;
