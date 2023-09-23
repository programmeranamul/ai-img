import React from 'react'
import img from "../../images/contact/get-in-touch.png"

function GetInTouch() {
    return (
        <div className='bg-[#111]'>
            <div className='container'>
                <div className='bg-[#212121]'>
                    <div className='flex flex-col lg:flex-row gap-y-[30px] gap-x-[30px] px-[30px] lg:px-[100px] py-[40px] lg:py-[80px] items-center mborder-2 relative overflow-hidden'>
                        <div className='w-full lg:w-[50%] relative z-10'>
                            <div>
                                <h2 className='text-[35px] mb-[20px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]'>
                                    Get In Touch
                                </h2>
                                <div>
                                    <img src={img} alt='' className='rounded-[15px]' />
                                </div>
                            </div>
                        </div>

                        <div className='w-full lg:w-[50%] relative z-10'>
                            <div className='flex flex-col gap-y-[20px]'>
                                <input type='text' placeholder='Name' className='bg-[#111111] text-[18px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[23px] px-[25px]' />
                                <input type='text' placeholder='Phone' className='bg-[#111111] text-[18px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[23px] px-[25px]' />
                                <input type='text' placeholder='Email' className='bg-[#111111] text-[18px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[23px] px-[25px]' />

                                <textarea placeholder='Type your Message' className='bg-[#111111] text-[18px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[23px] px-[25px]' rows={6} >

                                </textarea>

                                <div>
                                    <button className="text-[#000] inline-flex text-[18px] font-bold linear-1  rounded-full w-[173px] h-[52px] items-center justify-center">Get in touch</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch