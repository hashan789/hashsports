import { useParams } from "react-router-dom";
import { useProductState } from "../stores/useProductState";
import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCartState } from "../stores/useCartState";
import { useUserState } from "../stores/useUserState";
import toast from "react-hot-toast";
import Footer from "../components/Footer";


export default function ProductDescriptionPage() {

    const { id } = useParams();

    const { getProduct, products } = useProductState();

    const { user } = useUserState();
    const { addToCart } = useCartState();

    const handleToAddCart = (product) => {

        if(!user){
        toast.error("Please login to add products to cart", { id: "login" });
        return;
        }
        else{
        addToCart(product);
        }

    }

    useEffect(() => {
        getProduct(id);
    },[getProduct,id])

  return (
    <div className="">
    <div className="container mx-auto relative top-20">
        {
         
                <div className="">
                    <h1 className="text-2xl text-center mt-3 mb-10 font-bold">Description</h1>
                    <div className="container flex justify-center items-center">
                        <div className="w-4/12 flex justify-center items-center">
                            <img src={products.image} alt="" />
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-2xl mt-3 mb-10 font-semibold">{ products.name }</h1>
                            <p className="text-sm mb-5">{products.description}</p>
                            <p className="text-sm">$ {products.price}</p>
                            <button className="flex flex-row items-center my-4 border px-5 py-1 rounded bg-blue-500 text-white" onClick={() => handleToAddCart(products)}> 
                                <ShoppingCart width={20} />
                                <span className="text-xs ml-3">Add to Cart</span>  
                            </button>
                        </div>
                    </div>
                </div>

     
        }
    </div>
      <div className="relative top-40">
        <Footer />
      </div>
    </div>
  )
}
