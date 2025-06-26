import Image from 'next/image';
import React from 'react';

const logos = [
    { src: "/images/webp/crayons.webp", alt: 'spherule', widthClass: 'w-[166px]' },
    { src: "/images/webp/believe.webp", alt: 'spherule', widthClass: 'w-[151px]' },
    { src: "/images/webp/hitz.webp", alt: 'spherule', widthClass: 'w-[63px]' },
    { src: "/images/webp/ts.webp", alt: 'spherule', widthClass: 'w-[123px]' },
    { src: "/images/webp/nupur.webp", alt: 'spherule', widthClass: 'w-[140px]' },
    { src: "/images/webp/crayons.webp", alt: 'spherule', widthClass: 'w-[166px]' },
    { src: "/images/webp/believe.webp", alt: 'spherule', widthClass: 'w-[151px]' },
    { src: "/images/webp/hitz.webp", alt: 'spherule', widthClass: 'w-[63px]' },
    { src: "/images/webp/ts.webp", alt: 'spherule', widthClass: 'w-[123px]' },
    { src: "/images/webp/nupur.webp", alt: 'spherule', widthClass: 'w-[140px]' },


];

const PartnerSlider = () => {
    return (
        <div className='bg-[#FBFBFB]'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className='overflow-clip py-14 md:py-16 lg:py-20 xl:py-[94px]'>
                    <h2 data-aos="zoom-in" className="ff_s font-bold text-4xl text-center md:text-5xl lg:text-[56px] text-[#FF0004] mb-8">
                        Our Proud Network
                    </h2>
                    <div className='flex items-center w-full slide_container'>
                        {logos.map((obj, i) => (
                            <div key={i} className="min-w-[225px] mx-[18px] h-[104px] silder_shadow bg-white flex justify-center items-center w-full">
                                <Image src={obj.src} alt={obj.alt} width={200} height={50} className={obj.widthClass} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerSlider;