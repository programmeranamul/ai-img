import React from 'react'
import logo from "./../images/logo.PNG"
import EasyWay from '../components/Home/EasyWay'
import Video from '../components/Home/Video'
import AIImgTextSlider from './../components/Home/AIImgTextSlider';
import WorkStateMent from '../components/Home/WorkStateMent';
import YourDream from '../components/Home/YourDream';
import AIImgSlider from '../components/Home/AIImgSlider';
import Faq from '../components/common/Faq';
import NewsArticle from '../components/Home/NewsArticle';
import Subscribe from '../components/common/Subscribe';
import ImgSlider from '../components/common/ImgSlider';
import Footer from '../components/common/Footer';
import heroimg1 from "../images/hero-img-1.png"
import heroimg2 from "../images/hero-img-1.png"
import heroimg3 from "../images/hero-img-1.png"
import heroimg4 from "../images/hero-img-1.png"
import heroimg5 from "../images/hero-img-1.png"
import heroimg6 from "../images/hero-img-1.png"
import heroimg7 from "../images/hero-img-1.png"
import Header from '../components/common/Header';
import RunningTextTag from '../components/Home/RunningTextTag';





const imgList = [
    {
        imgSrc: heroimg1,
        order: 1,
        marginClass: "mt-[-50px]"

    },
    {
        imgSrc: heroimg2,
        order: 2,
        marginClass: "mt-[-150px]"
    },
    {
        imgSrc: heroimg3,
        order: 3,
        marginClass: "mt-[-50px]"
    },
    {
        imgSrc: heroimg4,
        order: 4,
        marginClass: ""
    },
    {
        imgSrc: heroimg5,
        order: 5,
        marginClass: "mt-[-50px]"
    },
    {
        imgSrc: heroimg6,
        order: 6,
        marginClass: "mt-[-150px]"
    },
    {
        imgSrc: heroimg7,
        order: 7,
        marginClass: "mt-[-50px]"
    },
]

export default function HomePage() {
    return (

        <>
            <div className="home-hero-bg bg-cover relative pb-[350px] md:pb-[350px]  overflow-hidden">
                <div className='container'>
                    <Header />

                    <div className='pt-[30px] sm:pt-[90px]'>
                        <div className='max-w-[917px] mx-auto'>
                            <h1 className='text-[50px] lg:text-[80px] font-bold leading-[1.2] lg:leading-[94px] tracking-[-1px] text-white text-center'><span className='block'>Generate image</span>
                                <span className='block'>with Zex.ai</span></h1>
                            <p className='text-[18px] mt-[15px] mb-[30px] font-semibold text-white text-center '>Create Anything - AI With No Restrictions.</p>

                            <div className='text-center'>
                                <a href='/' className='text-[#000] inline-flex text-[18px] font-bold linear-1  rounded-full w-[173px] h-[52px] items-center justify-center'>Get started</a>
                            </div>
                        </div>
                    </div>
                </div>


                

                <div className='pt-[10px] absolute bottom-[-55px] w-full'>
                <div className='flex  gap-x-[30px] justify-center '>
                    {
                        imgList.map((el, i) => <div key={i} className={`m-flex  ${el.marginClass}`}>
                            <img className=' img-reflection mt-[-30px] ' src={heroimg3} alt='' />
                        </div>)
                    }

                </div>
            </div>

                

                <div className='h-[200px] w-full absolute bottom-0 reflection-overlay'>
                </div>

            </div>
            <RunningTextTag />
            <EasyWay />
            <AIImgTextSlider />
            <Video />
            <WorkStateMent />
            <YourDream />
            <AIImgSlider />
            <Faq />
            <NewsArticle />
            <AIImgTextSlider  />
            <Subscribe />
            <ImgSlider />
            <Footer />



        </>


    )
}
