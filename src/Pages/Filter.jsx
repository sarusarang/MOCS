import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetAllProducts } from '../Services/AllApi';
import { Skeleton } from '@mui/material';



function Filter() {



    // Redux States
    const { Filter, Search } = useSelector((state) => state.Filter)


    // Filterd Data
    const [FilterData, SetFilterData] = useState([])


    // Loading State 
    const [Loading, SetLoading] = useState(true)


    const Navigate = useNavigate()


    // Price Range
    const [rangeValue, setRangeValue] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);





    useEffect(() => {



        // To get all the products
        const GetProducts = async () => {

            try {

                const res = await GetAllProducts()

                if (res.status >= 200 && res.status <= 300) {



                    SetFilterData(res.data)
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



        window.scrollTo(0, 0);

        GetProducts()

    }, [])



    // Price Button 
    const handleRangeChange = (e) => {

        const value = e.target.value;
        setRangeValue(value);
        setMaxPrice(value)
    };




    console.log(FilterData);



    return (


        <>


            <section className="p-3 pt-5 mb-5">



                <div className="container">


                    <div className="row">

                        {/* Filter options */}
                        <div className="col-lg-3">


                            <button
                                className="btn btn-outline-secondary mb-3 w-100 d-lg-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span>Show filter</span>
                            </button>



                            <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">


                                <div className="accordion" id="accordionPanelsStayOpenExample">


                                    <div className="accordion-item">


                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button text-dark bg-light fw-bold"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseOne"
                                                aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseOne"
                                            >
                                                Categories
                                            </button>
                                        </h2>


                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">

                                            <div className="accordion-body">

                                                <div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                                        <label className="form-check-label" for="flexCheckChecked1">Gent's</label>
                                                        <span className="badge badge-secondary float-end">120</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">Ladie's</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                                        <label className="form-check-label" for="flexCheckChecked3">Boys & Girls</label>
                                                        <span className="badge badge-secondary float-end">35</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                                        <label className="form-check-label" for="flexCheckChecked3">Kids</label>
                                                        <span className="badge badge-secondary float-end">35</span>
                                                    </div>


                                                </div>

                                            </div>

                                        </div>



                                    </div>


                                    <div className="accordion-item">


                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button text-dark bg-light fw-bold"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseTwo"
                                                aria-expanded="true"
                                                aria-controls="panelsStayOpen-collapseTwo"
                                            >
                                                Type
                                            </button>
                                        </h2>


                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo">


                                            <div className="accordion-body">


                                                <div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                                        <label className="form-check-label" for="flexCheckChecked1">SANDALS & CLOGS</label>
                                                        <span className="badge badge-secondary float-end">120</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">SHOES</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                </div>



                                            </div>
                                        </div>
                                    </div>


                                    <div className="accordion-item">


                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button text-dark bg-light fw-bold"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseThree"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseThree"
                                            >
                                                Price
                                            </button>
                                        </h2>


                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree">

                                            <div className="accordion-body">

                                                <div className="range">
                                                    <input type="range" className="form-range" id="customRange1" value={rangeValue} onChange={handleRangeChange} min="0" max="10000" />
                                                </div>

                                                <div className="row mb-3">

                                                    <div className="col-6">
                                                        <p className="mb-0">
                                                            Min₹
                                                        </p>

                                                        <div className="form-outline">
                                                            <input type="number" placeholder='₹0' id="typeNumber" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="form-control" />

                                                        </div>

                                                    </div>


                                                    <div className="col-6">

                                                        <p className="mb-0">
                                                            Max₹
                                                        </p>

                                                        <div className="form-outline">

                                                            <input type="number" id="typeNumber" placeholder='₹1000' className="form-control" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />

                                                        </div>

                                                    </div>

                                                </div>

                                                {/* <button type="button" className="btn btn-white w-100 border border-secondary">apply</button> */}

                                            </div>


                                        </div>


                                    </div>


                                    <div className="accordion-item">


                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button text-dark bg-light fw-bold"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#panelsStayOpen-collapseFour"
                                                aria-expanded="false"
                                                aria-controls="panelsStayOpen-collapseFour"
                                            >
                                                Size
                                            </button>
                                        </h2>


                                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingThree">

                                            <div className="accordion-body">

                                                <div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" />
                                                        <label className="form-check-label" for="flexCheckChecked1">1</label>
                                                        <span className="badge badge-secondary float-end">120</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">2</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">3</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">4</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">5</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">6</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">6</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">7</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">8</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">9</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>



                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">10</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>




                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">11</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">12</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                        <label className="form-check-label" for="flexCheckChecked2">13</label>
                                                        <span className="badge badge-secondary float-end">15</span>
                                                    </div>


                                                </div>

                                            </div>

                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>


                        <div className="col-lg-9">


                            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">

                                <strong className="d-block py-2">{FilterData.length} Products Found</strong>

                            </header>


                            {/* Products */}
                            <div className="row">


                                {


                                    Loading ?

                                        Array.from({ length: 6 }).map((item) => (


                                            <div className=' mt-3 col-md-4 '>

                                                <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                                <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                                <Skeleton animation="wave" height={20} width="80%" />

                                            </div>

                                        ))



                                        :



                                        FilterData.length > 0 ?


                                            FilterData.map((item) => (


                                                <div className="col-lg-4 col-md-6 col-sm-6 d-flex" >

                                                    <div className="card w-100 my-2 border  hover-shadow">

                                                        <img loading='lazy' src={item.image} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => { Navigate(`/pro/${item.id}`) }} />

                                                        <div className="card-body d-flex flex-column">

                                                            <h4 className="mb-1 me-1 fw-bold">{item.name}</h4>

                                                            <div className="d-flex flex-row ">

                                                                <h5 className="mb-1 me-1">₹ {item.offer_is_available ? item.offer_price : item.price}</h5>

                                                                <span className="text-danger"><s>{item.offer_is_available ? <s> ₹{item.price} </s> : ""}</s></span>

                                                                <p className='text-success ms-2'>{item.offer_is_available ? <s style={{textDecoration:'none'}}>{item.offer_percentage}%off</s> : ""}</p>


                                                            </div>



                                                            <p className="card-text">{item.description}</p>

                                                            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">

                                                                <a className="btn btn-dark shadow-0 me-1">Add to cart</a>


                                                            </div>


                                                        </div>


                                                    </div>

                                                </div>




                                            ))



                                            :


                                            <h1>No Products Found</h1>

                                }






                            </div>



                        </div>



                    </div>

                </div>





            </section>



        </>


    )




}

export default Filter