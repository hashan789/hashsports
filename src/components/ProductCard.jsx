/* eslint-disable react/prop-types */
import toast, { Toaster } from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserState } from "../stores/useUserState";
import { useCartState } from "../stores/useCartState";
// import motion from 'framer-motion'

export default function ProductCard({ product }) {

  const { user } = useUserState();
  const { addToCart } = useCartState();

  const handleToAddCart = () => {

    if(!user){
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    }
    else{
      addToCart(product);
    }

  }

  return (
    <div className="flex flex-col justify-center items-center text-center overflow-hidden border">

      <div className="flex overflow-hidden rounded-xl">
        <img src={product.image} alt="" className="object-cover w-full" />
        <div className=""></div>
      </div>

      <div className="mt-4 flex flex-col justify-center items-center">
        <h5 className="text-xl font-semibold tracking-tight">{product.name}</h5>
        <p className="text-sm font-bold ">$ {product.price}</p>
        <button className="flex flex-row items-center my-4 border px-5 py-1 rounded bg-blue-500 text-white" onClick={handleToAddCart}> 
          <ShoppingCart width={20} />
          <span className="text-xs ml-3">Add to Cart</span>  
        </button>
      </div>
      <Toaster />
    </div>
  )
}
