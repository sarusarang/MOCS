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


            <section className='pt-5 pb-5' style={{borderTop:'3px dotted #ccc'}}>

                <div className='container hero-3'>


                    <div className='row'>


                        <div className='col-md-6' data-aos="fade-right" data-aos-duration="600">

                            <img src="https://image3.jdomni.in/banner/02062022/BA/2B/23/8F058E229372A0C17CD2EEE797_1654153363298.jpeg?output-format=webp" className='img-fluid' alt="" />

                        </div>



                        <div className='col-md-6 d-flex flex-column justify-content-center align-items-center' data-aos="fade-left" data-aos-duration="600">

                            <h3>About Us</h3>


                            <p>Each and every footwear bought from our website will act as a style statement for you, all by itself. We deal into varied types of footwears for men, women, kids and babies. We simply 'aim to please' and believe in keeping our customers before anything. We, dummy company, located in area, city, state have curated some of the best styles that you can wear with Indian, formal, casuals, ethnic and every-day wear. We understand the wide range of sizes and foot types and thus have footwear for one and all. So, grab your favourite one soon</p>

                        </div>



                    </div>

                </div>

            </section>




        </>









    )







}

export default HeroThree