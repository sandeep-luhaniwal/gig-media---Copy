'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const TOTAL_DOTS = 4

const ArtistMobile = ({ mapdata }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const goToSlide = (idx) => {
    if (swiperRef.current) swiperRef.current.slideToLoop(idx)
  }

  const activeItem = mapdata[activeIndex]

  return (
    <div className="bg-[#FFE0E1]/50">
      <div className="max-w-[1310px] relative mx-auto px-4 py-14 md:py-16 lg:py-20 xl:py-[94px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 items-center">

          {/* Title + Description */}
          <div className="relative z-30 order-2 md:order-1 lg:max-w-[572px]">

            <h3
            key={activeItem.title}
              data-aos="fade-up-right"
              data-aos-duration={1200}
              className="text-black font-bold text-3xl md:text-4xl lg:text-[47px] leading-[122%] pb-2"
            >
              {activeItem.title}
            </h3>
            <p
              key={activeItem.description}
              data-aos="fade-up-right"
              data-aos-duration={1200}
              className="text-black/60 ms-3 ff_n text-base md:text-lg leading-[150%] pb-[30px]"
            >
              {activeItem.description}
            </p>
          </div>

          {/* Swiper Slider */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={4}
              slidesPerView={2}
              loop
              speed={1000}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full max-w-[700px]"
            >
              {mapdata.map((obj, index) => {
                const total = mapdata.length
                const getRealIndex = (offset) =>
                  (activeIndex + offset + total) % total

                let scale = 'scale-60'
                let translate = 'translate-x-0'

                if (index === getRealIndex(0)) {
                  scale = 'scale-110'
                } else if (index === getRealIndex(1)) {
                  scale = 'scale-70'
                  translate = 'translate-x-4'
                }

                return (
                  <SwiperSlide key={index}>
                    <div
                      className={`transition-all duration-300 transform py-5 ${scale} ${translate} flex justify-center`}
                    >
                      <Image
                        src={obj.image}
                        alt={`Phone ${index + 1}`}
                        width={300}
                        height={600}
                        className="rounded-xl object-contain"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              {Array.from({ length: TOTAL_DOTS }).map((_, dotIdx) => {
                const slidesPerGroup = Math.ceil(
                  mapdata.length / TOTAL_DOTS
                )
                const groupStart = dotIdx * slidesPerGroup
                const currentGroup = Math.floor(activeIndex / slidesPerGroup)

                return (
                  <button
                    key={dotIdx}
                    onClick={() => goToSlide(groupStart)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${dotIdx === currentGroup ? 'bg-[#FF0004]' : 'bg-[#FFE0E1]'
                      }`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistMobile
