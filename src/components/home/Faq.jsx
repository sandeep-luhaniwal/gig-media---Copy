'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Icons from '../common/Icons';

const faqData = [
    {
        question: 'How Do I Register As A Professional?',
        answer: 'You can register by filling out a short form on the GigMedia app or website.'
    },
    {
        question: 'Can I Upskill While Working?',
        answer: 'Yes! GigMedia offers EdTech 2.0 programs that you can complete while working.'
    },
    {
        question: 'How Does GigMedia Help Agencies Grow?',
        answer:
            'The app offers a rating-based hiring system, enabling users to find and connect with top-rated talent in real time. This makes the hiring process faster, transparent, and more efficient.'
    },
    {
        question: 'Is There A Fee For Registration?',
        answer: 'No, registration on GigMedia is completely free for professionals.'
    },
    {
        question: 'How Long Does The Registration Process Take?',
        answer: 'It usually takes less than 5 minutes to complete your profile and get started.'
    },
    {
        question: 'What are Prime Artists?',
        answer: 'Prime Artists are top-tier, verified professionals on GigMedia with a proven track record and high industry credibility.'
    },
    {
        question: 'What Are The Eligibility Criteria For Registration?',
        answer: 'Anyone with skills and relevant experience in media, art, or related fields can register.'
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(faqData.length > 0 ? 0 : null);


    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-14 md:py-16 lg:py-20 xl:py-[94px]">
            <div className="max-w-[1310px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[38%_60%] xl:grid-cols-2 gap-10 md:gap-6 xl:gap-[60px] items-center">


                    <Image data-aos="fade-up-right"
                        src="/images/webp/home/faq_img.webp"
                        alt="Need Help"
                        width={600}
                        height={400}
                        className="w-full object-cover rounded-lg"
                    />
                    <div data-aos="fade-up-left" className="">
                        {faqData.map((item, index) => (
                            <div

                                key={index}
                                className={`transition-all duration-300 ease-in-out mb-3 xl:mb-5 rounded-[10px] overflow-hidden ${activeIndex === index ? 'bg-[#FF0004] text-white' : 'bg-white text-black'
                                    }`}
                            >
                                <div
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full cursor-pointer text-base md:text-lg lg:text-[19px] text-left px-3 py-2.5 xl:py-3.5 font-semibold focus:outline-none flex justify-between items-start ff_n"
                                >
                                    <span>{item.question}</span>
                                    <span className="text-xl">
                                        {activeIndex === index ? <Icons icon={"uparrow"} /> : <Icons icon={"downarrow"} />}
                                    </span>
                                </div>
                                <div
                                    className={`text-base ff_n px-3 leading-[168%] transition-max-height duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[300px] pb-3' : 'max-h-0 py-0'
                                        }`}
                                >
                                    <p className="text-base">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
