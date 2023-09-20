import React from 'react'
import { Link } from 'react-router-dom';
import rightArrow from "../../images/iocn/arrow-right.png"

function NewsArticle() {


    const data = [
        {
            title: "Why is the next level art called intelligent?",
            description: "Rapidiously re-engineer 24/365 bandwidth with highly efficient information.",
            link: "/"
        },
        {
            title: "Why is the next level art called intelligent?",
            description: "Rapidiously re-engineer 24/365 bandwidth with highly efficient information.",
            link: "/"
        },
    ]

    return (
        <div className='bg-[#111111] pt-[10px] lg:pt-[60px] pb-[60px]'>
            <div className='container'>
                <div className='flex mb-[30px] lg:mb-[40px] flex-col lg:flex-row justify-between gap-y-[15px] lg:items-center'>
                    <div className=''>
                        <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">FROM OUR BLOG</h5>
                        <h2 class="text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">News & articles</h2>
                    </div>
                    <div className=''>
                        <Link to="/" class="border-1 inline-flex h-[46px] w-[116px] p-[2px] rounded-full   border-gradient" >
                            <div class="z-[999] w-full h-full flex items-center justify-center">
                                <span class="text-transparent  inline-block bg-clip-text webkit-text linear-3 font-bold text-[16px]">View</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[30px] gap-x-[30px]'>
                    {
                        data.map((el, i) => <Link to="/" key={i}><div className='py-[35px] md:py-[72px] px-[30px] md:px-[60px] bg-[#212121] rounded-[15px]'>
                            <h3 className='text-white mb-[12px] font-bold leading-[1.2] md:leading-[38px] text-[25px] md:text-[30px]'>{el.title}</h3>
                            <p className='text-[#DADADA] text-[16px] leading-[26px] mb-[22px]'> {el.description}</p>
                            <p className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Read More <img className='inline-block' src={rightArrow} alt='' /></p>
                        </div> </Link>)
                    }
                </div>


            </div>
        </div>
    )
}

export default NewsArticle