import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Header from '../components/common/Header';

import { api } from '../data/BaseApi';
import { toast } from "react-toastify";
import  axios  from './../components/axiosConfig';

function CreateBlog() {

  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [blogTitle, setBlogTitle] = useState("")
  const [description, setDescription] = useState("")
  const [banner, setBanner] = useState("")
  const [heroImg, setHeroImg] = useState("")
  const [loading, setLoading] = useState(false);


  const handlePublish = async (e) => {
    e.preventDefault()
    console.log("ddd")

    if (!content || !blogTitle || !description || !banner || !heroImg) {
      console.log("erroe")
      setLoading(false);
      return
    } else {
      setLoading(true);
      try{
        const createBlog = await axios.post("/api/v1/publish-post", { content, blogTitle, description, banner, heroImg })

        setLoading(false);
        toast.success("Blog published successfully!");


      }catch(e){
        console.log(e)
        setLoading(false);
        toast.error("Faild to publish!");

      }


    }

  }


  return (
    <div className='bg-[#111] min-h-[100vh]'>

      <div className='container '>
        <Header />
        <div className='pt-[50px] pb-[50px]'>

          <h2 className='text-white font-bold text-[25px] md:text-[30px] mb-[30px] '>Create blog here</h2>

          <div className='mb-[20px]'>
            <label className='text-white font-semibold'>
              Blog Title:
              <input type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} placeholder="Blog Title" class="bg-[#212121] text-[16px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[10px] px-[20px] mt-[10px] required" />
            </label>
          </div>
          <div className='mb-[20px]'>
            <label className='text-white font-semibold'>
              Blog Banner Link:
              <input type="text" value={banner} onChange={(e) => setBanner(e.target.value)} placeholder="Blog Banner Link" className="bg-[#212121] text-[16px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[10px] px-[20px] mt-[10px] required" />
            </label>
          </div>
          <div className='mb-[20px]'>
            <label className='text-white font-semibold'>
              Blog Hero Image Link:
              <input type="text" value={heroImg} onChange={(e) => setHeroImg(e.target.value)} placeholder="Blog Banner Link" className="bg-[#212121] text-[16px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[10px] px-[20px] mt-[10px] required" />
            </label>
          </div>
          <div className='mb-[40px]'>
            <label className='text-white font-semibold'>
              Blog short description:
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" Blog short descriptio" class="bg-[#212121] text-[16px] text-white font-semibold w-full rounded-[30px] outline-0 border-none py-[10px] px-[20px] mt-[10px] required" />
            </label>
          </div>

          <JoditEditor
            ref={editor}
            value={content}
            onChange={newContent => setContent(newContent)}
          />

          <div>
            <button disabled={loading} onClick={handlePublish} className='bg-white border-none outline-none rounded-[5px] px-[7px] py-[8px] mt-[30px]'>{loading ? "Loading...":"Publish"}</button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default CreateBlog