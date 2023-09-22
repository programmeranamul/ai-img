import React from 'react'
import supportIcon from "../../images/iocn/support-icon.png"
import expertIcon from "../../images/iocn/expert-icon.png"
import possibilitcesIcon from "../../images/iocn/possibilitces-icon.png"
import tecnologyIcon from "../../images/iocn/tecnology-icon.png"
import Header from '../common/Header'


const data = [
    {
        down: false,
        icon: supportIcon,
        title: "Excellent        support",
        text: "Marketing execution is the process of carrying out the."
    },
    {
        down: true,
        icon: expertIcon,
        title: "Reliable experts",
        text: "Marketing execution is the process of carrying out the."
    },
    {
        down: false,
        icon: possibilitcesIcon,
        title: "Endless possibilities",
        text: "Marketing execution is the process of carrying out the."
    },
    {
        down: true,
        icon: tecnologyIcon,
        title: "Unique technology",
        text: "Marketing execution is the process of carrying out the."
    },
]

function ServiceHero() {
    return (
        <>
            <div className='bg-[#111111] '>
                <div className='container'>
                    <Header />

                    <div className='pt-[50px] md:pt-[80px] lg:pt-[120px] pb-[30px] md:pb-[70px] lg:pb-[120px]'>

                        <div className='text-center mb-[38px] lg:mb-[70px]'>
                            <h2 className="text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Explore the power of
                                <span className='md:block'> AI tools services</span></h2>
                        </div>
                        <div className='grid sm:grid-cols-1z lg:grid-cols-4 gap-x-[30px] gap-y-[40px]'>
                            {
                                data.map((el, i) => <div key={i}>
                                    <div className={`pl:px-[25px] xl:px-[30px] pb-[40px] lg:pb-[0px] h-full border-[#ffffff4d]  ${i == data.length - 1 ? " border-none" : "border-b lg:border-b-0 lg:border-r"}`}>
                                        <div className='z-[9] relative'>
                                            <div className='mb-[10px] lg:mb-[60px]'>
                                                <img src={el.icon} alt={el.title} className='mx-auto lg:mx-0' />
                                            </div>
                                            <div className='text-center lg:text-left'>
                                                <h3 className='text-white text-[25px] md:text-[30px] mb-[10px] md:mb-[20px] leading-[1.1] md:leading-[38px] font-bold'>{el.title}</h3>
                                                <p className='text-[#F5F5F5] leading-[26px] text-[16px]'>{el.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>




                </div>
            </div>
        </>
    )
}

export default ServiceHero