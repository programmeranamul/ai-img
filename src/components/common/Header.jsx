import React, { useState } from 'react'
import logo from "../../images/logo.PNG"
import menuIcon from "../../images/iocn/menu.png"
import closeIcon from "../../images/iocn/close.png"
import { useContext } from 'react'
import { AuthContext } from '../../App'
import { Link, useNavigate } from 'react-router-dom';


const pageList = [
    {
        pageName: "Home",
        pageUrl: "/"
    },
    {
        pageName: "About",
        pageUrl: "/about"
    },
    {
        pageName: "Services",
        pageUrl: "/services"
    },
    {
        pageName: "Pricing",
        pageUrl: "/pricing"
    },
    {
        pageName: "Team",
        pageUrl: "/team"
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

const adminRoute = [
    {
        pageName: "Manage Blog",
        pageUrl: "/admin/manage-blog"
    },
    {
        pageName: "Create Blog",
        pageUrl: "/admin/create-blog"
    },
]

function Header() {

    const navigate = useNavigate();

    const [mobileMenu, showMobileMenu] = useState(false)
const [showAdminMenu, setShowAdminMenu] = useState(false)

    const { auth, setAuth } = useContext(AuthContext);
    const isAuthenticated = auth === true;

  
const handleLogOut = () => {
    localStorage.clear()    
    setAuth(false)
    navigate('/');
}

    return (
        <>
            <div className='flex justify-between h-[70px] sm:h-[84px] items-center'>
                <a href='/'><img src={logo} alt="" /></a>
                <div className=' items-center lg:gap-x-[30px] xl:gap-x-[40px] hidden lg:flex'>

                    {pageList.map((el, i) => <Link className='text-[14px] text-white font-bold' key={i} to={el.pageUrl}>{el.pageName}</Link>)}

                </div>
                <div className='hidden lg:block'>
                    {
                        isAuthenticated ? <div className='relative' >
                            <h5 onClick={() => setShowAdminMenu(!showAdminMenu)} className='text-[14px] inline-block mr-5 text-white font-bold cursor-pointer mb-0'>Admin</h5>
                            <div  className={`${showAdminMenu ? "hidden lg:block" : "hidden"} absolute w-[200px] h-[150px] bg-[#212121] rounded-[10px] right-0 top-[100%] `}>
                                <div className='py-[20px] px-[30px]'>
                                    {
                                        adminRoute.map((el, i) => <Link to={el.pageUrl} className='text-[14px] mb-4 inline-block mr-5 text-white font-bold'>{el.pageName}</Link>)
                                    }
                                    <button onClick={() => handleLogOut()} className='text-[14px] inline-block mr-5 text-white font-bold'>Log out</button>
                                </div>
                            </div>
                        </div> : <>
                            <Link to="/admin/singin" className='text-[14px] inline-block mr-5 text-white font-bold' >Log in</Link>
                            <Link className='text-[#212121] h-[40px] w-[130px] inline-flex items-center justify-center bg-[#FFFFFF] text-[14px] font-bold rounded-full ' to='/'>Get started</Link>
                        </>
                    }
                </div>
                <div className='block lg:hidden'>
                    <img onClick={() => showMobileMenu(true)} src={menuIcon} alt='' className='' />
                </div>

                <div className={`bg-[#111111] fixed h-full w-full top-0 left-0 right-0 bottom-0 z-[999] ${mobileMenu ? "block lg:hidden" : "hidden"} `}>
                    <div className='px-[20px] pt-[40px] pb-[50px]'>

                        <div className='overflow-y-auto h-full'>
                            <div className='text-right'>
                                <div className='inline-block ml-auto' onClick={() => showMobileMenu(false)}><img src={closeIcon} alt='' /></div>
                            </div>

                            <div className='flex flex-col gap-y-[40px] items-center justify-center'>

                                {pageList.map((el, i) => <Link className='text-[14px] text-white font-bold' key={i} to={el.pageUrl}>{el.pageName}</Link>)}

                                {
                                    isAuthenticated ? <>

                                        {
                                            adminRoute.map((el, i) => <Link to={el.pageUrl} className='text-[14px] inline-block mr-5 text-white font-bold'>{el.pageName}</Link>)
                                        }
                                        <button onClick={() => handleLogOut()} className='text-[14px] inline-block mr-5 text-white font-bold'>Log out</button>
                                    </> : <>
                                        <Link to="/admin/singin" className='text-[14px] inline-block mr-5 text-white font-bold'>Log in</Link>
                                        <Link to="/" className='text-[#212121] h-[40px] w-[130px] inline-flex items-center justify-center bg-[#FFFFFF] text-[14px] font-bold rounded-full ' >Get started</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header