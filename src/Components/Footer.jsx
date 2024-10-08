import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {





  return (


    <>



      <footer className="text-center text-lg-start text-white py-1 px-5">

        <section className="p-5 pb-0 pt-0" style={{ borderBottom: '1px solid #414141' }}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">


              {/* Shop At */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-main">

                <h6 className="text-uppercase fw-bold mb-4">
                  SHOP AT MOCS
                </h6>

                <p>

                  <Link to={'/fil'} className='text-reset foot-link'>Men</Link>

                </p>

                <p>

                  <Link to={'/fil'} className='text-reset foot-link'>Women</Link>

                </p>


                <p>

                  <Link to={'/fil'} className='text-reset foot-link'>Kids</Link>

                </p>

                <p>

                  <Link to={'/fil'} className='text-reset foot-link'>Brands</Link>

                </p>

                <p>

                  <Link to={'/fil'} className='text-reset foot-link'>Offers</Link>


                </p>

              </div>




              {/* Info */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-main">

                <h6 className="text-uppercase fw-bold mb-4">
                  COMPANY INFO
                </h6>

                <p >


                  <a href="#about" className='text-reset foot-link'>About Us</a>

                </p>

                <p>

                  <Link to={'/'} className='text-reset foot-link'>Media Center</Link>

                </p>


                <p>

                  <Link to={'/'} className='text-reset foot-link'>Blog</Link>

                </p>

                <p>

                  <Link to={'/'} className='text-reset foot-link'>Careers</Link>

                </p>

              </div>



              {/* E-shop */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-main">

                <h6 className="text-uppercase fw-bold mb-4">
                  E-SHOPPING
                </h6>


                <p>

                  <Link to={'/refund'} className='text-reset foot-link'>Online Shopping Policy</Link>

                </p>


                <p>

                  <Link to={'/auth'} className='text-reset foot-link'>Login</Link>

                </p>


                <p>

                  <Link to={'/'} className='text-reset foot-link'>Track My Order</Link>

                </p>


              </div>





              {/* E-shop */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-main">

                <h6 className="text-uppercase fw-bold mb-4">
                  CUSTOMER SERVICE
                </h6>

                <p>

                  <Link to={'/contact'} className='text-reset foot-link'>Contact Us</Link>

                </p>


                <p>

                  <Link to={'/contact'} className='text-reset foot-link'>Store Locator</Link>

                </p>






              </div>




              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 foot-main">

                <h6 className="text-uppercase fw-bold mb-4">
                  Get In Touch
                </h6>



                <p>

                  <i class="fa-solid fa-house-chimney"></i> Corporate Office <br /> MOCS Foot Care <br />   7QJ8+42H, West Hill, Kozhikode, Kerala 673005

                </p>


                <p>

                  <a href="https://wa.me/+917994550834" className='nav-link' target='_blank'> <i class="fa-solid fa-brands fa-whatsapp me-2 fa-lg"></i>  +91 7994550834</a>

                </p>


                <p>

                  <Link to={'/'} className='text-reset foot-link'><a className='nav-link' target='_blank'> <i class="fa-solid fa-phone me-2"></i>0495 485 5060</a></Link>

                </p>

                <p>

                  <a href="mailto:support@mocs.in" className='nav-link' target='_blank'><i class="fa-solid fa-envelope me-2"></i> support@mocs.in</a>

                </p>



              </div>


            </div>

          </div>

        </section>







        {/* Socail Media Links */}
        <section className="d-flex justify-content-center mt-3 foot-soc">

          <a data-mdb-ripple-init className="btn m-1" href="https://www.facebook.com/mocsfootcarecalicut/" role="button" target='_blank' style={{ borderRadius: '8rem' }}
          ><i className="fab fa-facebook-f text-white"></i
          ></a>


          <a data-mdb-ripple-init className="btn m-1" href="https://x.com/mocsfootwear" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i className="fa-brands fa-x-twitter text-white"></i></a>

          <a data-mdb-ripple-init className="btn  m-1" href="https://www.instagram.com/mocsfootwear/?hl=en" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i className="fab fa-instagram text-white"></i
          ></a>


          <a data-mdb-ripple-init className="btn  m-1" href="https://www.linkedin.com/company/mocs-footcare/about/?viewAsMember=true" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i className="fab fa-linkedin-in text-white"></i
          ></a>


          <a data-mdb-ripple-init className="btn m-1" href="https://www.youtube.com/@mocsfootwear" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i className="fa-brands fa-youtube text-white"></i></a>




          <a data-mdb-ripple-init className="btn  m-1" href="https://in.pinterest.com/mocsfootwearin/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i className="fa-brands fa-pinterest text-white"></i></a>


        </section>




        <div className="text-center p-4 pb-0" style={{ color: '#ccc' }}>


          <p> Copyright © 2024 Mocs All Rights Reserved. </p>

          <p>Powered by <a href="https://exmedia.in" target='_blank' className='foot-link'>exmedia.in</a></p>


          <div className='d-flex justify-content-center'>

            <p><Link className='nav-link foot-link me-3' to={'/policy'}> Privacy & Policy</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/terms'}>Terms & Conditions</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/refund'}>Refund Policy</Link></p>

          </div>


        </div>

      </footer>







    </>






  )


}

export default Footer