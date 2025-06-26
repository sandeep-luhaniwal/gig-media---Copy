"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const imageSlides = [
    '/images/webp/home/about_slider_1.webp',
    '/images/webp/home/about_slider_2.webp',
    '/images/webp/home/about_slider_3.webp',
    '/images/webp/home/about_slider_4.webp',
    '/images/webp/home/about_slider_5.webp',
    '/images/webp/home/about_slider_6.webp',
    '/images/webp/home/about_slider_7.webp',
    '/images/webp/home/about_slider_8.webp',
    '/images/webp/home/about_slider_9.webp',

];

const AboutUs = () => {
    return (
        <section id='about' className="bg-[#FFD9D9] py-14 md:py-16 lg:py-20 xl:py-[94px]">
            <div className="max-w-[1440px] px-4 xl:pe-0 mx-auto flex flex-col lg:flex-row items-center lg:gap-6 xl:gap-[60px]">
                <div data-aos="fade-right" className="relative flex justify-center lg:justify-start lg:w-1/12 w-full">
                    <h2 className="ff_s pb-6 md:pb-8 lg:pb-0 font-bold text-4xl md:text-5xl lg:text-[56px] text-[#FF0004] lg:rotate-[-90deg] lg:-translate-x-20 xl:-translate-x-10 origin-center whitespace-nowrap">
                        About Us
                    </h2>
                </div>
                <div data-aos="zoom-in" className="bg-white shadow p-6 md:p-8 lg:p-6 xl:p-9 lg:w-11/12 flex flex-col lg:flex-row items-center gap-6 xl:gap-[60px] w-full">
                    <p className="text-base order-2 lg:order-1 md:text-lg text-justify text-black/65 ff_n leading-[166%]">
                        GigMedia is the operating system of India’s Orange Economy —
                        a launchpad for creative commerce and collaboration. We bring together media professionals, agencies,
                        artist associations, and corporates into a seamless, tech-enabled ecosystem. From discovery
                        and networking to business generation and upskilling, GigMedia empowers every stakeholder in the media
                        value chain. Built for scale, designed for impact — we’re fuelling India’s creative engine with infrastructure,
                        intelligence, and innovation. Not just an app, but a movement —
                        GigMedia powers a million media ambitions, enabling the next generation of storytellers, creators,
                        and entrepreneurs to thrive in a fast-evolving digital economy.
                    </p>
                    <div className="order-1 lg:order-2 w-full max-w-[230px] h-[277px]">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            className="w-full h-full"
                        >
                            {imageSlides.map((img, idx) => (
                                <SwiperSlide key={idx} className="w-full h-full">
                                    <Image
                                        src={img}
                                        alt={`About Slide ${idx + 1}`}
                                        width={230}
                                        height={277}
                                        className="rounded-xl w-full h-full object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs