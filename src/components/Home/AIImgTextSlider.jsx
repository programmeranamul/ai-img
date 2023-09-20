import React from 'react'
import star from "../../images/star.png"
import Marquee from "react-fast-marquee";

const sliderText = ["AI IMAGE GENERATE", "AI IMAGE GENERATE", "AI IMAGE GENERATE", "AI IMAGE GENERATE"]


function AIImgTextSlider() {
    return (
        <div className='bg-[#111111]'>
            <Marquee>
                {
                    sliderText.map((el, i) => <div key={i} className='flex mx-[15px] items-center gap-x-[10px] whitespace-nowrap'><img className='w-[30px] md:w-[60px] lg:w-[80px] h-[30px] md:h-[60px] lg:h-[80px]' src={star} alt='' /> <span className='text-[40px] md:text-[70px] lg:text-[100px] outline-text-1'>{el}</span></div>)
                }
            </Marquee>
        </div>
    )
}

export default AIImgTextSlider