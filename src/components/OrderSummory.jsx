import { useCartState } from "../stores/useCartState";
import { motion } from "framer-motion";

export default function OrderSummory() {

    const { total, subTotal, coupon, isCouponApplied } = useCartState();

    const savings = subTotal - total;
    const fixedTotal = total.toFixed(2);
    const fixedSubTotal = subTotal.toFixed(2);
    const fixedSavings = savings.toFixed(2);

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
                <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg">Proceed to checkout</button>
            </motion.div>
        </div>
    </motion.div>
  )
}
