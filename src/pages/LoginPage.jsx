import { Lock, Mail, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useUserState } from "../stores/useUserState";

export default function LoginPage() {

  // const loading = true;

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const { login } = useUserState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login( formData );
  }

  return (
    <div className="h-screen">
    <div className="container mx-auto flex justify-center relative lg:top-20 max-sm:top-10">
      <motion.div 
        className="lg:w-5/12 max-sm:w-full rounded-lg border shadow-md shadow-gray max-sm:mx-5 pt-8 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <div className="flex justify-center">
        <label className="text-2xl font-semibold mb-10">Login</label>
      </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email" className="flex"><Mail width={20} /><span className="ml-3 text-sm">Email</span></label>
              <input type="email" id="email" name="email" className="border block text-sm pl-2 mb-5 mt-3 w-72 h-10 rounded-lg" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="">
              <label htmlFor="password" className="flex"><Lock width={20}/><span className="ml-3 text-sm">Password</span></label>
              <input type="password" id="password" name="password" className="border block pl-2 mb-5 mt-3 w-72 h-10 rounded-lg" onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <div className="text-center">
              <button type="submit" className="text-center text-sm w-72 h-10 rounded-lg bg-blue-500 text-white flex justify-center items-center gap-3"><Send width={20} /><span>Register</span></button>
            </div>
          </form>
          </div>
          <div className="">
            <p className="text-center text-xs mt-5">Don&#39;t you have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
          </div>
        </motion.div>
      </div>
      {/* <div className="relative top-40">
        <Footer />
      </div> */}
    </div>
  )
}
