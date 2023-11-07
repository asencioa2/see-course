import Link from 'next/link';
import '../_styles/topics.css'


export default function Announcement(props: {title: string, desc: string, href: string}){
    return (
        <div className="w-1/3 px-4 topicCard">
            <Link href={props.href}>
                <div>
                    <p className="my-4">{props.title}</p>
                    <p className="mb-6">{props.desc}</p>
                </div>
            </Link>          
        </div>       
    )
} 