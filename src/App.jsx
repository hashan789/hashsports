import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import NavBar from "./components/NavBar"
import { useUserState } from "./stores/useUserState"
import { useEffect } from "react"
import AdminPage from "./pages/AdminPage"
import CategoryPage from "./pages/CategoryPage"
import CartPage from "./pages/CartPage"
import { useCartState } from "./stores/useCartState"
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage"
import ProductDescriptionPage from "./pages/ProductDescriptionPage"

function App() {

  const { user, checkAuth } = useUserState();

  const { getCartItems } = useCartState();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if(user){
      getCartItems();
    }
  }, [getCartItems,user]);

  return (
    <>
      {<NavBar />}
      <div className="relative font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={ !user ? <LoginPage /> : <Navigate to={'/'} /> } />
          <Route path="/dashboard" element={ user?.role === 'admin' ? <AdminPage /> : <LoginPage />} />
          <Route path="/cart" element={ user ? <CartPage /> : <Navigate to={'/login'} />} />
          <Route path="/payment-success" element={  <PurchaseSuccessPage />  } />
          <Route path="/product/:id" element={  <ProductDescriptionPage />  } />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
