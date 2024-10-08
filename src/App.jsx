import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Toaster } from 'sonner'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Pages/Cart'
import SingleProduct from './Pages/SingleProduct'
import Filter from './Pages/Filter'
import Terms from './Pages/Terms'
import Policy from './Pages/Policy'
import Refund from './Pages/Refund'
import ContactUs from './Pages/ContactUs'
import BuyNow from './Pages/BuyNow'



function App() {



  const location = useLocation()


  const [Hide, sethide] = useState(false)




  useEffect(() => {


    const hidecheck = () => {

      if (location.pathname == '/auth' || location.pathname == '/buy') {


        sethide(true)


      }
      else {

        sethide(false)

      }

    }

    hidecheck()

  }, [location])




  return (


    <>

      <div className="position-sticky sticky-top  z-5 w-100 header-shadow">


        {!Hide && <Header />}


      </div>


      <Routes>

        <Route path='/' element={<Landing />} />

        <Route path='/auth' element={<Auth />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/pro/:id' element={<SingleProduct />} />

        <Route path='/fil' element={<Filter />} />

        <Route path='/terms' element={<Terms />} />

        <Route path='/policy' element={<Policy />} />

        <Route path='/refund' element={<Refund />} />

        <Route path='/contact' element={<ContactUs />} />

        <Route path='/buy' element={<BuyNow />} />

      </Routes>


      {!Hide && <Footer />}


      <Toaster richColors position='top-center'/>


    </>




  )
}

export default App
