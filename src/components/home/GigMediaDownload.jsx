import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GigMediaDownload = () => {
    return (
        <div className='bg-[#FFE0E1] py-14 md:py-[60px]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div data-aos="fade-right" className='max-w-[444px]'>
                        <p className='text-[#FF0004] font-semibold text-center lg:text-start text-xl md:text-2xl lg:text-[28px] leading-[164%]'>"Operating System of India’s Media & Entertainment Industry"</p>
                    </div>
                    <div data-aos="fade-left" className='max-w-[488px] pt-4'>
                        <h3 className='font-bold text-2xl text-center md:text-3xl lg:text-[40px] leading-[147%] text-black'>Download GigMedia App</h3>
                        <p className='text-black text-base md:text-lg lg:text-xl lg:text-[21px] text-center pt-3 pb-7 md:pb-9'>An AI Powered Media & Entertainment Solution</p>
                        <div className="flex gap-2.5 justify-center">
                            <Link target='_blank' href={"https://play.google.com/store/apps/details?id=com.mediamatrix&pli=1"}>
                                <Image src={"/images/svg/google-play.svg"} height={40} width={126} className='max-w-[126px]' alt='google-play' />
                            </Link>
                            <Link target='_blank' href={"https://apps.apple.com/in/app/gigmedia/id6742534420"}>
                                <Image src={"/images/svg/app-store.svg"} height={40} width={126} className='max-w-[126px]' alt='app-play' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GigMediaDownload