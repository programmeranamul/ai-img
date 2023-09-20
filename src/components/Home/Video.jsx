import React from 'react'
import videoThmb from "./../../images/home-video.png"
import playIcon from "../../images/Play Button.png"
import starIcon from "../../images/star.png"


function Video() {
    return (
        <div className="bg-[#111111] relative">
            <div className='absolute block left-[-100px] bottom-[50px]'>
                <img className=' w-[200px]' src={starIcon} alt='' />
            </div>
            <div className='home-video-bg bg-no-repeat bg-cover'>
                <div className='container pt-[40px] md:pt-[80px]'>
                    <div>
                        <div className='flex flex-col lg:flex-row mb-[30px] lg:mb-[48px] gap-x-[30px] items-center'>
                            <div className='w-full lg:w-[50%]'>
                                <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">Welcome</h5>
                                <h2 class="text-[30px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Crafted with quality and creativity.</h2>
                            </div>
                            <div className='w-full lg:w-[50%]'>
                                <p class="text-[#FAFAFB] text-[16px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
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

export default Video