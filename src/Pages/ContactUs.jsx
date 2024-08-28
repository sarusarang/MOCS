import React from 'react'
import './Contact.css'
import { useEffect } from 'react'

function ContactUs() {



    useEffect(() => {

        window.scrollTo(0, 0);

    }, [])



    return (





        <>

            <section className='contact container'>



                <div className='Contact-hero row'>

                    <h2 className='text-center'></h2>

                </div>



                <div className='contact-form row  mt-5'>


                    {/* Contact Deatils */}
                    <div className='col-md-6 get-in'>

                        <h3 className='mb-4'>Contact Us</h3>


                        <p><i class="fa-solid fa-house me-2"></i>7QJ8+42H, West Hill, Kozhikode, Kerala 673005</p>

                        <p>

                            <a href="https://wa.me/+917994550834" className='nav-link' target='_blank'> <i class="fa-solid fa-brands fa-whatsapp me-2 fa-lg"></i>  +91 7994550834</a>


                        </p>

                        <p>

                            <a className='nav-link' target='_blank'> <i class="fa-solid fa-phone me-2"></i>0495 485 5060</a>


                        </p>

                        <p>

                            <a href="mailto:support@mocs.in" className='nav-link' target='_blank'><i class="fa-solid fa-envelope me-2"></i> support@mocs.in</a>


                        </p>


                    </div>



                    {/* Contact Form */}
                    <div className='col-md-6 margin-get'>

                        <h3>Get In Touch</h3>

                        <form onSubmit={(e) => { e.preventDefault() }} className='pt-3'>


                            <input type="text" className='form-control mb-4' placeholder='Name' />


                            <input type="text" className='form-control mb-4' placeholder='Email' />


                            <input type="text" className='form-control mb-4' placeholder='Phone' />


                            <input type="text" className='form-control mb-4' placeholder='Subject' />


                            <textarea name="" placeholder='Your Message' className='form-control' id=""></textarea>

                            <button type='submit' className='btn btn-dark w-50 mt-4'>Send</button>


                        </form>


                    </div>


                </div>



                <div className='map pt-5'>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7427800999853!2d75.76253347481273!3d11.280308888900743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65ed9e93a1e13%3A0x4462c47b759273e4!2sMOCS%20Foot%20Care!5e0!3m2!1sen!2sin!4v1724831345592!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


                </div>


            </section>








        </>





    )







}

export default ContactUs