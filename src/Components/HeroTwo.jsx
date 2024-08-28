import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroTwo() {


    const Navigate = useNavigate()



    useEffect(() => {

        AOS.init({

            duration: 400,
            easing: "ease-out-cubic",
        })



    }, []);




    return (




        <>


            <section className='pb-5 hero2 w-100'>


                <div className='container hero2-padding'>


                    <h3>CATEGORY</h3>

                    <div className='row pt-0'>


                        <div className='col-md-6 hero2-box' data-aos="zoom-in" data-aos-duration="600" onClick={()=>{Navigate('/pro')}} >

                            <img loading='lazy' src="https://image3.jdomni.in/banner/31052022/46/ED/1C/6CEF6ABF091A53AA9D421F0941_1653992530385.jpeg?output-format=webp" className='img-fluid' alt="img" />

                            <div className='box-text'>

                                <h1>Gent's Footware</h1>

                            </div>

                        </div>



                        <div className='col-md-6 hero2-box' data-aos="zoom-in" data-aos-duration="600" onClick={()=>{Navigate('/pro')}} >

                            <img loading='lazy' src="https://image3.jdomni.in/banner/31052022/A1/4E/B7/0CC5D6C6D27C91EC955D9BB267_1653994766901.png?output-format=webp" className='img-fluid' alt="img" />

                            <div className='box-text'>

                                <h1>Ladie's Footware</h1>

                            </div>

                        </div>


                        <div className='col-md-6 hero2-box' data-aos="zoom-in" data-aos-duration="600" onClick={()=>{Navigate('/pro')}} >

                            <img loading='lazy' src="https://image2.jdomni.in/banner/31052022/AC/1C/82/51CE59CA074B1D3519E729D2C8_1653992829233.jpeg?output-format=webp" className='img-fluid' alt="img" />

                            <div className='box-text'>

                                <h1>Boy's Footware</h1>

                            </div>

                        </div>


                        <div className='col-md-6 hero2-box' data-aos="zoom-in" data-aos-duration="600" onClick={()=>{Navigate('/pro')}} >

                            <img loading='lazy' src="https://image3.jdomni.in/banner/13122022/68/E6/65/1704754727B1C1EDA3CA0B2ED8_1670923868449.jpeg?output-format=webp" className='img-fluid' alt="img" />

                            <div className='box-text'>

                                <h1>Girls's Footware</h1>

                            </div>

                        </div>



                    </div>


                </div>



            </section>




        </>






    )





}

export default HeroTwo