import React, { useState } from 'react'
import logo from "../../images/logo.PNG"
import menuIcon from "../../images/iocn/menu.svg"
import closeIcon from "../../images/iocn/close.png"


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

function Header() {

    const [mobileMenu, showMobileMenu] = useState(false)

    return (
        <>
            <div className='flex justify-between h-[84px] items-center'>
                <a href='/'><img src={logo} alt="" /></a>
                <div className=' items-center lg:gap-x-[30px] xl:gap-x-[40px] hidden lg:flex'>

                    {pageList.map((el, i) => <a className='text-[14px] text-white font-bold' key={i} href={el.pageUrl}>{el.pageName}</a>)}

                </div>
                <div className='hidden lg:block'>
                    <a className='text-[14px] inline-block mr-5 text-white font-bold' href='/'>Log in</a>
                    <a className='text-[#212121] h-[40px] w-[130px] inline-flex items-center justify-center bg-[#FFFFFF] text-[14px] font-bold rounded-full ' href='/'>Get started</a>
                </div>
                <div className='block lg:hidden'>
                    <img onClick={() => showMobileMenu(true)} src={menuIcon} alt='' className='bg-white' />
                </div>

                <div className={`bg-[#111111] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-[999] ${mobileMenu ? "block lg:hidden" : "hidden"} `}>
                    <div className='px-[20px] pt-[40px] pb-[50px]'>

                        <div className='overflow-y-auto h-full'>
                            <div className='text-right'>
                                <div className='inline-block ml-auto' onClick={() => showMobileMenu(false)}><img src={closeIcon} alt='' /></div>
                            </div>

                            <div className='flex flex-col gap-y-[40px] items-center justify-center'>

                                {pageList.map((el, i) => <a className='text-[14px] text-white font-bold' key={i} href={el.pageUrl}>{el.pageName}</a>)}

                                <a className='text-[14px] inline-block mr-5 text-white font-bold' href='/'>Log in</a>
                                <a className='text-[#212121] h-[40px] w-[130px] inline-flex items-center justify-center bg-[#FFFFFF] text-[14px] font-bold rounded-full ' href='/'>Get started</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header