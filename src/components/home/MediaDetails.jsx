"use client";
import { MEDIA_DETAILS_DATA_LIST } from "@/utlis/helper";
import React, { useState } from "react";
import Icons from "../common/Icons";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MediaDetails = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-white py-14 md:py-16 lg:py-20 xl:py-[94px]" ref={ref}>
      <div className="max-w-[1310px] mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_22%_22%_30%] p-6 md:p-8 xl:p-9 gap-6 lg:gap-4 xl:gap-[30px] rounded-xl md:rounded-2xl lg:rounded-3xl bg-[#FFE0E1]">
          {MEDIA_DETAILS_DATA_LIST.map((obj, i) => {
            const count = parseFloat(obj.title) || 0;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <div>
                  <Icons icon={obj.icon} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-[26px] xl:text-[32px] text-black font-bold leading-none">
                    {obj.rs && <span className="capitalize me-1">{obj.rs}</span>}
                    <CountUp
                      start={0}
                      end={inView ? count : 0}
                      duration={2.5}
                      separator=","
                      decimals={obj.title.includes(".") ? 1 : 0} // 👈 Show decimal if needed
                    />
                    <span className="capitalize ms-1">{obj.data}+</span>
                  </h3>
                  <p className="ff_n text-base md:text-md font-semibold leading-[122%] text-black capitalize">
                    {obj.discrpition}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default MediaDetails;
