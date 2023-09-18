import React from 'react'
import logo from "./../images/logo.PNG"
import EasyWay from '../components/Home/EasyWay'
import Video from '../components/Home/Video'
import AIImgTextSlider from './../components/Home/AIImgTextSlider';
import WorkStateMent from '../components/Home/WorkStateMent';
import YourDream from '../components/Home/YourDream';
import AIImgSlider from '../components/Home/AIImgSlider';

const pageList = [
    {
        pageName: "Home",
        pageUrl: "/"
    },
    {
        pageName: "About",
        pageUrl: "/"
    },
    {
        pageName: "Services",
        pageUrl: "/"
    },
    {
        pageName: "Pricing",
        pageUrl: "/"
    },
    {
        pageName: "Team",
        pageUrl: "/"
    },
    {
        pageName: "Blog",
        pageUrl: "/"
    },
    {
        pageName: "Contacts",
        pageUrl: "/"
    },
]

const tagList = ["Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "TXAA", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading"]

export default function HomePage() {
    return (

        <>

            <div className="home-hero-bg bg-cover">
                <div className='container'>
                    <div className='flex justify-between h-[84px] items-center'>
                        <a href='/'><img src={logo} alt="" /></a>
                        <div className='flex items-center gap-x-[40px]'>

                            {pageList.map((el, i) => <a className='text-[14px] text-white font-bold' key={i} href={el.pageUrl}>{el.pageName}</a>)}

                        </div>

                        <div>
                            <a className='text-[14px] inline-block mr-5 text-white font-bold' href='/'>Log in</a>
                            <a className='text-[#212121] h-[40px] w-[130px] inline-flex items-center justify-center bg-[#FFFFFF] text-[14px] font-bold rounded-full ' href='/'>Get started</a>
                        </div>
                    </div>

                    <div>
                        <div className='max-w-[917px] mx-auto'>
                            <h1 className='text-[80px] font-bold leading-[94px] tracking-[-1px] text-white text-center'><span className='block'>Generate image</span>
                                <span className='block'>with Zex.ai</span></h1>
                            <p className='text-[18px] mt-[15px] mb-[30px] font-semibold text-white text-center '>Create Anything - AI With No Restrictions.</p>

                            <div className='text-center'>
                                <a href='/' className='text-[#000] inline-flex text-[18px] font-bold linear-1  rounded-full w-[173px] h-[52px] items-center justify-center'>Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='overflow-hidden'>
                <div className='flex bg-[#111111] item-center gap-x-[20px] '>
                    {
                        tagList.map((el, i) => <div className='text-white inline-block px-[15px] rounded-[50px] font-semibold text-[14px] py-[8px] bg-[#212121] whitespace-nowrap' key={i}>{el}</div>)
                    }
                </div>
            </div>
            <EasyWay />
            <AIImgTextSlider />
            <Video />
            <WorkStateMent />
            <YourDream />
            <AIImgSlider />

            <div className='pb-[50px] bg-black'></div>
         

        </>


    )
}
