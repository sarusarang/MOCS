import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function HeroThree() {



    useEffect(() => {

        AOS.init({

            duration: 400,
            easing: "ease-out-cubic",
        })

    }, []);



    return (




        <>


            <section className='pt-5 pb-5' style={{borderTop:'3px dotted #ccc'}} id='about'>

                <div className='container hero-3 p-5' >


                    <div className='row'>


                        <div className='col-md-6' data-aos="fade-right" data-aos-duration="600">

                            <img src="/About Us.jpg" loading='lazy' className='img-fluid' alt="img" />

                        </div>



                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center' data-aos="fade-left" data-aos-duration="600">

                            <h3>About Us</h3>


                            <p>MOCS Foot Care, founded in Kozhikode by Azhar R.M. in 2014, began with handmade ladies' belly shoes and has since expanded its product range and production capacity. Initially focused on Kerala, the company now distributes 20,000 pairs daily across several Indian states and internationally. MOCS is recognized for quality and trendy designs and aims to enhance its global brand value by launching premium products.</p>

                        </div>



                    </div>

                </div>

            </section>




        </>









    )







}

export default HeroThree