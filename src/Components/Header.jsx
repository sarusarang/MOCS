import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SetFilterData, SetSearchData} from '../STORE/FilterSlice'





function Header() {


  // Collapse the navbar
  const [expanded, setExpanded] = useState(false)


  const handleNavClick = () => {

    setExpanded(false)

  }



  const Dispatch = useDispatch()

  const Navigate = useNavigate()


  const handleLogOut = () => {


    handleNavClick()

    const user = sessionStorage.getItem("token")

    if (user) {

      sessionStorage.removeItem("token")

      sessionStorage.removeItem("user")

      toast.success("Logged Out...!")


    }
    else {


      toast.warning("No user Found Please Login...")

    }


  }


  // Filter data handle
  const handleFilterData = (data) => {


    handleNavClick()

    Dispatch(SetFilterData(data))

  }


  


  return (



    <Navbar expand="lg" className="header" collapseOnSelect expanded={expanded}>

      <Container className='contain p-3'>


        <div className='nav-logo'>

          <a href="/">

            <img src="/Mocs Logo.png" className='img-fluid' alt="logo" />

          </a>

        </div>


        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />




        <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


          <Nav className="navigation">

            <Link to={'/'} onClick={handleNavClick}>Home</Link>

            <Link to={'/fil'} onClick={() => {handleFilterData(true)}}>New Arrivals</Link>

            <Link to={'/fil'} onClick={() => { handleFilterData("gents") }}>Gents</Link>

            <Link to={'/fil'} onClick={() => { handleFilterData("ladies") }}>Ladies</Link>

            <Link to={'/fil'} onClick={() => { handleFilterData("boys&girls") }}>Boys & Girls</Link>

            <Link to={'/fil'} onClick={() => { handleFilterData("kids") }}>kids</Link>

          </Nav>


        </Navbar.Collapse>



        <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


          <Nav className="navigation">



            <Link to={'/fil'} onClick={handleNavClick} className='search-none'>

              <input type="text" placeholder='Search' onChange={(e)=>{Dispatch(SetSearchData(e.target.value))}} className='form-control w-100' />

            </Link>



            <Link to={'/cart'} onClick={handleNavClick}><i class="fa-solid fa-cart-shopping fa-lg"></i></Link>



            <div className='dropdown'>

              <Nav.Link  ><i class="fa-solid fa-user fa-lg"></i></Nav.Link>

              <div className='dropdown-content'>

                <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Login</Link>
                <Link to={'/'} className='drop-link d-block' onClick={handleLogOut}>Logout</Link>
                <Link to={'/'} className='drop-link d-block'>Orders</Link>

              </div>

            </div>


          </Nav>



        </Navbar.Collapse>


      </Container>

    </Navbar>





  )



}

export default Header