import React, { useState } from 'react'
import plushIcon from "../../images/iocn/plus-icon.png"
import minusIcon from "../../images/iocn/minus-icon.png"


function SingleFaq({data}) {

    const [open, setOpen] = useState(data?.open || false)
    return (
        <div>
            <div onClick={() => setOpen(!open)} className='border-b py-[16px] cursor-pointer border-[#ffffff4d] flex gap-x-[30px] justify-between items-center'>
                <h4 className='text-[20px] leading-[28px] text-white font-bold'>{data.qus}</h4>

                <div >
                    <img className='w-[18px] h-[18px]' src={open? minusIcon : plushIcon} alt='' />
                </div>
            </div>
            <div className={`${open? "block" :"hidden"} duration-300 mb-[10px] pt-[13px]`}>
                <p className='text-[#DADADA] text-[16px] leading-[26px]'>{data.ans}</p>
            </div>
        </div>
    )
}

export default SingleFaq