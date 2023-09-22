import React, { useState } from 'react'
import gradientIcon from "../../images/iocn/gradoent-check.png"
import icon from "../../images/iocn/Check.png"

function Pricing() {

    const [checked, setChecked] = useState(false)


    const priceData = [
        {
            type: "Basic",
            rate: "Free",
            service: ["10,000 Monthly Word Limit", "Cloud storage", "Free templates", "5GB bankdwidth", "10 downloads"],
            buttonText: "Start Free Trial"
        },
        {
            type: "Pro",
            rate: "44",
            service: ["10,000 Monthly Word Limit", "Cloud storage", "Free templates", "5GB bankdwidth", "10 downloads"],
            buttonText: "Get Started"
        },
        {
            type: "Unlimited",
            rate: "48",
            service: ["10,000 Monthly Word Limit", "Cloud storage", "Free templates", "5GB bankdwidth", "10 downloads"],
            buttonText: "Get Started"
        },
    ]


    return (
        <div className='bg-[#111111] '>
            <div className='container'>
                <div className='mb-[48px]'>
                    <h2 className="text-[30px] md:text-[35px] mb-[20px] text-center lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Pricing</h2>

                    <div className='flex gap-x-[20px] justify-center items-center'>
                        <span className='text-white text-[20px] font-bold leading-[32px]'>Pay Monthly</span>
                        <div class="relative" onClick={() => setChecked(!checked)}>
                            <input
                                type="checkbox"
                                className="hidden"
                            />
                            <label
                                className="block w-12 h-6  bg-[#3F3B3B] rounded-full cursor-pointer"
                            >
                                <span
                                    className={`block w-6 h-6 bg-[#CCFF02] rounded-full transform ${checked ? "translate-x-[100%] " : "translate-x-0"} transition-transform duration-300 ease-in-out`}
                                ></span>
                            </label>
                        </div>
                        <span className='text-white text-[20px] font-bold leading-[32px]'>Pay Yearly</span>
                    </div>

                </div>


                <div className='grid md:grid-cols-3 gap-x-[30px] gap-y-[30px]'>

                    {
                        priceData.map((el, i) => <div className={`  ${el.type == "Pro" ? "linear-4" : "bg-[#212121]"}  rounded-[15px] px-[30px] py-[48px]`} key={i}>

                            <div>
                                <h5 className={`text-[16px]   font-semibold ${el.type == "Pro" ? "text-[#111111]" : "text-white"}`}>{el.type}</h5>
                                <p className={`mb-[13px] md:mb-[18px] text-[16px] leading-[26px] ${el.type == "Pro" ? "text-[#3F3B3B]" : "text-[#807E7E]"} `}>
                                    <span className={`text-[30px] md:text-[40px] leading-[52px] font-bold tracking-[-0.4px] ${el.type == "Pro" ? "text-[#111111]" : "text-white"} `}>{el.type == "Basic" ? "" : "$"}{el.rate} </span> Per month</p>

                                <div className='mb-[48px]'>

                                    {
                                        el.service.map((sr, j) => <div className={`text-[18px] leading-[30px]  flex items-center gap-x-[10px] mb-[15px] ${el.type == "Pro" ? "text-[#111111]" : "text-white"}`} key={j}><img src={el.type == "Pro" ? icon : gradientIcon} alt='' /> <span>{sr}</span></div>)
                                    }
                                </div>

                                <div>
                                    <a className={` inline-flex h-[46px] px-[40px] p-[2px] rounded-full    ${el.type == "Pro" ? "border border-[#111] " :"border-gradient border-1"}`} href="/">
                                        <div className="z-[999] w-full h-full flex items-center justify-center">
                                            <span className={` inline-block  font-bold text-[16px] ${el.type == "Pro" ? "bg-transparent text-[#111]" : "bg-clip-text webkit-text linear-3 text-transparent "}`}>{el.type == "Basic" ? "Start Free Trial" : "Get Started"}  </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default Pricing