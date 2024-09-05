
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  CountrContextProvider  from './context/CounterContext.jsx'
import  AuthContextProvider  from './context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(


  <CountrContextProvider>

    <AuthContextProvider>


    <App />


    </AuthContextProvider>


  </CountrContextProvider>
   
  
)
