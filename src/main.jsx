import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="40048471698-v38864irv1c0phkcfpi45e6okh1r62oa.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>;
  </StrictMode>,
)
