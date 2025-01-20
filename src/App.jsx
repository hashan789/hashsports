import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import NavBar from "./components/NavBar"
import { useUserState } from "./stores/useUserState"
import { useEffect } from "react"

function App() {

  const { user, checkAuth } = useUserState();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <NavBar />
      <div className="relative top-20 font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={ user ? <HomePage/> : <LoginPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
