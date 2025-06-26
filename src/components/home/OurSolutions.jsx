import { OUR_SOLUTION_DATA } from '@/utlis/helper';
import Image from 'next/image';
import React, { useState } from 'react';



const OurSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lastHoveredIndex, setLastHoveredIndex] = useState(0);

  return (
    <div className='bg-[#FFE0E1] py-14 md:py-16 lg:py-20 xl:py-[94px]'>
      <div className="max-w-[1310px] mx-auto px-4">
        <h2 data-aos="zoom-in" className="ff_s font-bold text-4xl text-center md:text-5xl lg:text-[56px] text-[#FF0004]">
          Our Solutions
        </h2>
        <p data-aos="zoom-in" data-aos-duration='1200' className='text-base max-w-[1000px] mx-auto md:text-lg text-center leading-[130%] lg:text-xl xl:text-[21px] text-black py-7 md:py-8 lg:py-9'>
          GigMedia unifies the fragmented media industry—connecting talent, agencies, associations, and corporates on one intelligent platform.
          It streamlines discovery, hiring, and collaboration—solving chaos with structure,
          and replacing gatekeeping with access. The ecosystem now has an engine.
          {/* Powered by in-house talent trained across AVGC-XR disciplines, we don’t just deliver content—we deliver creatiTailored Solutions for Every Player in the Media Ecosystemve power at scale. */}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-[60px] items-center">
          {/* Text Content */}
          <div className='flex flex-col gap-6 order-2 lg:order-1'>
            {OUR_SOLUTION_DATA.map((obj, i) => (
              <div
                data-aos="fade-up-right"
                data-aos-duration={800 + i * 200}
                key={i}
                className="bg-[#FFE4E5] c_shadow duration-300 group hover:bg-[#FF0004] rounded-xl py-3 px-4 flex gap-3"
                onMouseEnter={() => {
                  setHoveredIndex(i);
                  setLastHoveredIndex(i);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='relative'>
                  <Image
                    className='transition-opacity duration-300 h-12 max-w-12 group-hover:opacity-0'
                    width={52}
                    height={52}
                    src={"/images/webp/dark-tick.webp"}
                    alt='dark-tick'
                  />
                  <Image
                    className='absolute top-0 left-0 z-40 scale-0 h-12 max-w-12 group-hover:scale-100 transition-transform duration-300'
                    width={52}
                    height={52}
                    src={"/images/webp/green-tick.webp"}
                    alt='green-tick'
                  />
                </div>
                <div>
                  <h4 className='text-black/65 group-hover:text-white/100 duration-300 text-lg md:text-xl lg:text-2xl leading-[170%] font-bold'>
                    {obj.title}
                  </h4>
                  <p className='leading-[120%] ff_n group-hover:text-white/100 duration-300 text-base text-black/65'>
                    {obj.discrpition}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Preview */}
          <div className='order-1 lg:order-2 relative w-full h-[458px] rounded-xl overflow-hidden' data-aos="fade-up-left">
            {OUR_SOLUTION_DATA.map((data, idx) => {
              const isVisible = hoveredIndex === idx || (hoveredIndex === null && lastHoveredIndex === idx);
              return (
                <Image
                  key={idx}
                  src={data.image}
                  alt={`solution image ${idx}`}
                  fill
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 ease-in-out
                    ${isVisible ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                  priority={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutions;
