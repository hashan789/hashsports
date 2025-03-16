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
            <h1 className="text-lg text-center mt-8">Check out our handpicked selection of best-selling and top-rated products. </h1>
            <div className="mt-5 flex justify-center items-center gap-6">
                {
                   !isLoading && products.length > 0 && <FeaturedProductsShow products={products} />
                }
                
            </div>
        </div>
        </div>
    </div>
  )
}
