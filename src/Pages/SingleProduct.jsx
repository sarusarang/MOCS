import React from 'react'
import { useState, useEffect } from 'react'
import { MDBTabs, MDBTabsItem, MDBTabsLink } from "mdb-react-ui-kit"
import ProductSlide from '../Components/ProductSlide'

function SingleProduct() {


  useEffect(() => {

    window.scrollTo(0, 0);

  }, [])


  // Discription State
  const [DisStatus, SetDisStatus] = useState(false)


  // To handle Spec Tabs
  const [activeItem, setActiveItem] = useState('tab1')


  // To handle Spec Tabs
  const handleTabClick = (value) => {

    if (value === activeItem) {

      return;
    }

    setActiveItem(value);
  }





  return (


    <>




      <section>



        <section className="py-5">


          <div className="container">


            <div className="row gx-5">


              <aside className="col-lg-6">


                <div className="border rounded-4 mb-3 d-flex justify-content-center">

                  <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">
                    <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="/010 GREEN 6-10 379.jpg" />
                  </a>

                </div>


                <div className="d-flex justify-content-center mb-3">

                  <a data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                    <img width="60" height="60" className="rounded-2" src="/010 GREEN 6-10 379.jpg" />
                  </a>

                </div>


              </aside>


              <main className="col-lg-6">

                <div className="ps-lg-3">

                  {/* Tittle */}
                  <h3 className="title text-dark mb-0 fw-bold">
                    Footware
                  </h3>
                  <p style={{ color: "#777" }}>Perfect Sandals for Men</p>


                  {/* Rating */}
                  <div className="d-flex flex-row my-3">

                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">
                        4.5
                      </span>
                    </div>


                    <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>50</span>
                    <span className="text-success ms-2">In stock</span>


                  </div>


                  {/* Price */}
                  <div className="mb-3">

                    <span className="h5 fw-bold">MRP ₹379.00</span> <br />
                    <span className="text-muted" style={{ fontSize: '13px', fontWeight: '500' }}> (Inclusive of all taxes)</span>

                  </div>




                  {/* Incrediants */}
                  <p className='mb-4'>
                    Is a long established fact that a reader will be distracted by the readable content of
                    a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-

                  </p>


                  {/* <button className='bg-transparent fw-bold' style={{border:'none'}} onClick={() => { SetDisStatus(!DisStatus) }}>Discription:</button>

                  {

                    DisStatus &&

                    <div>

                      <p style={{ textAlign: 'justify' }}>


                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                      </p>

                    </div>

                  } */}



                  <div className="row">


                    <dt className="col-3">Color:</dt>

                    <dd className="col-9">Black</dd>

                    <dt className="col-3">Type:</dt>
                    <dd className="col-9">Casual Sandal</dd>

                  </div>



                  <hr />



                  {/* Quanity */}
                  <div className=" mb-5 mt-3">


                    <div className="d-flex flex-column">


                      <label className="mb-2 fw-bold" style={{ fontSize: '1.3rem' }}>Size</label>

                      <div className='row'>



                        <button className="btn_nos me-3 mt-2 col-md-2 active">8</button>
                        <button className="btn_nos me-3 mt-2 col-md-2 ">9</button>
                        <button className="btn_nos me-3 mt-2 col-md-2 ">10</button>
                        <button className="btn_nos me-3 mt-2 col-md-2 ">11</button>
                        <button className="btn_nos me-3 mt-2 col-md-2 ">12</button>

                      </div>


                    </div>


                  </div>



                  {/* Buy Now */}
                  <a className="btn btn-buynow shadow me-3 mt-3"> Buy now </a>
                  <a className="btn btn-addcart shadow mt-3"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>



                </div>


              </main>
            </div>
          </div>


        </section>




        <section className="bg-light border-top py-4 pb-5 mb-5 pt-5" style={{ borderBottom: '3px dotted #eee' }}>


          <div className="container">


            <div className="row gx-4">

              {/* SPECS */}
              <div className="col-lg-12 mb-4">

                <div className='border rounded-2 shadow px-3 py-2 bg-white'>

                  <MDBTabs pills className="mb-3 p-3">

                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick('tab1')} active={activeItem === 'tab1'} className=' text-dark me-3' style={{ border: '1px solid #000' }} >
                        Discription
                      </MDBTabsLink>
                    </MDBTabsItem>

                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick('tab2')} active={activeItem === 'tab2'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                        Product Details
                      </MDBTabsLink>
                    </MDBTabsItem>


                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick('tab3')} active={activeItem === 'tab3'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                        Customer Reviews
                      </MDBTabsLink>
                    </MDBTabsItem>


                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick('tab4')} active={activeItem === 'tab4'} className=' text-dark me-3' style={{ border: '1px solid #000' }}>
                        FAQs
                      </MDBTabsLink>
                    </MDBTabsItem>


                    <MDBTabsItem>
                      <MDBTabsLink onClick={() => handleTabClick('tab5')} active={activeItem === 'tab5'} className=' text-dark' style={{ border: '1px solid #000' }}>
                        Shipping & Return
                      </MDBTabsLink>
                    </MDBTabsItem>


                  </MDBTabs>




                  {/* Discription */}
                  {

                    activeItem == "tab1" &&

                    <div className='key-benfits pb-5'>

                      <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>

                  }


                  {/* Product Details*/}
                  {

                    activeItem == "tab2" &&

                    <div className='howto-use pb-5 ps-3 pe-3'>

                      <ul>

                        <li>ansmsannsa</li>
                        <li>ansmsannsa</li>
                        <li>ansmsannsa</li>


                      </ul>

                    </div>

                  }






                  {/* Review */}
                  {

                    activeItem == "tab3" &&

                    <div className='pb-5 ps-3 pe-3'>


                      <div className='mb-4 customer-review'>

                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                        <p>started using Lygin M before moving to stronger medications. Not only did my condition improve,
                          but I also feel more energetic throughout the day!" - Jason M.</p>

                      </div>



                      <div className='mb-4 customer-review'>

                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                        <p>Great product with natural ingredients. I appreciate the holistic approach to treating ED." - Kevin T.</p>

                      </div>



                      <div className='mb-4 customer-review'>

                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                        <p>Noticed significant improvements in both my sexual health and overall well-being. Highly recommend Lygin M!" - Sam D.</p>

                      </div>


                    </div>

                  }



                  {/* Faq */}
                  {

                    activeItem == "tab4" &&

                    <div className='FAQ pb-5 ps-3 pe-3'>

                      <ul>

                        <li>

                          <p className='mt-2'>Hello hi</p>

                        </li>

                      </ul>

                    </div>

                  }




                  {/* Shipping & Return */}
                  {

                    activeItem == "tab5" &&

                    <div className='FAQ pb-5 ps-3 pe-3'>

                      <p className='fw-bold'>Shipping</p>
                      <p>Free Shipping on all Orders in India</p>

                      <p className='fw-bold'>Estimated Delivery</p>
                      <p>4-5 working days</p>

                      <p className='fw-bold'>Return & Exchange</p>
                      <p>Unworn  shoes can be exchanged or returned for a full refund within 7 days</p>

                    </div>
                  }



                </div>


              </div>



        

            </div>


          </div>


        </section>

      </section>



      {/* Products */}
      <section className='pb-5'>


        <div>

          <h3 className='text-center mb-0' style={{ fontWeight: '600' }}>YOU MAY ALSO LIKE</h3>
          <p className='text-center' style={{color:'#777'}}>Browse the collection of related products.</p>

          <ProductSlide />


        </div>


      </section>






    </>





















  )











}

export default SingleProduct