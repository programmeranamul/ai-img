import React from 'react'
import Header from '../components/common/Header'
import { FaSearch } from "react-icons/fa";
import blogBannerImg from "../images/blog/blog-banner.png"
import rightArrow from "../images/iocn/arrow-right.png"
import Blogs from '../components/Blog/Blogs';
import Footer from '../components/common/Footer';

function BlogPage() {
    return (
        <>
            <div className='bg-[#111]'>
                <div className='container'>
                    <Header />


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
                                <img className='rounded-[15px] w-full' src={blogBannerImg} alt='' />
                            </div>
                            <div className='w-full md:w-[50%]'>
                                <div>
                                    <div className=''>
                                        <div className='inline-block bg-[#3F3B3B] px-[20px] rounded-[30px] py-[5px] mb-[10px] text-[14px] leading-[22px] font-semibold text-white'>TXAA</div>

                                        <div>
                                            <h2 className='text-[30px] md:text-[40px] leading-[1.2] md:leading-[52px] font-bold text-white mb-[7px] tracking-[-0.4px]'>Top successful AI chatbots tool 2023</h2>
                                            <p className='text-[#DADADA] mb-[10px] text-[16px] leading-[26px]'>Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>

                                            <div className='flex gap-x-[10px] pb-[14px] items-center border-b border-[#ffffff4d]'>
                                                <p className='text-[#DADADA] text-[16px] leading-[26px]'>- 2 July 2023 </p> <p className='text-[#DADADA] text-[16px] leading-[26px]'> - 0 Comments</p>
                                            </div>

                                            <div className='mt-[20px]'>

                                                <a href='/' className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Read More <img className='inline-block' src={rightArrow} alt='' /></a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>





            </div >

            <Blogs />
            <Footer />
        </>
    )
}

export default BlogPage