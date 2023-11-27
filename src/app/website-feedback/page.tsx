'use client'
import { useState, useEffect } from 'react';

export default function Page() {

    const [isMobile, setIsMobile] = useState(false)
    
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 940) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
    }

    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })

    return (
        <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdPwjz2rzb6l2_VSqZLV_peiMtrDH3qxT3QM9dViWIS76c9tA/viewform?embedded=true" className="w-full" height={isMobile? "3393":"2693"}>Loading…</iframe>
        </div>
    )
}



