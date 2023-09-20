import Marquee from "react-fast-marquee";

function RunningTextTag() {

    const tagList = ["Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "TXAA", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading", "Color Grading"]

    return (
        <>
            <div className='overflow-hidden'>
                <div className='flex bg-[#111111] pt-[20px]'>

             
                <Marquee>
                    {
                        tagList.map((el, i) => <div className='text-white inline-block px-[15px] rounded-[50px] font-semibold text-[14px] py-[8px] mx-[10px] bg-[#212121] whitespace-nowrap' key={i}>{el}</div>)
                    }
                </Marquee>
                </div>
            </div>

        </>
    )
}

export default RunningTextTag