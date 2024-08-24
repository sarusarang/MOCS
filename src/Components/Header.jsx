import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'




function Header() {


  // Collapse the navbar
  const [expanded, setExpanded] = useState(false);


  const handleNavClick = () => {
    setExpanded(false);
  };




  return (



    <Navbar expand="lg" className="header" collapseOnSelect expanded={expanded}>

      <Container className='contain'>


        <div className='nav-logo'>

          <a href="/">

            <img src="/NAV-LOGO.png" className='img-fluid' alt="logo" />

          </a>

        </div>


        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />




        <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


          <Nav className="navigation">

            <Link to={'/'} onClick={handleNavClick}>Home</Link>

            <Link to={'/'} onClick={handleNavClick}>New Arrivals</Link>

            <Link to={'/'} onClick={handleNavClick}>Gents</Link>

            <Link to={'/'} onClick={handleNavClick}>Ladies</Link>

            <Link to={'/'} onClick={handleNavClick}>Boys & Girls</Link>

            <Link to={'/'} onClick={handleNavClick}>Kids</Link>


          </Nav>


        </Navbar.Collapse>



        <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


          <Nav className="navigation">



            <Link to={'/'} onClick={handleNavClick} className='search-none'>

              <input type="text" placeholder='Search' className='form-control w-100' />

            </Link>



            <Link to={'/cart'} onClick={handleNavClick}><i class="fa-solid fa-cart-shopping fa-lg"></i></Link>



            <div className='dropdown'>

              <Nav.Link  ><i class="fa-solid fa-user fa-lg"></i></Nav.Link>

              <div className='dropdown-content'>

                <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Login</Link>
                <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Logout</Link>

              </div>

            </div>


          </Nav>



        </Navbar.Collapse>


      </Container>

    </Navbar>





  )



}

export default Header