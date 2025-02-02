import { useEffect } from "react";
import { useProductState } from "../stores/useProductState";
import FeaturedProductsShow from "./FeaturedProductsShow";

export default function FeaturedProducts() {

  const { getFeaturedProducts, products , isLoading } = useProductState();

  useEffect(() => {
        getFeaturedProducts();
  },[getFeaturedProducts])

  return (
    <div>
        <div className='flex justify-center items-center p-10 mb-10'>
        <div className="top-12 relative">
            <h1 className="text-4xl text-center font-semibold">Featured Products</h1>
            <div className="mt-12 flex justify-center items-center gap-6">
                {
                   !isLoading && products.length > 0 && <FeaturedProductsShow products={products} />
                }
                
            </div>
        </div>
        </div>
    </div>
  )
}
