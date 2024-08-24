import React from 'react'
import Slider from '../Components/Slider'
import Hero from '../Components/Hero'
import HeroTwo from '../Components/HeroTwo'
import HeroThree from '../Components/HeroThree'


function Landing() {


    return (


        <>


            {/* Slider */}
            <div className='w-100 bg-both'>

                <Slider />

            </div>

            {/* Hero1 */}
            <div className='w-100 bg-both'>

                <Hero />

            </div>


            {/* Hero2 */}
            <div className='w-100 bg-both'>

                <HeroTwo />

            </div>


            {/* Hero3 */}
            <div className='w-100 bg-both'>

                <HeroThree />

            </div>





        </>



    )






}

export default Landing