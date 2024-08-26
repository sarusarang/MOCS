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
                            src="/Baner 3000x992-04.jpg"
                            alt="First slide"
                            loading='lazy'
                        />

                    </Carousel.Item>


                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src="/Baner 3000x992-03.jpg"
                            alt="Second slide"
                            loading='lazy'
                        />

                    </Carousel.Item>


                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src="/Baner 3000x992-02.jpg"
                            alt="Second slide"
                            loading='lazy'
                        />

                    </Carousel.Item>


                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src="/Baner 3000x992-01.jpg"
                            alt="Second slide"
                            loading='lazy'
                        />

                    </Carousel.Item>


                </Carousel>




            </section>



        </>







    )







}

export default Slider