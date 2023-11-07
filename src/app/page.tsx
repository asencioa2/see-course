import Announcement from "./_components/announcement"

export default function Page() {
    return (
        <section className="flex">
            <div className="w-2/3 mx-12">
                <p className="text-center text-xl m-4" >Welcome to the Software Engineering Ethics Course</p>
                <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="" />
                <p className="text-center text-lg" >This Software Engineering Ethics course explores ethical considerations and responsibilities in the development, deployment, and maintenance of software applications. Topics include privacy, security, intellectual property, social impact, and professional conduct. Students learn to navigate moral dilemmas and make informed decisions in the field of software engineering.</p>
            </div>
            <div className="w-1/3 mx-12 ">
                <h1 className="text-center text-xl m-4">Announcements</h1>
                <Announcement title="Exam #1 Reminder:" desc="Please take Exam 1 before researching the provided lesson plans!"/>
                <Announcement title="Exam #1 Reminder:" desc="After you have taken Exam 2 if you time please take the Questionnaire"/>
            </div>
        </section>
    )
}