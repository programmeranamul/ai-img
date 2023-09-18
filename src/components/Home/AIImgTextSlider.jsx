import React from 'react'
import star from "../../images/star.png"

const sliderText = ["AI IMAGE GENERATE", "AI IMAGE GENERATE", "AI IMAGE GENERATE", "AI IMAGE GENERATE"]

 
function AIImgTextSlider() {
    return (
        <div className='bg-[#111111]'>
            <div className='flex items-center gap-x-[100px] overflow-hidden'>
                {
                    sliderText.map((el, i) => <div key={i} className='flex items-center gap-x-[10px] whitespace-nowrap'><img className='w-[80px] h-[80px]' src={star} alt='' /> <span className='text-[100px] outline-text-1'>{el}</span></div>)
                }
            </div>
        </div>
    )
}

export default AIImgTextSlider