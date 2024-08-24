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


                        <div className='col-md-4 hero-box ' data-aos="fade-right" data-aos-duration="600">

                            <img src="https://cdn.khadims.com/live/image/khadims/banner/554_202310060400_Web_Tiles_New_06_10_23___1.jpg" className='img-fluid' alt="img" />

                        </div>



                        <div className='col-md-4 hero-box' data-aos="fade-up" data-aos-duration="600">

                            <img src="https://cdn.khadims.com/live/image/khadims/banner/554_202310060400_Web_Tiles_New_06_10_23___1.jpg" className='img-fluid' alt="img" />

                        </div>



                        <div className='col-md-4 hero-box' data-aos="fade-left" data-aos-duration="600">

                            <img src="https://cdn.khadims.com/live/image/khadims/banner/554_202310060400_Web_Tiles_New_06_10_23___1.jpg" className='img-fluid' alt="img" />

                        </div>


                        <div className='col-md-6 hero-box' data-aos="fade-right" data-aos-duration="600">

                            <img src="https://image3.jdomni.in/banner/02062022/BA/2B/23/8F058E229372A0C17CD2EEE797_1654153363298.jpeg?output-format=webp" className='img-fluid' alt="img" />

                        </div>

                        <div className='col-md-6 hero-box' data-aos="fade-left" data-aos-duration="600">

                            <img src="https://image3.jdomni.in/banner/02062022/BA/2B/23/8F058E229372A0C17CD2EEE797_1654153363298.jpeg?output-format=webp" className='img-fluid' alt="img" />

                        </div>


                    </div>

                </div>





            </section>



        </>


    )


}

export default Hero