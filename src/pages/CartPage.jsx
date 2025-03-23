import { motion } from 'framer-motion'
import { useCartState } from '../stores/useCartState'
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import PeopleAlsoBought from '../components/PeopleAlsoBought';
import OrderSummory from '../components/OrderSummory';
import GiftCouponCard from '../components/GiftCouponCard';

export default function CartPage() {

  const { cart } = useCartState();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto lg:flex max-sm:block justify-center relative top-20"
    >
      <div className="lg:w-9/12">
          {
            cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="container mx-auto">
                <h1 className="text-2xl max-sm:text-center font-semibold">Your Cart</h1>
                <div className="max-sm:flex max-sm:justify-center max-sm:items-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 my-5 w-1/2">
                    {
                      cart.map((item,index) => (
                        <CartItem key={index} item={item} />
                      ))
                    }
                  </div>
                </div>
                </div>
            )
          }
          { cart.length > 0 && (<PeopleAlsoBought />)}
      </div>
      {
        cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-3/12"
          >
            <div className="space-y-4">
              <OrderSummory />
              <GiftCouponCard />
            </div>
          </motion.div>
        )
      }
    </motion.div>

  )
}
