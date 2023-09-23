import React from 'react'
import Header from '../common/Header'
import heroImg from "../../images/contact/contact-hero.png"
import downIcon from "../../images/contact/contact-down-1.png"
import downIcon1 from "../../images/contact/contact-down-arrow.png"

function ContactHero() {
    return (
        <div className='bg-[#111]'>
            <div className='container'>
                <Header />

                <div className='pt-[30px] md:pt-[80px] pb-[50px] md:pb-[90px] '>
                    <div className='flex flex-col md:flex-row gap-x-[30px] gap-y-[40px] lg:gap-x-[130px] items-center '>
                        <div className='w-full md:w-[50%] lg:pl-[80px]'>
                            <img src={heroImg} alt='' className='w-full rounded-[15px]' />
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <div className='pb-[60px]'>
                                <div className='bg-[#212121]  relative rounded-[30px] px-[35px] py-[15px] inline-block'>
                                    <div className='text-transparent text-[18px] md:text-[22px] leading-[1.2] bg-clip-text linear-2 webkit-text'>
                                        +1(800)123-8946
                                    </div>

                                    <div className='absolute bottom-[-100%] left-[40%]'>
                                        <img src={downIcon} alt='' />
                                    </div>

                                </div>
                            </div>
                            <div className='pb-[60px]'>
                                <div className='bg-[#212121] relative rounded-[30px] px-[35px] py-[15px] inline-block'>
                                    <div className='text-transparent text-[18px] md:text-[22px] leading-[1.2] bg-clip-text linear-2 webkit-text'>
                                        hello@zex.com
                                    </div>

                                    <div className='absolute bottom-[-100%] left-[40%]'>
                                        <img src={downIcon1} alt='' />
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='bg-[#212121] relative rounded-[30px] px-[35px] py-[15px] inline-block'>
                                    <div className='text-transparent text-[18px] md:text-[22px] leading-[1.2] bg-clip-text linear-2 webkit-text'>
                                        15th street, Office 478 Berlin,<span className='md:block'> De81564</span>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactHero