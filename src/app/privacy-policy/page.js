import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import PrivacyPolicy from '@/components/policy/PrivacyPolicy'
import React from 'react'

export default function privacy() {
    return (
        <div>
            <NavBar/>
            <PrivacyPolicy />
            <Footer/>
        </div>
    )
}
