import React from 'react'
import supportIcon from "../../images/iocn/support-icon.png"
import expertIcon from "../../images/iocn/expert-icon.png"
import possibilitcesIcon from "../../images/iocn/possibilitces-icon.png"
import tecnologyIcon from "../../images/iocn/tecnology-icon.png"

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

function YourDream() {
    return (
        <div className='bg-[#111111] pt-[120px] pb-[65px]'>
            <div className='container'>
                <div className='text-center mb-[48px]'>
                    <h5 className="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">FEATURES</h5>
                    <h2 className="text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Create your dream with Ai</h2>
                </div>
                <div className='grid grid-cols-4 gap-x-[30px]'>
                    {
                        data.map((el, i) => <div key={i}>
                            <div className={`px-[30px] py-[48px] ${el.down? "mt-[40px]" : ""} mborder-2 relative`}>
                                <div className='z-[9] relative'>
                                <div className='mb-[60px]'>
                                    <img src={el.icon} alt={el.title} />
                                </div>
                                <div>
                                    <h3 className='text-white text-[30px] mb-[20px] leading-[38px] font-bold'>{el.title}</h3>
                                    <p className='text-[#F5F5F5] leading-[26px] text-[16px]'>{el.text}</p>
                                </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default YourDream