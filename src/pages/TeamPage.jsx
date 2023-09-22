import React from 'react'
import Header from '../components/common/Header'
import teamImg1 from "../../src/images/team/Team 1.png"
import teamImg2 from "../../src/images/team/Team 1.png"
import teamImg3 from "../../src/images/team/Team 1.png"
import teamImg4 from "../../src/images/team/Team 1.png"
import teamImg5 from "../../src/images/team/Team 1.png"
import teamImg6 from "../../src/images/team/Team 1.png"
import { FaGoogle, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import AIImgTextSlider from '../components/Home/AIImgTextSlider'
import Footer from '../components/common/Footer'

function TeamPage() {

    const data = [
        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg1,
            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },

        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg2,
            middle: true,
            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },
        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg3,
            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },
        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg4,
            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },
        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg5,
            middle: true,

            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },
        {
            name: "John Lewis",
            position: "GAME DEVELOPER",
            img: teamImg6,
            google: "/",
            twitter: "/",
            linkdin: "/",
            pintarest: "/"
        },
    ]

    return (
        <>
        <div className='bg-[#111]'>
            <div className='container'>
                <Header />
                <div className='pt-[50px] sm:pt-[80px] pb-[48px]'>
                    <h1 className='text-[35px] text-center lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]'>Our incredible team is
                        <span className='md:block'> making wonders</span></h1>
                </div>
                <div className='pb-[64px]'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[30px]'>
                        {
                            data.map((el, i) => <div className={`${el.middle? "md:mt-[30px]" :""}`} key={i}>
                                <div className='relative group rounded-[15px] overflow-hidden cursor-pointer'>
                                    <img className='w-full' src={el.img} alt={el.name} />
                                    <div className='absolute hidden  group-hover:flex  bottom-0 left-0  items-end  right-0 top-0 bg-[#6B6B6B]'>
                                        <div className='p-[30px]'>
                                            <div className='flex gap-x-[12px] mb-[10px]'>
                                                <a href={el.facebook} className='inline-flex rounded-[5px] duration-300 group-scoped hover:bg-[#CCFF02] w-[36px] h-[36px] justify-center items-center bg-[#111111]'>
                                                    <FaGoogle className='text-white duration-300 group-scoped-hover:text-[#111111] w-[16px] h-[16px]' />
                                                </a>
                                                <a href={el.facebook} className='inline-flex rounded-[5px] duration-300 group-scoped hover:bg-[#CCFF02] w-[36px] h-[36px] justify-center items-center bg-[#111111]'>
                                                    <FaTwitter className='text-white duration-300 group-scoped-hover:text-[#111111] w-[16px] h-[16px]' />
                                                </a>
                                                <a href={el.facebook} className='inline-flex rounded-[5px] duration-300 group-scoped hover:bg-[#CCFF02] w-[36px] h-[36px] justify-center items-center bg-[#111111]'>
                                                    <FaLinkedinIn className='text-white duration-300 group-scoped-hover:text-[#111111] w-[16px] h-[16px]' />
                                                </a>
                                                <a href={el.facebook} className='inline-flex rounded-[5px] duration-300 group-scoped hover:bg-[#CCFF02] w-[36px] h-[36px] justify-center items-center bg-[#111111]'>
                                                    <FaPinterestP className='text-white duration-300 group-scoped-hover:text-[#111111] w-[16px] h-[16px]' />
                                                </a>
                                            </div>
                                            <h4 className='text-[30px] mb-[10px] text-white leading-[38px] font-bold'>{el.name}</h4>
                                            <p className='text-white text-[14px] leading-[22px] font-semibold'>{el.position}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>

        </div>
       <div className='pb-[30px] bg-[#111]'>
       <AIImgTextSlider  />
       </div>
        <Footer />
        
        </>
    )
}

export default TeamPage