import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {


  return (


    <>

      <div className="position-sticky sticky-top  z-5 w-100 shadow">


        <Header />


      </div>

      <Routes>



        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<Auth />} />


      </Routes>


      <Footer />


    </>




  )
}

export default App
