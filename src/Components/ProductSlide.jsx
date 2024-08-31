import React from 'react'
import { useEffect, useState } from 'react'
import "./ProductSlide.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { GetAllProducts } from '../Services/AllApi';
import { useNavigate } from 'react-router-dom'
import { Skeleton } from '@mui/material';



function ProductSlide() {



    // Products Data
    const [Products, SetProducts] = useState([])


    // Loading 
    const [Loading, SetLoading] = useState(true)


    // Navigate 
    const Navigate = useNavigate()




    useEffect(() => {


        // To get all the products
        const GetProducts = async () => {

            try {

                const res = await GetAllProducts()

                if (res.status >= 200 && res.status <= 300) {


                    const Result = res.data.slice(0, 6)
                    SetProducts(Result)
                    SetLoading(false)


                }
                else {


                    console.log(res);
                    SetLoading(true)


                }

            }
            catch (err) {

                console.log(err);
                SetLoading(true)

            }


        }


        GetProducts()


    }, [])





    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }



    console.log(Products);




    return (


        <>

            <section className='product-slide'>


                <div className='container p-5 pt-0'>


                    <Carousel responsive={responsive}>



                        {

                            Loading ?


                                Array.from({ length: 3 }).map((item) => (


                                    <div className='me-5 mt-3'>

                                        <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                        <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                        <Skeleton animation="wave" height={20} width="80%" />

                                    </div>

                                ))


                                :


                                Products.map((item) => (


                                    <div>

                                        <div className="container page-wrapper">

                                            <div className="page-inner">


                                                <div className="row">


                                                    <div className="el-wrapper">


                                                        <div className="box-up" onClick={() => { Navigate(`/pro/${item.id}`) }}>

                                                            <img className="img-fluid img" loading='lazy' src={item.image} alt="img" style={{ height: '100%' }} />

                                                            <div className="img-info">

                                                                <div className="info-inner">

                                                                    <span className="p-name"></span>
                                                                    <span className="p-company">{item.name}</span>

                                                                    <div className='p-company'>

                                                                        <span class="fa fa-star " style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star" style={{ color: '#FFD43B' }}></span>
                                                                        <span class="fa fa-star fa-star-half-stroke" style={{ color: '#FFD43B' }}></span>

                                                                    </div>

                                                                </div>



                                                            </div>

                                                        </div>

                                                        <div className="box-down">

                                                            <div className="h-bg">
                                                                <div className="h-bg-inner"></div>
                                                            </div>

                                                            <a className="cart" >

                                                                <span className="price">Just ₹{item.offer_is_available ? item.offer_price : item.price}</span>

                                                                <span className="add-to-cart" >

                                                                    <span className="txt" >Add in cart</span>


                                                                </span>

                                                            </a>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>



                                ))

                        }





                    </Carousel>


                </div>


            </section>





        </>




    )

}



export default ProductSlide