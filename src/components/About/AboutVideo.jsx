import React from 'react'
import videoThmb from "../../images/home-video.png"
import playIcon from "../../images/Play Button.png"

function AboutVideo() {
  return (
    <div className="bg-[#111111] relative">
            <div className=''>
                <div className='container pt-[40px] md:pt-[80px]'>
                    <div>
                        <div>
                            <div className='text-center mb-[48px]'>
                                <h5 class="text-transparent uppercase text-[#CCFF02] text-[14px] font-semibold ">Welcome</h5>
                                <h2 class="text-[30px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Crafted with quality <span className='sm:block'>and creativity.</span></h2>
                            </div>
                        </div>

                        <div>
                            <div className='max-w-[950px] mx-auto relative'>
                                <img src={videoThmb} alt='' />
                                <div className='bg-[#E2E2E2] w-[70px] absolute top-[45%] left-[45%] rounded-full block cursor-pointer h-[70px]'>
                                    <img className=' ' src={playIcon} alt='' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
  )
}

export default AboutVideo