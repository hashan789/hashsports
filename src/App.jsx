import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import NavBar from "./components/NavBar"
import { useUserState } from "./stores/useUserState"
import { useEffect } from "react"
import AdminPage from "./pages/AdminPage"

function App() {

  const { user, checkAuth } = useUserState();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      {<NavBar />}
      <div className="relative font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={ user ? <HomePage/> : <LoginPage />} />
          <Route path="/dashboard" element={ user?.role === 'admin' ? <AdminPage /> : <LoginPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
