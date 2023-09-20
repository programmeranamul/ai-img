import React from 'react'
import img1 from "../../images/ai-slider-img1.png"
import img2 from "../../images/ai-slider-img1.png"
import img3 from "../../images/ai-slider-img1.png"
import img4 from "../../images/ai-slider-img1.png"
import img5 from "../../images/ai-slider-img1.png"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode } from 'swiper/modules';



const data = [
    {
        imgSrc: img1,
        title: "Stars and Planets ",
        text: "ILLUSTRATION"
    },
    {
        imgSrc: img2,
        title: "Stars and Planets ",
        text: "ILLUSTRATION"
    },
    {
        imgSrc: img3,
        title: "Stars and Planets ",
        text: "ILLUSTRATION"
    },
    {
        imgSrc: img4,
        title: "Stars and Planets ",
        text: "ILLUSTRATION"
    },

]
// DADADA

function AIImgSlider() {
    return (
        <div className='bg-[#111111]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center '>
                    <div className='w-full lg:w-[35%]'>
                        <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">OUR PORTFOLIO</h5>
                        <h2 class="text-[35px] mb-[15px] lg:mb-0 lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">AI images</h2>
                    </div>
                    <div className='w-full lg:w-[35%] mb-[20px] lg:mb-0'>
                        <p class="text-[#DADADA] text-[16px] ">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    </div>

                    <div className='w-full lg:w-[30%] lg:text-right'>
                        <Link to='/' class="border-1 inline-flex h-[46px] w-[175px] p-[2px] rounded-full   border-gradient" >
                            <div class="z-[999] w-full h-full flex items-center justify-center">
                                <span class="text-transparent  inline-block bg-clip-text webkit-text linear-3 font-bold text-[16px]">View all</span>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='mt-[48px]'>

                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        modules={[FreeMode,]}
                        className="mySwiper ai-slider"
                    >
                        {
                            data.map((el, i) => <SwiperSlide>

                                <div className={` ${(i + 1) % 2 == 0 ? "mt-[30px] " : ""} `} key={i}>
                                    <div className='relative group cursor-pointer '>
                                        <img src={el.imgSrc} alt={el.title} className='rounded-[16px] ' />

                                        <div className='bg-[#6B6B6B] hidden absolute h-full w-full top-0 left-0 rounded-[16px] px-[20px] py-[30px] duration-300 group-hover:flex items-end'>
                                            <div className=''>
                                                <h5 className='text-[30px] font-bold text-white leading-[38px]'>{el.title} </h5>
                                                <p className='text-[14px] font-semibold leading-[22px] text-white'>{el.text}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>


            </div>
        </div>
    )
}

export default AIImgSlider