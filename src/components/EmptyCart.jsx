import {motion} from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center h-full"
    >
        <ShoppingCart alt="Empty Cart" width={40} />
        <h2 className="text-2xl font-semibold mt-6">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Looks like you haven&apos;t added any items to the cart yet</p>
        <Link to="/" className="mt-4 text-blue-500">Start Shopping</Link>
    </motion.div>
  )
}
