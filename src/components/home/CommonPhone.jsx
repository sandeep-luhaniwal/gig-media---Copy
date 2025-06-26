'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // ✅ Only once

import 'swiper/css';
import 'swiper/css/navigation';

const TOTAL_DOTS = 4;


const CommonPhone = ({ red, title, three, url, desc, phoneImages }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(activeIndex); // ensures correct slide on load
        }
    }, [activeIndex]);

    return (
        <div className={`${red ? "bg-[#FFE0E1]" : "bg-white"} `}>
            <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20">
                <Image className={`absolute max-w-[472px] w-full ${three ? "top-[60px]" : "top-9"} ${red ? "right-0" : "left-0"}`} src={`${red ? "/images/webp/common-two.webp" : three ? "/images/webp/common-third.webp" : "/images/webp/common-one.webp"}`} alt='common' height={472} width={472} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 items-center">
                    <div className={`relative z-30 ${red ? 'order-2 lg:max-w-[602px]' : 'order-2 lg:max-w-[572px]'}`}>
                        <h3 data-aos="fade-up-right" data-aos-duration="800" className={`text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2 ${red ? 'text-end max-w-[600px]' : 'text-left'}`}>
                            {title}
                        </h3>
                        <p data-aos="fade-up-right" data-aos-duration="1100" className={`text-black ff_n text-base md:text-lg leading-[150%] pb-[30px] ${red ? 'text-end max-w-[500px] ms-auto' : 'text-left'}`}>
                            {desc}
                        </p>
                        <div data-aos="fade-up-right" data-aos-duration="1400" className={`flex ${red ? 'justify-end' : 'justify-start'} items-center gap-4`}>
                            <Link
                                href={url}
                                className="border border-[#FF0004] hover:text-white duration-300 hover:bg-[#FF0004] text-[#FF0004] cursor-pointer bg-white rounded-[10px] p-2.5 text-base md:text-lg leading-[150%]"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className={`${red ? 'order-1' : 'order-2'} flex flex-col items-center`}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={4}
                            slidesPerView={2}
                            loop={true} // ✅ This is the fix
                            speed={600}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            className="w-full max-w-[700px]"
                            dir={red ? 'rtl' : 'ltr'}
                        >

                            {phoneImages.map((src, index) => {
                                const totalSlides = phoneImages.length;
                                const getRealIndex = (offset) =>
                                    (activeIndex + offset + totalSlides) % totalSlides;

                                let scale = 'scale-60';
                                let translate = 'translate-x-0';
                                if (!red) {
                                    if (index === getRealIndex(0)) {
                                        scale = 'scale-110';
                                    } else if (index === getRealIndex(1)) {
                                        scale = 'scale-60';
                                        translate = 'translate-x-4';
                                    }
                                } else {
                                    if (index === getRealIndex(1)) {
                                        scale = 'scale-60';
                                        translate = 'translate-x-[-10px]';
                                    } else if (index === getRealIndex(0)) {
                                        scale = 'scale-110';
                                    }
                                }

                                return (
                                    <SwiperSlide key={index}>
                                        <div
                                            className={`transition-all duration-300 transform ${scale} ${translate} flex justify-center`}
                                        >
                                            <div className="w-[180px] h-[380px] sm:w-[240px] lg:w-[250px] sm:h-[440px] lg:h-[480px] relative">
                                                <Image
                                                    src={src}
                                                    alt={`Phone ${index + 1}`}
                                                    fill
                                                    className="rounded-xl object-contain"
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}


                        </Swiper>

                        <div className="flex gap-2 mt-4">
                            {Array.from({ length: TOTAL_DOTS }).map((_, dotIdx) => {
                                const slidesPerGroup = Math.ceil(phoneImages.length / TOTAL_DOTS);
                                const groupStart = dotIdx * slidesPerGroup;
                                const currentGroup = Math.floor(activeIndex / slidesPerGroup);

                                return (
                                    <button
                                        key={dotIdx}
                                        onClick={() => {
                                            if (swiperRef.current) {
                                                swiperRef.current.slideToLoop(groupStart);   // jump to that group
                                            }
                                        }}
                                        className={` w-3 h-3 rounded-full cursor-pointer transition-all duration-300  ${dotIdx === currentGroup
                                            ? 'bg-[#FF0004]' : red ? 'bg-white' : 'bg-[#FFE0E1]'}`}
                                    />
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommonPhone;
