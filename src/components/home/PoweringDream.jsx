import { PWOERING_DREAM_DATA } from '@/utlis/helper'
import Image from 'next/image'
import React from 'react'

const PoweringDream = () => {
    return (
        <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:py-[94px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <h3 data-aos="fade-up" className={`text-black font-bold text-center text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2.5 `}>
                    Empowering Dreams. Powering Success
                </h3>
                <p data-aos="fade-up" className={`text-black/65 ff_n text-base text-center md:text-lg leading-[150%] pb-[30px] `}>
                    Real Numbers. Real Success.
                </p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-[38px]'>
                    {PWOERING_DREAM_DATA.map((obj, i) => {
                        return (
                            <div data-aos-duration={800 + i * 500} data-aos="fade-up" key={i} className='bg-[#E50A14] px-3.5 pt-[42px] pb-6 rounded-lg mt-[56px] relative'>
                                <Image src={obj.image} alt="icon" width={50} height={50} className='absolute w-[82px] h-[82px] top-[-56px] left-1/2 -translate-x-1/2' />
                                <p className='text-white text-center text-base leading-[120%] ff_n'>{obj.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default PoweringDream