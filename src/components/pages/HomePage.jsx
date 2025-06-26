"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";

// Your imports...
import {
    ARTIST_PHONE_IMAGES,
    CREATIVE_PHONE_IMAGES,
    MEDIA_PHONE_IMAGES,
} from "@/utlis/helper";

import Footer from "../common/Footer";
import AboutUs from "../home/AboutUs";
import CommonPhone from "../home/CommonPhone";
import Faq from "../home/Faq";
import GigMediaDownload from "../home/GigMediaDownload";
import Hero from "../home/Hero";
import ImageMedia from "../home/ImageMedia";
import MediaDetails from "../home/MediaDetails";
import OurMentors from "../home/OurMentors";
import OurSolutions from "../home/OurSolutions";
import PartnerSlider from "../home/PartnerSlider";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const commonPhoneRef = useRef(null);
    const mentorRef = useRef(null);

    useEffect(() => {
        Aos.init({ duration: 800, once: true });

        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                // For desktop and above (1024px and up)
                "(min-width: 1024px)": () => {
                    // Pin the CommonPhone container
                    ScrollTrigger.create({
                        trigger: commonPhoneRef.current,
                        start: "top top",
                        end: "+=300%", // enough space to scroll through all
                        pin: true,
                        scrub: true,
                    });

                    // Animate 2nd section over 1st (from bottom to top)
                    gsap.fromTo(
                        ".step-2",
                        { y: "100%" },
                        {
                            y: "0%",
                            scrollTrigger: {
                                trigger: commonPhoneRef.current,
                                start: "top top",
                                end: "+=100%",
                                scrub: true,
                            },
                        }
                    );

                    gsap.fromTo(
                        ".step-3",
                        { y: "200%" },
                        {
                            y: "0%",
                            scrollTrigger: {
                                trigger: commonPhoneRef.current,
                                start: "top top",
                                end: "+=300%",
                                scrub: true,
                            },
                        }
                    );
                },
                "(max-width: 1023px)": () => {
                    document.querySelectorAll(".step-1, .step-2, .step-3").forEach((el) => {
                        el.style.position = "relative";
                        el.style.zIndex = "0";
                        el.style.transform = "none";
                    });

                    if (commonPhoneRef.current) {
                        commonPhoneRef.current.style.height = "auto";
                    }
                },
            });

            gsap.from(mentorRef.current, {
                scrollTrigger: {
                    trigger: mentorRef.current,
                    start: "top 90%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
            });
        }, commonPhoneRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-clip">
            <Hero />
            <AboutUs />
            <MediaDetails />
            <ImageMedia />
            <OurSolutions />

            <div
                ref={commonPhoneRef}
                className="relative lg:h-screen bg-white overflow-hidden lg:flex justify-center items-center"
            >
                <div className="lg:absolute inset-0 z-10 step-1">
                    <CommonPhone
                        phoneImages={ARTIST_PHONE_IMAGES}
                        url="/artist-avenue"
                        title="Artist Avenue: Revolutionizing Talent Discovery"
                        desc="Real-time gigs, verified profiles, audition alerts, skill-based hiring, rating system, direct access, multi-association sync, portfolio showcase, job hunter mode"
                    />
                </div>

                <div className="lg:absolute inset-0 z-20 step-2">
                    <CommonPhone
                        phoneImages={CREATIVE_PHONE_IMAGES}
                        url="/creative-connect"
                        title="Creative Connect: Powering India’s Creative Supply Chain"
                        desc="Agency network, project collaboration, smart hiring tools, talent discovery, campaign pitching, production workflow, vendor ecosystem, casting integration, cross-agency synergy"
                        red
                    />
                </div>


                <div className="lg:absolute inset-0 z-30 step-3">
                    <CommonPhone
                        phoneImages={MEDIA_PHONE_IMAGES}
                        url="/media-hub"
                        title="Media Hub: Your Gateway to the Orange Economy"
                        desc="Corporate dashboard, agency finder, celebrity booking, campaign builder, creative services, media planning, budget filters, real-time execution, PR solutions, production outsourcing"
                        three
                    />
                </div>
            </div>

            {/* 👇 OurMentors Section */}
            <div ref={mentorRef}>
                <OurMentors />
            </div>

            <PartnerSlider />
            <Faq />
            <GigMediaDownload />
            <Footer />
        </div>
    );
};

export default HomePage;
