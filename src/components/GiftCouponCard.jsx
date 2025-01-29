import { motion } from "framer-motion"
import { useState } from "react";
import { useCartState } from "../stores/useCartState";

export default function GiftCouponCard() {

    const [ couponCode, setCouponCode ] = useState("");

    const { coupon, isCouponApplied } = useCartState();

    const handleCouponCode = (e) => {
        console.log(e.target.value);
    }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
    >
        <div className="bg-gray-100 p-4 rounded-lg">
            <h1 className="text-lg font-semibold">Do you have a Gift Coupon?</h1>
            <div className="flex justify-between items-center mt-2">
                <input 
                    type="text" 
                    placeholder="Enter Coupon Code" 
                    className="p-2 w-3/4 border border-gray-300 rounded-md" 
                    value={couponCode}
                    onChange={(e) => { setCouponCode(e.target.value) }}
                />
                <button className="bg-blue-500 text-white text-sm p-2 rounded-md" onClick={handleCouponCode}>Apply</button>
            </div>
        </div>
        {
            coupon && isCouponApplied && (
                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h1 className="text-lg font-semibold">Coupon Applied</h1>
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-base">{coupon.code}-{coupon.discountPercentage} % off</p>
                    </div>
                </div>
            )
        }
    </motion.div>
  )
}
