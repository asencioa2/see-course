import Announcement from "../_components/announcement"
import Topic from "../_components/topic"

export default function Page() {
    return (
        <section className="flex flex-wrap justify-center">
            <Topic title="Topic 1" desc="Introduction to Software Engineering Ethics" href="/topics/topic-1"/>
            <Topic title="Topic 2" desc="Ethical Theories and Frameworks" href="/topics/topic-2"/>
            <Topic title="Topic 3" desc="Ethical Principles in Software Engineering" href="/topics/topic-3"/>
            <Topic title="Topic 4" desc="Ethical Decision-Making Framework" href="/topics/topic-4"/>
            <Topic title="Topic 5" desc="Legal and Regulatory Aspects" href="/topics/topic-5"/>
            <Topic title="Topic 6" desc="Ethical Considerations in AI and Machine Learning" href="/topics/topic-6"/>
            <Topic title="Topic 7" desc="Privacy and Data Ethics" href="/topics/topic-7"/>
            <Topic title="Topic 8" desc="Ethical Hacking and Cybersecurity" href="/topics/topic-8"/>
            <Topic title="Topic 9" desc="Ethical Leadership and Organizational Culture" href="/topics/topic-9"/>
            <Topic title="Topic 10" desc="Building and Promoting Ethical Software" href="/topics/topic-10"/>
        </section>
    )
}