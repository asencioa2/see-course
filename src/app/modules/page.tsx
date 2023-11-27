import Announcement from "../_components/announcement"
import Topic from "../_components/topic"

export default function Page() {
    return (
        <section className="flex flex-wrap justify-center mt-4 h-[88vh]">
            <Topic title="Topic 0" desc="Introduction to Software Engineering" href="/modules/topic-0"/>
            <Topic title="Topic 1" desc="Introduction to Software Engineering Ethics" href="/modules/topic-1"/>
            <Topic title="Topic 2" desc="Ethical Theories and Frameworks" href="/modules/topic-2"/>
            <Topic title="Topic 3" desc="Ethical Principles in Software Engineering" href="/modules/topic-3"/>
            <Topic title="Topic 4" desc="Ethical Decision-Making Framework" href="/modules/topic-4"/>
            <Topic title="Topic 5" desc="Legal and Regulatory Aspects" href="/modules/topic-5"/>
            <Topic title="Topic 6" desc="Ethical Considerations in AI and Machine Learning" href="/modules/topic-6"/>
            <Topic title="Topic 7" desc="Privacy and Data Ethics" href="/modules/topic-7"/>
            <Topic title="Topic 8" desc="Ethical Hacking and Cybersecurity" href="/modules/topic-8"/>
            <Topic title="Topic 9" desc="Ethical Leadership and Organizational Culture" href="/modules/topic-9"/>
            <Topic title="Topic 10" desc="Building and Promoting Ethical Software" href="/modules/topic-10"/>
        </section>
    )
}