import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-react-ui-kit'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from './STORE/Store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(






  <BrowserRouter>


    <Provider store={Store}>


      <GoogleOAuthProvider clientId="706481207495-tiqlds9hff6lgculodqiqe1qk3n7tvm5.apps.googleusercontent.com">


        <App />


      </GoogleOAuthProvider>


    </Provider>



  </BrowserRouter>




)
