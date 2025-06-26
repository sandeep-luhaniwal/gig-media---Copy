import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import LatestNews from '@/components/latestnews/LatestNews'
import React from 'react'

export default function news() {
    return (
        <div>
            <NavBar />
            <LatestNews />
            <Footer />
        </div>
    )
}
