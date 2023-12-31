'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faFileAlt, faLock, faCalendarMinus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "../_styles/globals.css"

export default function Sidebar(){
    const pathname = usePathname()

    return(
        <nav className="flex w-1/5">
            <ul className="w-full">
                <Link href="/">
                    <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faHome} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Home</p>
                    </li>
                </Link>
                <Link href="/exam-1">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/exam-1" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faLock} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Exam 1</p>
                    </li>
                </Link>
                <Link href="/modules">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/modules" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faFileAlt} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Modules</p>
                    </li>
                </Link>
                <Link href="/exam-2">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/exam-2" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faLock} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Exam 2</p>
                    </li>
                </Link>
                <Link href="/resource-list">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/resource-list" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faCalendarMinus} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Resource List</p>
                    </li>
                </Link> 
                <Link href="/website-feedback">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/website-feedback" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faQuestion} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Website Feedback</p>
                    </li>
                </Link> 
            </ul>
        </nav>
    )
}