import { useCartState } from "../stores/useCartState"
import { Minus, Plus, Trash } from "lucide-react";

export default function CartItem({ item }) {

    const { removeFromCart, updateQuantity } = useCartState();

  return (
    <div className="max-sm:flex max-sm:justify-center max-sm:items-center">
        <div className="flex items-center justify-around p-5">
            <div className="w-20 h-20">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex-1">
              <h1 className="text-lg font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-500">Price: ${item.price}</p>
              <div className="flex items-center gap-4">
                  <button onClick={() => updateQuantity(item._id, item.quantity - 1)} className="text-sm font-semibold text-gray-500"><Minus /></button>
                  <p className="text-sm font-semibold">{item.quantity}</p>
                  <button onClick={() => updateQuantity(item._id, item.quantity + 1)} className="text-sm font-semibold text-gray-500"><Plus /></button>
              </div>
              </div>
            </div>
            <button onClick={() => removeFromCart(item._id)} className="text-red-500 font-semibold"><Trash /></button>
        </div>
    </div>
  )
}
