import React from 'react'
import ServiceHero from '../components/Service/ServiceHero'
import AIImgTextSlider from '../components/Home/AIImgTextSlider'
import Pricing from '../components/common/Pricing'
import Faq from '../components/common/Faq'
import Subscribe from '../components/common/Subscribe'
import Footer from '../components/common/Footer'

function ServicePage() {
  return (
    <>
      <ServiceHero />
      <AIImgTextSlider />
      <div className='pt-[30px] sm:pt-[64px] bg-[#111] pb-[30px] sm:pb-[60px]'>
        <Pricing />
      </div>
      <Faq />
      <div className='mt-[-30px] sm:mt-[-60px]'>
        <Subscribe />
      </div>
      <Footer />
    </>
  )
}

export default ServicePage