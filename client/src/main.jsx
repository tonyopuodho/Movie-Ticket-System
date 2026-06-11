import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from '@clerk/react'
const PUBLISHABLEKEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY 

if (!PUBLISHABLEKEY) {
  throw new Error("Missing publishable key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLEKEY}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
