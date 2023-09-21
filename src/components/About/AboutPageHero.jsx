import React from 'react'
import Header from '../common/Header'

import img1 from "../../images/about/about-hero-1.png"
import img2 from "../../images/about/about-hero-2.png"

function AboutPageHero() {
    return (
        <>
            <div className="bg-[#111111]  bg-cover relative pb-[65px]   overflow-hidden">
                <div className='container'>
                    <Header />

                    <div className='pt-[40px] md:pt-[70px]'>

                        <div className='text-center mb-[30px]'>
                            <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text mb-[15px]">Welcome</h5>
                            <h2 class="text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Easy ways to use AI tools,
                                <span className='sm:block'>and tools to build AI.</span></h2>
                            <p class="text-[#DADADA] mt-[15px] mb-[25px] text-[16px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                <span className='sm:block'>aspernatur aut odit aut fugit, sed quia</span>.</p>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-x-[20px] gap-y-[25px]'>
                            <div className='w-full sm:w-[40%]'>
                                <img className='rounded-[15px] w-full h-full' src={img1} alt='' />
                            </div>
                            <div className='w-full sm:w-[60%]'>
                                <img className='rounded-[15px] w-full h-full' src={img2} alt='' />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default AboutPageHero