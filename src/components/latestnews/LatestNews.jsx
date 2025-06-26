'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const newsArray = [
    {
        image: "/images/webp/faq-img.webp",
        title: "Our Latest News",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quidem, eligendi maiores sunt, dolorem officia repellat odio soluta veniam numquam saepe pariatur eius voluptates quod alias? Voluptates, magnam. Perferendis, deserunt.",
        link: "#"
    },
    {
        image: "/images/webp/hero-img.webp",
        title: "Exciting Update From Riyadh",
        desc: "amet consectetur adipisicing elit. Lorem ipsum dolor sit  Perspiciatis quidem, eligendi maiores sunt, dolorem officia repellat odio soluta veniam numquam saepe pariatur eius voluptates quod alias? Voluptates, magnam. Perferendis, deserunt.",
        link: "#"
    },
    {
        image: "/images/webp/unorganised-media.webp",
        title: "App Launches New Features",
        desc: "Our app just got better! Explore the new features including real-time chat support, curated experiences, and improved personalization.",
        link: "#"
    }
];

const LatestNews = () => {
    const [current, setCurrent] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % newsArray.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (!isClient) return null;

    return (
        <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:pb-[94px] mt-6'>
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="flex flex-col gap-14 justify-between items-center lg:flex-row">
                    {/* Image */}
                    <div className='max-w-[500px] w-full flex justify-center'>
                        <Image
                            alt='latest-news'
                            width={500}
                            height={400}
                            className='rounded-2xl max-w-[500px] h-[300px] md:h-[400px] w-full object-cover'
                            src={newsArray[current].image}
                        />
                    </div>

                    {/* Content */}
                    <div className='max-w-[670px] w-full'>
                        <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-[37px] leading-[122%] pb-2">
                            {newsArray[current].title}
                        </h3>
                        <p className="text-black text-base md:text-lg leading-[150%] pb-[30px]">
                            {newsArray[current].desc}
                        </p>
                        <Link
                            href={newsArray[current].link}
                            className="border border-[#FF0004] hover:text-white duration-300 hover:bg-[#FF0004] text-[#FF0004] cursor-pointer bg-white rounded-[10px] p-2.5 text-base md:text-lg leading-[150%]"
                        >
                            Read More
                        </Link>

                        {/* Dots */}
                        <div className="flex gap-2.5 mt-10">
                            {newsArray.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-4 h-4 cursor-pointer rounded-full transition-all duration-300 ${current === index ? 'bg-[#ff0004]' : 'bg-black/15'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
