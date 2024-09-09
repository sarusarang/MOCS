import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SetFilterData } from '../STORE/FilterSlice'
import { Link } from 'react-router-dom'

function Hero() {




    useEffect(() => {

        AOS.init({

            duration: 400,
            easing: "ease-out-cubic",
        })

    }, []);


    const Dispatch = useDispatch()



    // Filter data handle
    const handleFilterData = (data) => {

        Dispatch(SetFilterData(data))

    }




    return (


        <>


            <section className='mt-5 pb-5 hero'>


                <div className='container'>


                    <h3 className='text-center'>COLLECTIONS OF</h3>


                    <div className='row'>


                        <div className='col-md-4 hero-box ' data-aos="fade-right" data-aos-duration="600" >


                            <Link to={'/fil'}>

                                <img src="/Hero-1.jpeg" loading='lazy' className='img-fluid' alt="img" onClick={() => { handleFilterData("ladies") }} style={{ cursor: 'pointer' }} />

                            </Link>



                            <div className='hero-text-box'>

                                <h1>Women's fashion</h1>

                            </div>

                        </div>



                        <div className='col-md-4 hero-box' data-aos="fade-up" data-aos-duration="600" >

                            <Link to={'/fil'}>

                                <img src="/Hero-2.jpeg" loading='lazy' className='img-fluid' alt="img" onClick={() => { handleFilterData("gents") }} style={{ cursor: 'pointer' }} />

                            </Link>



                            <div className='hero-text-box'>

                                <h1>Gents Delite</h1>

                            </div>

                        </div>



                        <div className='col-md-4 hero-box' data-aos="fade-left" data-aos-duration="600" >


                            <Link to={'/fil'}>

                                <img src="/Hero-3.jpg" loading='lazy' className='img-fluid' alt="img" onClick={() => { handleFilterData("kids") }} style={{ cursor: 'pointer' }} />

                            </Link>


                            <div className='hero-text-box'>

                                <h1>Kids care</h1>

                            </div>

                        </div>





                    </div>

                </div>





            </section>



        </>


    )


}

export default Hero