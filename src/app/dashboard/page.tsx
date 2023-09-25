import Announcement from "../_components/announcement"

export default function Page() {
    return (
        <section className="flex">
            <div className="w-2/3">test</div>
            <div className="w-1/3">
                <h1 className="text-center text-xl m-4">Announcements</h1>
                <Announcement title="Exam #1" desc="Check back here for any updates on this test!"/>
            </div>
        </section>
    )
}