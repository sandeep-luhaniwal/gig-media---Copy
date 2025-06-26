"use client"
import { CREATIVE_CELEBRITIES_DATA_LIST, CREATIVE_CELEBRITIES_SLIDER_DATA, CREATIVE_CONNECT_DATA, CREATIVE_VIDEO_LIST } from "@/utlis/helper";
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

const CreativeConnect = () => {
    useEffect(() => {
        Aos.init({
            duration: 800, // animation duration
            once: true,     // only animate once
        });
    }, []);
    return (
        <div className="overflow-clip">
            <Hero
                title={"Creative Connect: Powering India’s Creative Supply Chain"}
                description={"Agency network, project collaboration, smart hiring tools, talent discovery, campaign pitching, production workflow, vendor ecosystem, casting integration, cross-agency synergy"}
            />
            <PartnersCards mapdata={CREATIVE_CONNECT_DATA} text />
            <ResponsiveGrid
                description={"Meet our talented artists — photographers, editors, performers, and creators — getting real gigs through the GigMedia platform every day."}
                title={"360 degree media & entertainment agency aggregation"} mapdataAll={CREATIVE_CELEBRITIES_DATA_LIST} />
            <ArtistMobile

                mapdata={CREATIVE_CELEBRITIES_SLIDER_DATA}

            />
            <GigMediaDownload />
            <Faq videomapdata={CREATIVE_VIDEO_LIST} />
            <Footer />
        </div>
    );
};

export default CreativeConnect