import Image from 'next/image'
import React from 'react'

const ImageMedia = () => {
    return (
        <div className=' bg-black'>
            <Image src={"/images/webp/unorganised-media.webp"} height={852} width={1920} alt='media' className='w-full h-full' />
        </div>
    )
}

export default ImageMedia