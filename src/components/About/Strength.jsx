import React from 'react'

function Strength() {

    const data = [
        {
            title: "Design",
            percent: 70
        },
        {
            title: "Technology",
            percent: 90
        },
        {
            title: "Animation",
            percent: 60
        },
    ]

    return (
        <div className='bg-[#111111] sm:pb-[30px] lg:pb-[60px]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full lg:w-[40%]'>
                        <h5 class="text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text">OUR PRACTICE</h5>
                        <h2 class="text-[35px] lg:text-[48px] leading-[1.2] font-bold text-white tracking-[-0.6px]">Our strength</h2>
                        <p class="text-[#DADADA] mt-[15px] mb-[25px] text-[16px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                        <p class="text-[#DADADA] mt-[15px] mb-[25px] text-[16px]">Interactively foster 24/365 "outside the box" thinking after interoperable infomediaries. Phosfluorescently predominate reliable value with open-source interfaces. Authoritatively orchestrate customized potentialities whereas timely core competencies.</p>
                    </div>
                    <div className=' w-full lg:w-[50%]'>
                        <div className='lg:w-[80%] mx-auto'>
                            {
                                data.map((el, i) => <div key={i}>
                                    <h4 className='text-[20px] font-bold text-white leading-[28px]'>{el.title}</h4>
                                    <div class=" flex justify-between items-center gap-x-[10px] mb-[25px]  overflow-hidden">
                                        <div className='w-[90%] bg-white bg-opacity-20 rounded-[30px]'>
                                            <div className={`h-[8px] rounded-[30px] w-[${el.percent}%] linear-4 `}>
                                            </div>
                                        </div>
                                        <p className='w-[10%] text-white'>{el.percent}%</p>
                                    </div>

                                </div>)
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strength