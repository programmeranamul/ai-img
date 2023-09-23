import React, { useState } from 'react'
import banner from "../images/blog/blog-details-banner.png"
import clanderIcon from "../images/iocn/calendar.png"
import shearIcon from "../images/iocn/share.png"
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import axios from './../components/axiosConfig'
import { toast } from "react-toastify";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function BlogDetails() {

    const [loading, setLoading] = useState(false)
    const [blog, setBlog] = useState(null)

    // /api/v1/blog/:id

    const { id } = useParams();



    const getBlog = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`/api/v1/blog/${id}`)
            setLoading(false)
            console.log(res.data)
            setBlog(res.data)
        } catch (e) {
            setBlog(null)
            return toast.error("Blog not found!");
        }
    }

    useEffect(() => {
        getBlog()

    }, [])

    return (
        <div className='bg-[#111]'>
            <div >
                <div className='blog-details-banner pb-[230px]' style={{ backgroundImage: `url(${blog?.banner})` }}>
                    <Header />
                </div>


                {
                    loading ? <div className="bg-[#111] translate-y-[-150px]">
                        <p className="text-center text-white font-semibold">Loading. . .</p>
                    </div> :<div className='bg-[#111111]'>
                    <div className='container'>
                        <div className='bg-[#212121] translate-y-[-150px] px-[25px] sm:px-[50px] lg:px-[100px] py-[25px] sm:py-[30px] lg:py-[60px] rounded-[15px]'>

                            <div className="inline-block bg-[#3F3B3B] px-[20px] rounded-[30px] py-[5px] mb-[10px] text-[14px] leading-[22px] font-semibold text-white">TXAA</div>

                            <h2 class="text-[30px] md:text-[40px] leading-[1.2] md:leading-[52px] font-bold text-white mb-[7px] tracking-[-0.4px]">{blog?.blogTitle}</h2>
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
                            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />

                        </div>


                    </div>

                </div>
               }
                

            </div>

            <Footer />


        </div>
    )
}

export default BlogDetails