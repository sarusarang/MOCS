import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Slider() {





    return (






        <>


            <section className='w-100 pt-4 container' >


                <Carousel data-bs-theme="dark" controls={false} indicators={false} slide={true}>


                    <Carousel.Item >

                        <img
                            className="d-block w-100"
                            src="https://cdn.khadims.com/image/catalog/brandstore/khadims/858-1717957800-newbannermonsoonweb.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>


                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src="https://cdn.khadims.com/image/catalog/brandstore/khadims/554-1706553000-sale_desk.jpg"
                            alt="Second slide"
                        />

                    </Carousel.Item>


                </Carousel>




            </section>



        </>







    )







}

export default Slider