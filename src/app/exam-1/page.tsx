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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBber-U74GlyVnsdxZ2h5Iy8l-sJQjROnPnB8KmARGrOm1hQ/viewform?embedded=true" className="w-full" height={isMobile? "8895":"6895"}>Loading…</iframe>
        </div>
    )
}



