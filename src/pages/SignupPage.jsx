import { Lock, Mail, Send, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useUserState } from "../stores/useUserState";

export default function SignupPage() {

  // const loading = true;

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { signup} = useUserState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
  }

  return (
    <div className="">
    <div className="container mx-auto flex justify-center relative lg:top-20 max-sm:top-10">
      <motion.div 
        className="lg:w-5/12 max-sm:w-full rounded-lg border shadow-md max-sm:mx-5 pt-8 pb-8 shadow-gray"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <div className="flex justify-center">
        <label className="text-2xl font-semibold mb-10">Register</label>
      </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <label htmlFor="name" className="mt-5 flex"><User width={20} /><span className="ml-3 text-sm">Name</span></label>
              <input type="text" id="name" name="name" className="border block text-xs mb-5 mt-3 w-72 h-10 pl-2 rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="">
              <label htmlFor="email" className="flex"><Mail width={20} /><span className="ml-3 text-sm">Email</span></label>
              <input type="email" id="email" name="email" className="border block text-xs mb-5 mt-3 w-72 h-10 pl-2 rounded-lg" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="">
              <label htmlFor="password" className="flex"><Lock width={20}/><span className="ml-3 text-sm">Password</span></label>
              <input type="password" id="password" name="password" className="border block mb-5 mt-3 w-72 h-10 pl-2 rounded-lg" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <div className="mb-5">
              <label htmlFor="confirmPassword" className="flex"><Lock width={20} /><span className="ml-3 text-sm">Confirm Password</span></label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="border block mb-5 mt-3 pl-2 w-72 h-10 rounded-lg" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />
            </div>
            <div className="text-center">
              <button type="submit" className="text-center text-sm w-72 h-10 rounded-lg bg-blue-500 text-white flex justify-center items-center gap-3"><Send width={20} /><span>Register</span></button>
            </div>
          </form>
          </div>
          <div className="">
            <p className="text-center text-xs mt-5">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
          </div>
        </motion.div>
        <Toaster />
      </div>
      {/* <div className="relative top-40">
        <Footer />
      </div> */}
    </div>

  )
}
