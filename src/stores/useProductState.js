import { create } from 'zustand'
import toast from 'react-hot-toast'
import axios from '../lib/axios'

export const useProductState = create((set) => ({
    products: [],
    loading: false,

    setProducts: (products) => set({products}),

    createProduct: async (productData) => {
        set({ loading: true })

        try {
            const res = await axios.post('/product/', productData);
            set((prevState) => ({
                products : [...prevState.products, res.data],
                loading: false
            }));
            return toast.success("Added product successfully!");
        } catch (error) {
            set({ loading: false })
            return toast.error(error.response.data.error);
        }

    },

    getAllProducts: async () => {

        set({ loading : true });

        try {
            const res = await axios.get('/product/');
            set({ products: res.data.products, loading: false });
        }
        catch(error){
            set({ loading: false });
            return toast.error(error.response.data.error);
        }
    },

    fetchProductsByCategory: async (category) => {

        set({ loading : true });

        try{
            const res = await axios.get(`/product/category/${category}`);
            set({ products: res.data.products, loading: false });
        }
        catch(error){
            set({ loading: false });
            toast.error(error.response.data.error);
        }
    },

    getProduct: async (id) => {

        set({ loading : true });

        try{
            const res = await axios.get(`/product/products/${id}`);
            set({ products: res.data, loading: false });
        }
        catch(error){
            set({ loading: false });
            toast.error(error.response.data.error);
        }
    },

    deleteProduct: async (productId) => {
        set({ loading: true });

        try{
            await axios.delete(`/product/${productId}`);
            set((prevProducts) => ({
                products: prevProducts.products.filter((product) => product._id !== productId),
                loading: false
            }));
            return toast.success("Product deleted successfully!");
        }
        catch(error){
            set({ loading: false });
            return toast.error(error.response.data.error);
        }
    },

    toggleFeaturedProducts: async (productId) => {
        set({ loading: true });

        try{
            const response = await axios.patch(`/product/${productId}`);
            set((prevProduct) => ({
                products: prevProduct.products.map((product) => (
                    product._id === productId ?
                        {...product, isFeatured: response.data.isFeatured}
                    : product
                )),
                loading: false
            }));
        }
        catch(error){
            set({ loading: false });
            return toast.error(error.response.data.error);
        }
    },

    getFeaturedProducts: async () => {

        set({ loading: true });

        try {
            const response = await axios.get("/product/featured");
            console.log(response);
            set({ 
                products: response.data,
                loading: false
             })
        } catch (error) {
            set({ loading: false });
            return toast.error(error.response.data.error);
        }
    }


}))