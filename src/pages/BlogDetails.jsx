import React from 'react'
import banner from "../images/blog/blog-details-banner.png"
import clanderIcon from "../images/iocn/calendar.png"
import shearIcon from "../images/iocn/share.png"
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

function BlogDetails() {
    return (
        <div className='bg-[#111]'>
        <div >
        <div className='blog-details-banner pb-[230px]' style={{ backgroundImage: `url(${banner})` }}>
        <Header />
        </div>

        <div className='bg-[#111111]'>
            <div className='container'>
                <div className='bg-[#212121] translate-y-[-150px] px-[25px] sm:px-[50px] lg:px-[100px] py-[25px] sm:py-[30px] lg:py-[60px] rounded-[15px]'>

                    <div className="inline-block bg-[#3F3B3B] px-[20px] rounded-[30px] py-[5px] mb-[10px] text-[14px] leading-[22px] font-semibold text-white">TXAA</div>

                    <h2 class="text-[30px] md:text-[40px] leading-[1.2] md:leading-[52px] font-bold text-white mb-[7px] tracking-[-0.4px]">Exploring the Power of AI Image Generator Tools</h2>
                    <div className='flex items-center gap-x-[20px]'>
                        <div className='flex item-center gap-x-[8px]'>
                            <img className='w-[24px]' src={clanderIcon} alt='' />
                            <span className='text-[18px] text-[#C4C4C4]'>Today 11:43pm</span>
                        </div>
                        <div className='flex item-center gap-x-[8px]'>
                            <img className='w-[24px]' src={shearIcon} alt='' />
                            <span className='text-[18px] text-[#C4C4C4]'>Share</span>
                        </div>
                    </div>

                </div>
                <div className='blog-d translate-y-[-100px] '>
                    <h3 >About the position</h3>

                    <p>Met, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>
                    <p>Met, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.</p>

                </div>


            </div>

        </div>

    </div>

    <Footer />
            

        </div>
    )
}

export default BlogDetails