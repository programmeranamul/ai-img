import React from 'react'
import rightArrow from "../../images/iocn/arrow-right.png"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';


function FeatureBlog({blog}) {
  return (
    <div className='container'>
    <div className='pt-[20px] md:pt-[50px] lg:pt-[70px]'>
        <div className='flex  items-center justify-between mb-[30px]'>
            <div>
                <h1 className='text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]'>Blog</h1>
            </div>

            <div>
                <FaSearch className='text-white text-[25px]' />
            </div>
        </div>

        <div className='flex flex-col md:flex-row gap-y-[30px] items-center gap-x-[30px]'>
            <div className='w-full md:w-[50%]'>
                <img className='rounded-[15px] w-full' src={blog?.banner} alt='' />
            </div>
            <div className='w-full md:w-[50%]'>
                <div>
                    <div className=''>
                        <div className='inline-block bg-[#3F3B3B] px-[20px] rounded-[30px] py-[5px] mb-[10px] text-[14px] leading-[22px] font-semibold text-white'>TXAA</div>

                        <div>
                            <h2 className='text-[30px] md:text-[40px] leading-[1.2] md:leading-[52px] font-bold text-white mb-[7px] tracking-[-0.4px]'>{blog?.blogTitle}</h2>
                            <p className='text-[#DADADA] mb-[10px] text-[16px] leading-[26px]'>{blog?.description}</p>

                            <div className='flex gap-x-[10px] pb-[14px] items-center border-b border-[#ffffff4d]'>
                                <p className='text-[#DADADA] text-[16px] leading-[26px]'>- 2 July 2023 </p> <p className='text-[#DADADA] text-[16px] leading-[26px]'> - 0 Comments</p>
                            </div>

                            <div className='mt-[20px]'>

                                <Link to={`/blog/${blog?._id}`} className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Read More <img className='inline-block' src={rightArrow} alt='' /></Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default FeatureBlog