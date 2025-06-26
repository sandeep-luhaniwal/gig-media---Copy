import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LatestNews = () => {
    return (
        <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:pb-[94px] mt-6'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 xl:gap-[50px]">
                    <div className=' flex justify-center'>
                        <Image alt='common' width={400} className='rounded-2xl w-full'
                            height={400} src={"/images/webp/faq-img.webp"} />
                    </div>
                    <div className='pt-5 md:pt-0'>
                        <h3 data-aos="fade-up-right" data-aos-duration="800" className={`text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2`}>
                            Our Latest News
                        </h3>
                        <p data-aos="fade-up-right" data-aos-duration="1100" className={`text-black ff_n text-base md:text-lg leading-[150%] pb-[30px] `}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem, eligendi maiores sunt, dolorem officia repellat odio soluta veniam numquam saepe pariatur eius voluptates quod alias? Voluptates, magnam. Perferendis, deserunt.
                        </p>
                        <Link
                            href={"#"}
                            className="border border-[#FF0004] hover:text-white duration-300 hover:bg-[#FF0004] text-[#FF0004] cursor-pointer bg-white rounded-[10px] p-2.5 text-base md:text-lg leading-[150%]"
                        >
                            Read More
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LatestNews