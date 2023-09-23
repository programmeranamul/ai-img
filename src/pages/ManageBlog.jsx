import React, { useState, useEffect } from 'react'
import axios from "../components/axiosConfig"
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Header from '../components/common/Header';
import SingleBlogForManagePage from '../components/ManageBlog/SingleBlogForManagePage';

function ManageBlog() {

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
        <div className='bg-[#111] h-[100%] min-h-[100vh] '>
            <div className='container'>
                <Header />
                <div className='pb-[30px] pt-[20px]'>
                    <h2 className='text-white border-b mb-[15px] text-[25px] md:text-[30px] font-bold '>Manage Your Blog</h2>
                    <div>
                        {allBlog.length > 0 ? <div>
                            {
                                allBlog.map((el, i) => <SingleBlogForManagePage key={i} el={el} getAllBlog={getAllBlog}  />)
                            }

                        </div> : <div><p className='text-white font-semibold'>No Blog Found</p></div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ManageBlog