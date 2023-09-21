import React from 'react'
import quoteIcon from "../../images/iocn/quote.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function Quotes() {

    const data = [
        {
            text: "It was clear that he has a lot of experience in stewarding social media accounts. His feedback and advice will most definitely help our organization.",
            name: "Gabe Oswald",
            des: "Lead Designers @Nike"
        },
        {
            text: "It was clear that he has a lot of experience in stewarding social media accounts. His feedback and advice will most definitely help our organization.",
            name: "Gabe Oswald",
            des: "Lead Designers @Nike"
        },
        {
            text: "It was clear that he has a lot of experience in stewarding social media accounts. His feedback and advice will most definitely help our organization.",
            name: "Gabe Oswald",
            des: "Lead Designers @Nike"
        },
    ]

    return (
        <div className='bg-[#111111] pt-[50px] md:pt-[120px] pb-[60px]'>
            <div className='container'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-[30%] border-b md:border-r border-[#ffffff4d]'>
                        <img className='mr-auto md:mr-[65px] ml-auto' src={quoteIcon} alt='' />
                    </div>
                    <div className='w-full md:w-[70%] pt-[30px] md:pt-0 md:ml-[65px]'>
                        <div>

                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper qutslider">
                                {
                                    data.map((el, i) => <SwiperSlide key={i}>
                                        <div>
                                            <h3 class="text-white font-bold leading-[1.2] md:leading-[38px] text-[25px] md:text-[30px] mb-[25px]">“{el.text}"</h3>


                                            <p className='text-[16px] text-white'><span className='text-[20px] font-bold'>- {el.name}</span> {el.des}</p>
                                        </div>
                                    </SwiperSlide>)
                                }


                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes