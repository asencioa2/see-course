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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUXTqLxjNtEftP7bWO1k38Zu_6iAXYfUxw0lho44uSSMjlsw/viewform?embedded=true" className="w-full" height={isMobile? "8395":"6795"}>Loading…</iframe>
        </div>
    )
}




