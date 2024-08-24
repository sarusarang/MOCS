import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Hero() {




    useEffect(() => {

        AOS.init({

            duration: 400,
            easing: "ease-out-cubic",
        })

    }, []);




    return (


        <>


            <section className='mt-5 pb-5 hero'>


                <div className='container'>


                    <h3 className='text-center'>COLLECTIONS OF</h3>


                    <div className='row'>


                        <div className='col-12 hero-box' data-aos="fade-up" data-aos-duration="600">

                            <img src="/83317419_2310-w056-n005-393A-p30-393.jpg" className='img-fluid' alt="img" />

                        </div>



                        <div className='col-12 hero-box' data-aos="fade-right" data-aos-duration="600">

                            <img src="/22890787_6554697.jpg" className='img-fluid' alt="img" />

                        </div>



                        <div className='col-12 hero-box' data-aos="fade-left" data-aos-duration="600">

                            <img src="/21267341_2110.w015.n001.586B.p15.586.jpg" className='img-fluid' alt="img" />

                        </div>


                    </div>

                </div>





            </section>



        </>


    )


}

export default Hero