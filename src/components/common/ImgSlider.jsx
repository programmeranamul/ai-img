import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import sliderImg1 from "../../images/img-slider-1.png"
import sliderImg2 from "../../images/img-slider-1.png"
import sliderImg3 from "../../images/img-slider-1.png"
import sliderImg4 from "../../images/img-slider-1.png"
import sliderImg5 from "../../images/img-slider-1.png"
import sliderImg6 from "../../images/img-slider-1.png"
import sliderImg7 from "../../images/img-slider-1.png"
import sliderImg8 from "../../images/img-slider-1.png"
import sliderImg9 from "../../images/img-slider-1.png"
import sliderImg10 from "../../images/img-slider-1.png"
import sliderImg11 from "../../images/img-slider-1.png"


const data = [sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5, sliderImg6, sliderImg7, sliderImg8, sliderImg9, sliderImg10, sliderImg11]

function ImgSlider() {
    return (
        <div className='pt-[40px] md:pt-[60px] pb-[80px] md:pb-[120px] bg-[#111111]'>
            <div>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    freeMode={true}
                    loop={true}
                    modules={[FreeMode,]}
                    className="mySwiper ai-slider"
                >
                    {
                        data.map((el, i) => <SwiperSlide>

                            <div className={` `} key={i}>
                                <div className='relative group cursor-pointer '>
                                    <img src={el} alt="" className='rounded-[16px] ' />
                                </div>


                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default ImgSlider