import { CheckCircle2, ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCartState } from "../stores/useCartState";
import axios from "../lib/axios";
import Confetti from "react-confetti";

export default function PurchaseSuccessPage() {

    const [ isProcessing, setIsProcessing ] = useState(false);
    const [ error, setError ] = useState(null);

    const { clearCart } = useCartState();

    useEffect(() => {

        const handleCheckoutSuccess = async (sessionId) => {

            try {
                await axios.post("/payments/checkout-session",{
                    sessionId
                });
                clearCart();

            } catch (error) {
                console.log(error)
            }
            finally{
                setIsProcessing(false);
            }
        }


        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("session_id");

        if(sessionId){
            setIsProcessing(true);
            handleCheckoutSuccess(sessionId);
        }
        else{
            setError("Invalid session id");
        }
        

    },[clearCart]);

    if(isProcessing) return <div className="h-screen flex items-center justify-center">Processing...</div>

    if(error) return <div className="h-screen flex items-center justify-center">Error: {error}</div>

  return (
    <div className="h-screen flex items-center justify-center">
        <Confetti 
            width={window.innerWidth}
            height={window.innerHeight}
            gravity={0.1}
            style={{ zIndex: 99 }}
            numberOfPieces={700}
        />
        <div className="text-center space-y-4 space-x-4">
            <div className="flex justify-center items-center">
                <CheckCircle2 size={100} color="green"/>
            </div>
            <h1 className="text-3xl font-semibold">Thank you for your purchase!</h1>
            <p className="text-lg">Your order has been placed successfully.</p>
            <div className="flex justify-center items-center mb-5">
                <div className="block">
                    <div className="text-2xl font-semibold">Order Placed : #12345</div>
                    <div className="text-lg">Estimated Delivery: 3-5 business days</div>
                </div>
            </div>
            <motion.div 
                className="p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Link to="/" className="text-sm bg-blue-500 text-white py-5 px-3 rounded-lg flex justify-center">Continue Shopping <ShoppingCartIcon size={20} className="ml-3"/></Link>
            </motion.div>
        </div>

    </div>
  )
}
