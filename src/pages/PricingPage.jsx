import React from 'react'
import Pricing from '../components/common/Pricing'
import Header from '../components/common/Header'
import AIImgTextSlider from '../components/Home/AIImgTextSlider'
import Faq from '../components/common/Faq'
import Subscribe from '../components/common/Subscribe'
import Footer from '../components/common/Footer'

function PricingPage() {
  return (
    <>
      <div className='bg-[#111]'>
        <div className='container'>
          <Header />
        </div>
      </div>

      <div className='pt-[30px] sm:pt-[60px] lg:pt-[120px] bg-[#111] pb-[30px] sm:pb-[60px]'>
        <Pricing />
      </div>

      <AIImgTextSlider />
      <Faq />
      <div className='mt-[-30px] sm:mt-[-80px]'>
      <Subscribe />
    </div>
      <Footer />
    
    </>
  )
}

export default PricingPage