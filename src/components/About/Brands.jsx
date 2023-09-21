import React from 'react'
import Marquee from "react-fast-marquee";

import img1 from "../../images/about/Brands 1.png"
import img2 from "../../images/about/Brands 2.png"
import img3 from "../../images/about/Brands 3.png"
import img4 from "../../images/about/Brands 4.png"
import img5 from "../../images/about/Brands 5.png"

function Brands() {

    const data = [img1, img2, img3, img4, img5]

    return (
        <div className='bg-[#111111]'>
            <div className='container'>
                <Marquee>
                    {
                        data.map((el, i) => <div key={i}>
                            <img src={el} alt='' />
                        </div>)
                    }

                </Marquee>

            </div>

        </div>
    )
}

export default Brands