import React,{useState} from 'react'
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import axios from './../axiosConfig';
import { Link } from 'react-router-dom';




function SingleBlogForManagePage({ el,getAllBlog }) {
    const [deleteLoading, setDeleteLoading] = useState(null)

    const deletBlog = async (b) => {
        setDeleteLoading(b._id)
        try {
            const res = await axios.delete(`/api/v1/delete/${b._id}`)
            getAllBlog()
            setDeleteLoading(null);
            return toast.success("Blog deleted");

        } catch (e) {
            setDeleteLoading(null);
            return toast.error("Try agin !");
        }

    }
    return (
        <div className='flex justify-between items-center border-b px-[10px] py-[15px]'>
            <Link to={`/blog/${el._id}`}  className='w-[90%] text-[20px] font-semibold text-white mb-0'>{el.blogTitle}</Link>
            <div className='w-[10%]'>
                {deleteLoading ? <p className='text-white font-semibold'>Deleting</p> : <MdDelete onClick={() => deletBlog(el)} className='text-white text-[20px] cursor-pointer' />}
            </div>
        </div>
    )
}

export default SingleBlogForManagePage