"use client"
import { MEDIA_CELEBRITIES_SLIDER_DATA, MEDIA_HUB_CELEBRITIES_DATA_LIST, MEDIA_HUB_CONNECT_DATA, MEDIA_VIDEO_LIST } from "@/utlis/helper";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ArtistMobile from "../common/ArtistMobile";
import Faq from "../common/faq";
import Footer from "../common/Footer";
import PartnersCards from "../common/PartnersCards";
import ResponsiveGrid from "../common/ResponsiveGrid";
import Hero from "../creativeconnect/Hero";
import GigMediaDownload from "../home/GigMediaDownload";

const MediaHub = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div className="overflow-clip">
            <Hero
                title={"Media Hub: Your Gateway to the Orange Economy"}
                description={"Corporate dashboard, agency finder, celebrity booking, campaign builder, creative services, media planning, budget filters, real-time execution, PR solutions, production outsourcing"}
            />
            <PartnersCards mapdata={MEDIA_HUB_CONNECT_DATA} />
            <ResponsiveGrid
                description={"“From fans to founders — anyone can use GigMedia to book stars, plan events, and hire creative pros instantly.”"}
                title={"Featured Celebrities"} mapdataAll={MEDIA_HUB_CELEBRITIES_DATA_LIST} />
            <ArtistMobile
                
                mapdata={MEDIA_CELEBRITIES_SLIDER_DATA} />
            <GigMediaDownload />
            <Faq videomapdata={MEDIA_VIDEO_LIST} />
            <Footer
            />
        </div>
    );
};


export default MediaHub