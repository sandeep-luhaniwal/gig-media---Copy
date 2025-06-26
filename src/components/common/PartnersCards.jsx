'use client';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PartnersCards = ({ mapdata, height }) => {
    return (
        <div className='bg-[#FFE0E1] relative'>
            <span className='block bg-white h-[55px] w-full absolute bottom-0'></span>
            <div className='max-w-[1310px] mx-auto px-4 relative z-30 pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={24}
                    breakpoints={{
                        320: { slidesPerView: 1.3 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]"
                >
                    {mapdata.map((obj, i) => (
                        <SwiperSlide key={i} className='h-full'>
                            <div
                                data-aos="flip-left"
                                data-aos-duration={800 + i * 400}
                                className='bg-white rounded-xl flex flex-col h-full overflow-clip'
                            >
                                <div className='h-[280px] xl:h-[330px] relative flex items-center justify-center p-6'>
                                    <Image src={obj.image} alt='sony' width={310} height={338} />
                                </div>
                                <div className={`bg-[#FF0004] py-3 px-2.5`}>
                                    <p className={` ${height ? "h-[50px]" : "h-auto"} text-white line-clamp-2 overflow-clip ff_n text-base md:text-lg font-bold leading-[150%]`}>
                                        {obj.title}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PartnersCards;
