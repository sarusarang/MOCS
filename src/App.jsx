import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
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
import LadiesFilter from './Pages/LadiesFilter'
import ContactUs from './Pages/ContactUs'



function App() {



  const location = useLocation()


  const [Hide, sethide] = useState(false)




  useEffect(() => {


    const hidecheck = () => {

      if (location.pathname == '/auth') {


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

        <Route path='/pro' element={<SingleProduct />} />

        <Route path='/fil' element={<Filter />} />

        <Route path='/terms' element={<Terms />} />

        <Route path='/policy' element={<Policy />} />

        <Route path='/refund' element={<Refund />} />

        <Route path='/ladies' element={<LadiesFilter />} />

        <Route path='/contact' element={<ContactUs />} />

      </Routes>


      {!Hide && <Footer />}


    </>




  )
}

export default App
