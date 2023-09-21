import React from 'react'
import AboutPageHero from '../components/About/AboutPageHero'
import Strength from '../components/About/Strength'
import AIImgTextSlider from '../components/Home/AIImgTextSlider'
import AboutVideo from '../components/About/AboutVideo'
import WorkStateMent from '../components/Home/WorkStateMent'
import AIImgSlider from '../components/Home/AIImgSlider'
import Quotes from '../components/About/Quotes'
import Brands from '../components/About/Brands'
import Subscribe from '../components/common/Subscribe'
import ImgSlider from '../components/common/ImgSlider'
import Footer from '../components/common/Footer'

function AboutPage() {
    return (
        <>
            <AboutPageHero />
            <Strength />
            <AIImgTextSlider />
            <AboutVideo />
            <WorkStateMent />
           <div className='pt-[40px] md:pt-[80px] lg:pt-[120px] bg-[#111111] '>
           <AIImgSlider />
           </div>
           <Quotes />
           <Brands />
           <Subscribe />
           <ImgSlider />
           <Footer />

        </>
    )
}

export default AboutPage