import React, { useState, useEffect } from 'react'
import Header from '../components/common/Header'
import { FaSearch } from "react-icons/fa";
import blogBannerImg from "../images/blog/blog-banner.png"
import rightArrow from "../images/iocn/arrow-right.png"
import Blogs from '../components/Blog/Blogs';
import Footer from '../components/common/Footer';
import axios from "./../components/axiosConfig"
import { toast } from "react-toastify";
import FeatureBlog from '../components/Blog/FeatureBlog';

function BlogPage() {

    const [allBlog, setAllBlog] = useState([])
    const [loading, setLoading] = useState(false)



    const getAllBlog = async () => {
        setLoading(true)
        try {
            const res = await axios.get("/api/v1/all-post")
            setLoading(false)
            console.log(res.data)
            setAllBlog(res?.data || [])
        } catch (e) {
            setLoading(false)
            return toast.error("Reload the page.");
        }
    }





    useEffect(() => { getAllBlog() }, [])


    return (
        <>
            <div className='bg-[#111]'>
                <div className='container'>
                    <Header />
                </div>
                {
                    loading ? <div className='h-[50vh] flex justify-center pt-[30px]'>
                        <p className='text-white'>Loading</p>
                    </div> : <>
                       <FeatureBlog blog={allBlog[0]}/>


                        <Blogs allBlog= {allBlog}/>
                    </>
                }
                <Footer />
            </div >
        </>
    )
}

export default BlogPage