import React from 'react'
import rocketIcon from "../../images/iocn/rocket.png"

function Subscribe() {
    return (
        <div className='bg-[#111111]'>
            <div className='container'>
                <div className='py-[80px] px-[100px] linear-4 rounded-[15px]'>
                    <div className='flex gap-x-[30px] items-center'>
                        <div className='w-[50%]'>
                            <p className='text-[14px] leading-[22px] font-semibold text-[#111111]'>NEWSLETTER SIGNUP</p>
                            <h3 className='text-[48px] text-[#111111] font-bold tracking-[-0.6px] leading-[1.1]'>Subscribe for <span className='block'>the updates!</span></h3>
                        </div>
                        <div className='w-[50%]'>
                            <div>
                                <div className='relative'>
                                    <input placeholder='Enter Your Email' className='border-b border-[#111111] w-full outline-none py-[8px] text-[#111]  font-semibold pr-[50px] bg-transparent' />
                                    <div className='absolute right-[10px] top-[10px] cursor-pointer'>
                                        <img src={rocketIcon} alt='' />
                                    </div>
                                </div>
                                <div class="flex items-center gap-x-[10px] mt-[15px]">
                                    <input id="checked-checkbox" type="checkbox"  className="w-4 h-4 rounded-[15px] text-blue-600 bg-gray-100 border-gray-300 " />
                                        <label for="checked-checkbox" className=" text-[#111] cursor-pointer ">I agree to the Privacy Policy.</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe