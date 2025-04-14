import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/Loader.jsx'

const App = lazy(() => import('./App.jsx'))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={
      <div className='bg-blue-700 bg-opacity-30 flex justify-center items-center w-full h-screen'>
        <Loader />
      </div>
      }> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
