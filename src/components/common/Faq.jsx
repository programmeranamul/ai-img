import React, { useState } from 'react'

import SingleFaq from './SingleFaq'

const data = [
    {
        open:true,
        qus: "What It takes to create an image?",
        ans: "All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.",
    },
    {
        qus: "What's the standard image size?",
        ans: "All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.",
    },
    {
        qus: "Payment methods",
        ans: "All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.",
    },
    {
        qus: "Help and support",
        ans: "All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.",
    },
    {
        qus: "Can I create multiple images at once?",
        ans: "All things starts with a homepage —  Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.",
    },
]



function Faq() {

   
    return (
        <div className='pt-[60px] pb-[60px] bg-[#111111]'>
            <div className='container'>
                <div className='max-w-[950px] mx-auto'>
                <div className='text-center'>
                    <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">FAQ</h5>
                    <h2 class="mb-[30px] lg:mb-[40px] text-[35px]  lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">AI image generator
                        <span className='block'> FAQs</span> </h2>
                </div>
                <div>

                    {
                        data.map((el, i) => <SingleFaq key={i} data={el} />)
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Faq