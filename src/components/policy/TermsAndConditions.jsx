"use client"
import React, { useState } from 'react'
import AgreeMentArtists from './AgreeMentArtists'
import AgreeMentMediaHub from './AgreeMentMediaHub'
import AgreeMentCreative from './AgreeMentCreative'
import AgreeMentAssociation from './AgreeMentAssociation'


const TermsAndConditions = () => {
  const [termsTab, setTermsTab] = useState("one")
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#ff0004] text-center">
        Terms of Use
      </h1>
      <div className="flex max-w-max md:max-w-full md:justify-center max-md:overflow-auto overflow_none gap-4 mb-8">
        <button onClick={() => setTermsTab("one")} className={`${termsTab === "one" ? "bg-[#ff0004] text-white" : "text-[#ff0004] bg-white"} text-base border rounded hover:bg-black duration-300 hover:text-white hover:border-transparent text-nowrap cursor-pointer border-[#ff0004] px-4 py-2`}>Artist Avenue</button>
        <button onClick={() => setTermsTab("two")} className={`${termsTab === "two" ? "bg-[#ff0004] text-white" : "text-[#ff0004] bg-white"} text-base border rounded hover:bg-black duration-300 hover:text-white hover:border-transparent text-nowrap cursor-pointer border-[#ff0004] px-4 py-2`}>Creative Connect</button>
        <button onClick={() => setTermsTab("three")} className={`${termsTab === "three" ? "bg-[#ff0004] text-white" : "text-[#ff0004] bg-white"} text-base border rounded hover:bg-black duration-300 hover:text-white hover:border-transparent text-nowrap cursor-pointer border-[#ff0004] px-4 py-2`}>Media Hub</button>
        <button onClick={() => setTermsTab("four")} className={`${termsTab === "four" ? "bg-[#ff0004] text-white" : "text-[#ff0004] bg-white"} text-base border rounded hover:bg-black duration-300 hover:text-white hover:border-transparent text-nowrap cursor-pointer border-[#ff0004] px-4 py-2`}>Artist Association</button>
      </div>
      {termsTab === "one" && <AgreeMentArtists />}
      {termsTab === "two" && <AgreeMentCreative />}
      {termsTab === "three" && <AgreeMentMediaHub />}
      {termsTab === "four" && <AgreeMentAssociation />}
    </div>
  )
}

export default TermsAndConditions