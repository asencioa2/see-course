'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faFileAlt, faLock, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "../_styles/globals.css"

export default function Sidebar(){
    const pathname = usePathname()

    return(
        <nav style={{padding: "1rem 1rem 1rem 0"}} className="flex h-screen w-1/5">
            <ul className="w-full">
                <Link href="/dashboard">
                    <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/dashboard" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faHome} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Home</p>
                    </li>
                </Link>
                <Link href="/topics">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/topics" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faFileAlt} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Lesson Plans</p>
                    </li>
                </Link>
                <Link href="/exam-1">
                <li className={`flex items-center h-12 hover:bg-[#4c586e] cursor-pointer ${pathname == "/exam-1" ? "active-link" : ""}`}>
                        <FontAwesomeIcon icon={faLock} style={{width: "1rem", margin: "1rem"}}/>
                        <p>Exam 1</p>
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
            </ul>
        </nav>
    )
}