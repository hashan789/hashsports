import { Link } from "react-router-dom";
import { LogIn, LogOut, ShoppingCart, UserPlus } from 'lucide-react'
import { useUserState } from "../stores/useUserState";
import { useCartState } from "../stores/useCartState";

export default function NavBar() {

    const { user, logout } = useUserState();
    const { cart } = useCartState();

    const isAdmin = user?.role === 'admin';

  return (
    <header className='fixed font-poppins z-40 top-0 left-0 w-full h-14 transition-all duration-300 bg-black bg-opacity-25 text-white'>
        <div className="container mx-auto px-4 py-3 flex items-center justify-around">
            <div className="relative left-0 float-left">
                <Link to={"/"} className="text-2xl font-bold space-x-2 flex">
                    logo
                </Link>
            </div>
            <nav className="flex flex-wrap items-center gap-6 float-right">
                <Link to={"/"} className="text-sm font-bold space-x-2 flex hover:text-blue-500 transtion duration-300">
                    Home
                </Link>
                {
                    user && !isAdmin && (
                        <Link to={"/cart"} className="relative group text-sm font-bold space-x-2">
                            <span className="absolute -top-2 left-4 text-sm rounded-full px-1 py-0.5 bg-green-500 group-hover:text-blue-500 transition duration-300">{ cart.length }</span>
                            <ShoppingCart className="inline-block mr-3 group-hover:text-blue-500 transtion duration-300" size={20}/>
                            <span className='group-hover:text-blue-500 transtion duration-300'>Cart</span>
                        </Link>
                    ) 
                }
                {
                    isAdmin && (
                        <Link to={"/dashboard"} className="text-sm hover:text-blue-500 font-bold space-x-2 flex transtion duration-300">
                            Dashboard
                        </Link>
                    )
                }
                    
                    {
                        !user && (
                            <>
                        <Link to={"/signup"} className="relative group text-sm font-bold space-x-2">
                            <UserPlus className="inline-block mr-1 group-hover:text-blue-500 transtion duration-300" size={20}/>
                            <span className="group-hover:text-blue-500 transtion duration-300">Sign up</span>
                        </Link>
                        <Link to={"/login"} className="relative group text-sm font-bold space-x-2">
                            <LogIn className="inline-block mr-1 group-hover:text-blue-500 transtion duration-300" size={20}/>
                            <span className="group-hover:text-blue-500 transtion duration-300">Log in</span>
                        </Link>
                            </>
                        )
                    }
                {
                    user && (
                        <button className="text-sm group font-bold space-x-2 flex" onClick={logout}>
                            <LogOut className="translate-y-1" size={18}/>
                            <span className="group-hover:text-blue-500 transtion duration-300">Logout</span>
                        </button>
                        
                    )
                }
            </nav>
        </div>
    </header>
  )
}
