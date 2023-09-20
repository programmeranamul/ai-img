import React from 'react'
import logo from "../../images/logo.PNG"
import { Link } from 'react-router-dom'

const menuList = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About",
        link: "/"
    },
    {
        text: "Portfolio",
        link: "/"
    },
]


const resources = [
    {
        text: "ARTICLELS",
        link: "/"
    },
    {
        text: "VIDEOS",
        link: "/"
    },
    {
        text: "BLOG",
        link: "/"
    },
]


const contact = [

    "+784549 4981 00",
    "+8845 0100 211"
]

const social = [
    {
        name: "TWITTER",
        link: "/"
    },
    {
        name: "INSTAGRAM",
        link: "/"
    },
    {
        name: "FACEBOOK",
        link: "/"
    },
    {
        name: "BEHANCE",
        link: "/"
    },
]


function Footer() {
    return (
        <div className='bg-[#212121] pt-[50px] '>
            <div className='container'>
                <div className='flex flex-col lg:flex-row '>
                    <div className='w-full lg:w-[40%] flex justify-center lg:justify-start'>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='text-center lg:text-left mb-[30px]'>
                            <p ><span className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Want to talk us? Say hi</span> <span>✋</span></p>
                            <h3 className='text-[30px] lg:text-[40px] font-bold leading-[1.3] lg:leading-[52px] tracking-[-0.4px] text-white border-b border-[#ffffff4d] pb-[15px]'>hello@zex.ai</h3>
                        </div>
                        <div className='grid gap-y-[20px] grid-cols-1 sm:grid-cols-4'>
                            <div className='text-center sm:text-left'>
                                <p className='text-[#C4C4C4] text-[17px] leading-[30px] mb-[12px] '>Menu</p>
                                {menuList.map((el, i) => <Link className='text-[16px] leading-[26px] font-semibold text-white block mt-[6px]' key={i} to={el.link}>{el.text}</Link>)}
                            </div>
                            <div className='text-center sm:text-left'>
                                <p className='text-[#C4C4C4] text-[17px] leading-[30px] mb-[12px] '>Resources</p>
                                {resources.map((el, i) => <Link className='text-[16px] leading-[26px] font-semibold text-white block mt-[6px]' key={i} to={el.link}>{el.text}</Link>)}
                            </div>
                            <div className='text-center sm:text-left'>
                                <p className='text-[#C4C4C4] text-[17px] leading-[30px] mb-[12px] '>Contact</p>
                                {contact.map((el, i) => <p className='text-[16px] leading-[26px] font-semibold text-white block mt-[6px]' key={i} >{el}</p>)}
                            </div>

                            <div className='text-center sm:text-left'>
                                <p className='text-[#C4C4C4] text-[17px] leading-[30px] mb-[12px] '>Social</p>
                                {social.map((el, i) => <Link className='text-[16px] leading-[26px] font-semibold text-white block mt-[6px]' key={i} to={el.link}>{el.name}</Link>)}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex justify-between border-t border-[#ffffff4d] mt-[25px] flex-col sm:flex-row gap-y-[10px] items-center py-[10px]'>
                    <div className='order-2 sm:order-1'>
                        <p className='text-[#DADADA] text-[16px] leading-[26px]'>©2023 Zex. All Right Reserved.</p>
                    </div>
                    <div className='text-[#DADADA] order-1 sm:order-2'>
                        <Link to="/">PRIVACY</Link> - <Link to="/">TERMS</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer