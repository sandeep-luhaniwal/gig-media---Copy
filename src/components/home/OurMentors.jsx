import Image from 'next/image'
import React from 'react'

const OurMentors = () => {
    return (
        <div className="bg-[#FFE0E1]">
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
                <h2 className="ff_s pb-6 md:pb-8 lg:pb-0 font-bold text-4xl md:text-5xl lg:text-[56px] text-[#FF0004] text-center">
                    Crafted by Industry Legends
                    <span className='block pt-3'>Our Mentors</span>
                </h2>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 justify-center items-center pt-14'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image width={300} height={300} alt='vinod' src={"/images/webp/home/vinod-set.webp"} />
                        <p className='font-bold text-2xl md:text-3xl text-center pt-4 pb-1'>Vinod Bhanushali</p>
                        <p className='text-center bg-[#FF0004] text-base md:text-lg text-white font-semibold py-1 px-4 rounded-xl'>Founder Hitz Music & Bhanushali Studio</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image width={300} height={300} alt='vinod' src={"/images/webp/home/ashok.webp"} />
                        <p className='font-bold text-2xl md:text-3xl text-center pt-4 pb-1'>Ashok Shrivastav</p>
                        <p className='text-center bg-[#FF0004] text-base md:text-lg text-white font-semibold py-1 px-4 rounded-xl'>Media Industry Veteran</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMentors