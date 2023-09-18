import React from 'react'

const data = [
    {
        title: "3 Days",
        text: "Average Saved / Week"
    },
    {
        title: "1.2m",
        text: "Worldwide Clients"
    },
    {
        title: "$40000",
        text: "Trained AI Model"
    },
    {
        title: "$300+",
        text: "Powerful AI Business Tools"
    },
]

function WorkStateMent() {
    return (
        <div className='bg-[#111111] pt-[48px] '>
            <div className='container border-b border-[#ffffff4d] pb-[48px]'>
                <div className='grid grid-cols-4 place-items-center gap-x-[20px]'>
                    {
                        data.map((el, i) => <div key={i} className=''>
                            <h4 className='text-white text-[40px] leading-[52px] tracking-[-0.4px] inline-block  border-b-[5px]'>{el.title}</h4>
                            <p className='text-[#FAFAFB] mt-[10px] text-[16px] leading-[26px]'>{el.text}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkStateMent