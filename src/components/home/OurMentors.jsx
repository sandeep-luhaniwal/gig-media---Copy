import Image from 'next/image'
import React from 'react'

const OurMentors = () => {
    return (
        <div className="bg-[#FFE0E1]">
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
                <h3 className="text-black text-2xl text-center font-semibold md:text-3xl lg:text-4xl pb-2">
                    Crafted by Industry
                </h3>
                <h2 className="ff_s font-bold text-4xl md:text-5xl lg:text-[56px] text-[#FF0004] text-center">
                    <span className='relative max-w-max'>
                        Legends
                        <Image width={148} height={40} alt='red'
                            className='absolute top-12 md:top-[70px] lg:top-[75px] left-1/2 -translate-1/2'
                            src={"/images/svg/red-line.svg"} />
                    </span>
                    <span className='text-black'>{" "}&{" "}</span>
                    <span className='relative max-w-max'>
                        Mentors
                        <Image width={148} height={40} alt='red'
                            className='absolute top-12 md:top-[70px] lg:top-[75px] left-1/2 -translate-1/2'
                            src={"/images/svg/red-line.svg"} />
                    </span>

                </h2>
                <div className='grid grid-cols-1 gap-10 md:gap-6 lg:gap-10 md:grid-cols-2 justify-center items-center pt-16 max-w-[900px] mx-auto'>
                    <div className='flex flex-col justify-center items-center'>
                        <Image width={300} height={300} alt='vinod' src={"/images/webp/home/vinod-set.webp"} />
                        <p className='font-bold text-2xl md:text-3xl text-center pt-4 pb-1'>Vinod Bhanushali</p>
                        <p className='text-center max-w-[300px] md:max-w-[327px] lg:max-w-[380px] w-full mx-auto bg-[#FF0004] text-sm md:text-base lg:text-lg text-white font-medium py-1 px-5 rounded-[6px]'>Founder Hitz Music & Bhanushali Studio</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image width={300} height={300} alt='vinod' src={"/images/webp/home/ashok.webp"} />
                        <p className='font-bold text-2xl md:text-3xl text-center pt-4 pb-1'>Ashok Shrivastav</p>
                        <p className='text-center max-w-[300px] md:max-w-[327px] lg:max-w-[380px] w-full mx-auto bg-[#FF0004] text-sm md:text-base lg:text-lg text-white font-medium py-1 px-5 rounded-[6px]'>Media Industry Veteran</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurMentors