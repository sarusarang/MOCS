import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {





  return (


    <>



      <footer className="text-center text-lg-start text-white py-1 px-5">

        <section className="p-5 pt-0" style={{ borderBottom: '1px solid #414141' }}>

          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">


              {/* Shop At */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  SHOP AT MOCS
                </h6>

                <p>

                  <Link className='text-reset foot-link'>Men</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Women</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Kids</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Brands</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Offers</Link>


                </p>

              </div>




              {/* Info */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  COMPANY INFO
                </h6>

                <p>

                  <Link className='text-reset foot-link'>About Us</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Media Center</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Blog</Link>

                </p>

                <p>

                  <Link className='text-reset foot-link'>Careers</Link>

                </p>

              </div>



              {/* E-shop */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  E-SHOPPING
                </h6>


                <p>

                  <Link className='text-reset foot-link'>Online Shopping Policy</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>My Account</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Track My Order</Link>

                </p>


              </div>





              {/* E-shop */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  CUSTOMER SERVICE
                </h6>

                <p>

                  <Link className='text-reset foot-link'>Contact Us</Link>

                </p>


                <p>

                  <Link className='text-reset foot-link'>Store Locator</Link>

                </p>


              </div>


            </div>

          </div>

        </section>


        <div class="text-center p-4 pb-0" style={{ color: '#ccc' }}>


          <p> Copyright © 2024 happycouplesolution. All Rights Reserved. </p>

          <p>Powered by <a href="" className='foot-link'>exmedia.in</a></p>


          <div className='d-flex justify-content-center'>

            <p><Link className='nav-link foot-link me-3' to={'/pirvacy'}> Privacy & Policy</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/terms'}>Terms & Conditions</Link></p>

            <p><Link className='nav-link foot-link me-3' to={'/refund'}>Refund Policy</Link></p>

          </div>


        </div>




        {/* Socail Media Links */}
        <section class="d-flex justify-content-center pb-3">

          <a data-mdb-ripple-init class="btn m-1" href="https://www.facebook.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fab fa-facebook-f text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn m-1" href="https://x.com/happycouplesolu" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-x-twitter text-white"></i></a>

          <a data-mdb-ripple-init class="btn  m-1" href="https://www.instagram.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fab fa-instagram text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn  m-1" href="https://www.linkedin.com/company/happycouplesolution/?viewAsMember=true" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fab fa-linkedin-in text-white"></i
          ></a>


          <a data-mdb-ripple-init class="btn m-1" href="https://www.youtube.com/@happycouplesolution" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-youtube text-white"></i></a>




          <a data-mdb-ripple-init class="btn  m-1" href="https://in.pinterest.com/happycouplesolution/" role="button" target='_blank' style={{ borderRadius: '5rem' }}
          ><i class="fa-brands fa-pinterest text-white"></i></a>


        </section>

      </footer>







    </>






  )


}

export default Footer