import React from 'react'
import NavBar from '../common/NavBar'

const Hero = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/videos/hero-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
            <div className="relative z-20">
                <NavBar />
                {/* Add any text or buttons here */}
            </div>
        </div>
    )
}

export default Hero
