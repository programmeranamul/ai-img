import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import GetInTouch from '../components/Contact/GetInTouch'
import AIImgSlider from '../components/Home/AIImgSlider'
import AIImgTextSlider from '../components/Home/AIImgTextSlider'
import Footer from '../components/common/Footer'

function Contact() {
  return (
    <>
    <ContactHero />
    <GetInTouch />
   <div className='bg-[#111] pt-[30px] pb-[30px]'>
   <AIImgTextSlider />
   </div>
    <Footer />
    </>
  )
}

export default Contact