import Link from 'next/link';


export default function Announcement(props: {title: string, desc: string, href: string}){
    return (
        <div className="w-1/3 p-4 ">
            <Link href={props.href}>
                <div className="w-full border-[#4e04ff] rounded-lg border-4 pl-4 pt-2 cursor-pointer">
                    <p className="mb-4">{props.title}</p>
                    <p className="mb-6">{props.desc}</p>
                </div>
            </Link>          
        </div>       
    )
} 