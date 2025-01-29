import { create } from 'zustand';
import axios from '../lib/axios';
import { toast } from 'react-hot-toast';

export const useUserState = create((set,get) => ({
    user: null,
    loading: true,
    checkingAuth: true,

    signup: async ({name, email, password, confirmPassword}) => {

        set({loading: true});

        if(password !== confirmPassword) {
            set({loading: false});
            return toast.error('Passwords do not match') ;
        }

        try {
            const res = await axios.post('/auth/signup', {name, email, password});
            set({user: res.data.user, loading: false});
            return toast.success("User created successfully!");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || 'An error occurred');
        }
    },

    login: async ({email, password}) => {

        set({loading: true});

        try {
            const res = await axios.post('/auth/login', {email, password});
            set({user: res.data.user, loading: false});
            return toast.success("User logged in successfully!");
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.message || 'An error occurred');
        }
    },

    logout: async () => {

        try {
            await axios.post('/auth/logout');
            set({user: null});
            return toast.success("User log out successfully!");
        }
        catch (error) {
            return toast.error(error.response?.data?.message || 'An error occurred');
        }
    },

    checkAuth: async () => {

        set({checkingAuth: true});

        try {
            const response = await axios.get('/auth/profile');
            set({user: response.data, checkingAuth: false});
        } catch (error) {
            set({checkingAuth: false, user: null});
            return toast.error(error.response?.data?.message || 'An error occurred');
        }
    }
}))
