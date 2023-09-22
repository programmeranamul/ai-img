import blogImg from "../../images/blog/single-blog.png"
import rightArrow from "../../images/iocn/arrow-right.png"

function Blogs() {


    const data = [
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
        {
            img: blogImg,
            title: "Top successful AI chatbots tool 2023",
            tag: "TXAA",
            comment: "0",
            date: "2 July 2023",
        },
    ]

    return (
        <div className="bg-[#111] pt-[40px] md:pt-[80px] pb-[40px] md:pb-[70px] lg:pb-[100px]">
            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[35px]">
                    {
                        data.map((el, i) => <div key={i}>
                            <div className="mb-[20px]">
                                <img src={el.img} alt="" className="w-full rounded-[15px]" />
                            </div>
                            <div className='inline-block bg-[#3F3B3B] px-[20px] rounded-[30px] py-[5px] mb-[10px] text-[14px] leading-[22px] font-semibold text-white'>{el.tag}</div>
                            <h3 className="text-[22px] md:text-[26px] leading-[1.2] mb-[11px] font-bold text-white">{el.title}</h3>

                            <div className='flex gap-x-[10px] pb-[14px] items-center'>
                                <p className='text-[#DADADA] text-[16px] leading-[26px]'>- {el.date}</p> <p className='text-[#DADADA] text-[16px] leading-[26px]'> -{el.comment} Comments</p>
                            </div>

                            <div className=''>

                                <a href='/' className='text-transparent uppercase bg-clip-text linear-2 text-[14px] font-semibold webkit-text'>Read More <img className='inline-block' src={rightArrow} alt='' /></a>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </div>
    )
}

export default Blogs