import { create } from 'zustand'
import toast from 'react-hot-toast'
import axios from '../lib/axios'

export const useCartState = create((set,get) => ({
    cart : [],
    coupon: null,
    loading: false,
    isCouponApplied: false,
    total: 0,
    subTotal: 0,

    getCartItems: async () => {

        try{
            const res = await axios.get("/cart");
            set({ cart: res.data });
            get().calculateTotals();
        }
        catch(error){
            set({ cart: [] });
            toast.error(error.response.data.message);
        }
    },

    addToCart: async (product) => {

        try{

            await axios.post("/cart",{ productId: product._id });
            toast.success("product added to cart");

            set((prevState) => {
                const existingItem = prevState.cart.find((item) => item._id === product._id);

                const newCart = existingItem ? 
                    prevState.cart.map((item) => (
                        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                    )) : [ ...prevState.cart , { ...product, quantity: 1 } ];
                

                return { cart: newCart };
            });

            get().calculateTotals();
        }
        catch(error){
            toast.error(error.response.data.message);
        }
    },

    removeFromCart : async (productId) => {
        try {
            await axios.delete("/cart", { productId });
            set((prevState) => ({ cart: prevState.cart.filter((item) => item._id !== productId) }));
            get().calculateTotals();
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    updateQuantity : async (productId, quantity) => {
        try{
            if(quantity === 0){
                get().removeFromCart(productId);
                return;
            }

            await axios.put(`/cart/${productId}`, { quantity });
            set((prevState) => ({
                cart: prevState.cart.map((item) => (
                    item._id === productId ? { ...item, quantity } : item
                ))
            }));

            get().calculateTotals();
        }
        catch(error){
            toast.error(error.response.data.message);
        }
    },

    calculateTotals : () => {


        const { cart, coupon } = get();
        const subTotal = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);
        let total = subTotal;

        if(coupon){
            const discount = subTotal - (coupon.discountPercentage / 100);
            total = subTotal - discount;
        }

        set({ subTotal, total });

    }
}
))