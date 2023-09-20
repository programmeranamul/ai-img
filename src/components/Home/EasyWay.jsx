import React from 'react'
import img1 from "../../images/easy-1.png"
import img2 from "../../images/easy-2.png"
import img3 from "../../images/easy-3.png"
import { Link } from 'react-router-dom'

function EasyWay() {
    return (
        <div className='pt-[50px] sm:pt-[70px] lg:pt-[120px] pb-[40px] md:pb-[80px] lg:pb-[120px]  bg-[#111111]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center gap-x-[130px] gap-y-[30px]'>
                    <div className='flex gap-x-[15px]  w-full lg:w-[50%]'>
                        <div className='w-[60%]'>
                            <img className='w-full' src={img1} alt='' />
                        </div>
                        <div className='flex flex-col gap-y-[20px] w-[40%]'>
                            <img src={img2} alt='' />
                            <img src={img3} alt='' />
                        </div>
                    </div>

                    <div className='w-full lg:w-[50%]'>
                        <h5 className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Welcome</h5>
                        <h2 className='text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]'>Easy ways to use AI tools, and tools to build AI.</h2>
                        <p className='text-[#DADADA] mt-[15px] mb-[25px] text-[16px]'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <div>
                            <Link to="/" className='border-1 inline-flex h-[46px] w-[175px] p-[2px] rounded-full   border-gradient'>
                                <div className='z-[999] w-full h-full flex items-center justify-center'>
                                    <span className='text-transparent  inline-block bg-clip-text webkit-text linear-3 font-bold text-[16px]'>More about us</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EasyWay