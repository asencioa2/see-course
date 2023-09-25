export default function Announcement(props: {title: string, desc: string}){
    return (
        <div className="w-full border-[#4e04ff] rounded-lg border-4 pl-4 pt-2">
            <p className="mb-4">{props.title}</p>
            <p className="mb-6">{props.desc}</p>
        </div>
    )
} 