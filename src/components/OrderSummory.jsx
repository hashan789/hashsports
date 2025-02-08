import { useCartState } from "../stores/useCartState";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../lib/axios";

export default function OrderSummory() {

    const { total, subTotal, coupon, isCouponApplied, cart } = useCartState();

    const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY);

    const savings = subTotal - total;
    const fixedTotal = total.toFixed(2);
    const fixedSubTotal = subTotal.toFixed(2);
    const fixedSavings = savings.toFixed(2);

    const handlePayment = async () => {

        const stripe = await stripePromise;

        const res = await axios.post("/payments/create-checkout-session", {
            products: cart,
            couponCode: coupon ? coupon.code : null
        })

        const session = res.data;
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })

        if(result.error){
            console.log("Error redirecting to checkout", result.error);
        }
    }

  return (
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto border p-5 rounded-lg"
    >
        <p className="font-semibold text-xl">Order Summary</p>
        <div className="space-y-4 my-5">
            <div className="block">
                <dl className="flex justify-between">
                    <dt>Original Price: </dt>
                    <dd>$ {fixedSubTotal}</dd>
                </dl>
                { savings > 0 && <dl className="flex justify-between">
                    <dt>Discount: </dt>
                    <dd>$ {fixedSavings}</dd>
                </dl> }
                <div className="w-full h-0.5 bg-blue-500 my-3"></div>
                <dl className="flex justify-between">
                    <dt>Total</dt>
                    <dd>$ {fixedTotal}</dd>
                </dl>
                {
                    coupon && isCouponApplied && (
                        <dl className="flex justify-center items-center gap-4">
                            <dt className="text-base">Coupon ({coupon.code})</dt>
                            <dd className="text-base">-{coupon.discountPercentage}</dd>
                        </dl>
                    )
                }
            </div>
            <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg" onClick={handlePayment}>Proceed to checkout</button>
            </motion.div>
        </div>
    </motion.div>
  )
}
