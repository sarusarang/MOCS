import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Cart() {


    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])


    return (



        <>

            <section className=" pb-5 Cart-paddin pt-5">


                <div className="container">


                    <div className="row">

                        <div className="col-lg-9">



                            <div className="card border shadow-0">


                                <div className="m-4 Cart-padding">


                                    <h4 className="card-title mb-4 text-dark">Your shopping cart</h4>






                                    <div className="row gy-3 mb-4">

                                        <div className='row mb-4 gy-3'>

                                            <div className="col-lg-5">

                                                <div className="me-lg-5">

                                                    <div className="d-flex">

                                                        <img src="https://contents.mediadecathlon.com/p180505/563a4fb110e56f2b0c0c711bc8678121/p180505.jpg" className="border rounded me-3 cart-img" style={{ width: '96px', height: '96px' }} />

                                                        <div className="">

                                                            <a href="#" className="nav-link">Sandals</a>
                                                            <p className="text-muted">FootWare</p>

                                                        </div>

                                                    </div>


                                                </div>

                                            </div>


                                            <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">

                                                <div className="me-5">

                                                    <select style={{ width: '100px' }} className="form-select me-4">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </select>

                                                </div>


                                                <div className="">

                                                    <text className="h6">₹1000</text> <br />

                                                </div>


                                            </div>


                                            <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                                <div className="float-md-end">

                                                    <a className="btn btn-danger shadow-0  text-white">Remove <i class="fa-solid fa-trash-can"></i></a>

                                                </div>
                                            </div>

                                        </div>


                                    </div>




                                </div>



                                <div className="border-top pt-4 mx-4 mb-4">

                                    <p><i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip
                                    </p>

                                </div>



                            </div>


                        </div>



                        <div className="col-lg-3">


                            <div className="card shadow" style={{ border: 'none', borderRadius: '1rem' }}>

                                <div className="card-body bg-white">


                                    <h5 className='text-center mb-4'>Order Summary</h5>


                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Total Items:</p>
                                        <p className="mb-2">0</p>
                                    </div>

                                    <div className="d-flex justify-content-between">

                                        <p className="mb-2">Total Price:</p>

                                        <p className="mb-2 text-success">1000</p>


                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="mb-2">Shipping Fee:</p>
                                        <p className="mb-2 text-success fw-bold">Free</p>
                                    </div>


                                    <hr />

                                    <div className="d-flex justify-content-between">



                                        <p className="mb-2 fw-bold">Sub Total:</p>



                                        <p className="mb-2 text-success">1000</p>


                                    </div>



                                    <div className="mt-3">



                                        <Link to={'/buy'}>

                                            <a href="#" className="btn btn-success w-100 shadow-0  mt-2"> Check Out </a>

                                        </Link>


                                    </div>


                                </div>


                            </div>



                        </div>


                    </div>

                </div>

            </section>





        </>











    )







}

export default Cart