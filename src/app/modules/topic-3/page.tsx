'use client'
import { useState, useEffect } from 'react';
import '../../_styles/topics.css'
import dynamic from "next/dynamic";
import React from 'react'
import ReactPlayer from 'react-player/lazy'
export default function Page({ params }: { params: { slug: string } }) {
    
  const [isMobile, setIsMobile] = useState(false)
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
    <div className="flex justify-center">
      <div className="w-4/5">
        <h1 className="text-center mb-4 mt-4">Topic 3: Ethical Principles in Software Engineering</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Ethical principles in software engineering provide a framework for professionals to navigate complex moral dilemmas and make decisions that uphold integrity, responsibility, and user trust.</p>
        <br></br>

        <h2>Transparency and Honesty:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Transparency and honesty stand as foundational ethical principles, demanding that software engineers exhibit openness, truthfulness, and forthrightness in their interactions with stakeholders, clients, and users. These principles underscore the importance of clear communication, candid acknowledgment of limitations, and a commitment to providing accurate information about software capabilities.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Communication: In the application of transparency and honesty, effective communication is paramount. Software engineers should convey accurate and clear information about the software&apos;s capabilities, limitations, and potential risks to stakeholders. This ensures that expectations are aligned with reality, fostering trust among users and stakeholders.</p>
            <br></br>
            <p className='ml-4'>Error Reporting: Transparently communicating any errors or shortcomings in the software to stakeholders is crucial. Honest disclosure of issues allows for collaborative problem-solving, demonstrates accountability, and contributes to a culture of continuous improvement in software development.</p>       
            <br></br>
            <p className='ml-4'>User Expectations: Setting realistic expectations about what the software can achieve is an ethical imperative. Transparency and honesty come into play when software engineers avoid over-promising and under-delivering. By providing truthful information about the software&apos;s capabilities, engineers build trust with users and mitigate potential disappointment or dissatisfaction. These applications of transparency and honesty in software engineering not only align with ethical principles but also contribute to the development of a positive and trustworthy relationship between software developers and their stakeholders.</p>
          </li>
        </ol>

        <h2>Integrity:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Integrity within the realm of software engineering encompasses a commitment to acting ethically and morally, even in situations where there may be no immediate consequences for unethical behavior. It involves maintaining a high standard of honesty, consistency, and reliability in professional conduct, fostering trust among team members, clients, and the broader community.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Code Quality: Upholding integrity in code quality involves software engineers striving for high-quality, reliable code that adheres to established best practices and coding standards. This commitment to excellence not only contributes to the creation of robust and maintainable software but also reflects the ethical responsibility of engineers to deliver the best possible product to users and stakeholders.</p>
            <br></br>
            <p className='ml-4'>Avoiding Plagiarism: Respecting intellectual property rights is a key aspect of integrity in software engineering. Engineers should avoid plagiarism by not copying or using code without proper attribution or permission. This ethical stance not only upholds the principles of fairness and honesty but also fosters a culture of innovation and respect for the creative efforts of others in the software community.</p>
            <br></br>
            <p className='ml-4'>Conflict of Interest: Integrity in software engineering involves avoiding situations where personal interests conflict with professional responsibilities. Engineers should make decisions based on the best interests of the project, client, or employer, even if those decisions may not align with personal preferences or interests. By navigating potential conflicts of interest with integrity, software engineers contribute to a trustworthy and ethical work environment. These applications of integrity in software engineering contribute to the development of a professional culture that prioritizes ethical conduct, reliability, and the long-term success of software projects.</p>
          </li>
        </ol>

        <h2>Respect for Privacy:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Respecting privacy in software engineering is grounded in the acknowledgment and safeguarding of individuals&apos; rights to control their personal information. This ethical principle dictates that personal data should be collected, stored, and processed responsibly, with due consideration for user autonomy, transparency, and the prevention of unauthorized access or misuse of sensitive information.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Data Handling: A crucial application of respect for privacy involves implementing robust data protection measures in software engineering. This includes encryption, access controls, and secure storage practices to prevent unauthorized access, use, or sharing of sensitive information. By prioritizing the security of user data, software engineers contribute to building trust and upholding the ethical responsibility of protecting individuals&apos; privacy.</p>
            <br></br>
            <p className='ml-4'>Informed Consent: Obtaining clear and explicit consent from users before collecting and utilizing their personal data is a fundamental practice aligned with respect for privacy. This involves transparently communicating the purpose of data collection, the types of data being collected, and how it will be used. Providing users with the option to consent or decline ensures that their privacy choices are respected, emphasizing the importance of user autonomy in ethical software development.</p>
            <br></br>
            <p className='ml-4'>Compliance with Regulations: Adhering to relevant privacy laws and regulations governing data protection is a critical aspect of respecting privacy in software engineering. This involves staying informed about and complying with legal frameworks such as GDPR, HIPAA, or other regional data protection laws. By aligning with legal standards, software engineers not only meet their legal obligations but also uphold ethical principles, demonstrating a commitment to responsible data handling and privacy protection.</p>
          </li>
        </ol>

        <h2>Accountability:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Accountability in software engineering embodies the commitment to taking ownership of one&apos;s actions, decisions, and the resulting consequences. It involves a sense of responsibility that goes beyond the initial development phase, extending to the ongoing maintenance and support of software. Embracing accountability requires acknowledging mistakes, learning from them, and actively working towards rectifying any issues that may arise during the software development lifecycle.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Bug Fixes and Maintenance: A tangible application of accountability in software engineering is the prompt addressing and rectification of any bugs or issues that arise in the software after deployment. This involves a commitment to continuous improvement, with software engineers taking responsibility for the quality and reliability of their work. Timely bug fixes not only enhance the user experience but also demonstrate accountability for the ongoing performance of the software.</p>
            <br></br>
            <p className='ml-4'>Documentation: Maintaining clear and comprehensive documentation is a fundamental aspect of accountability in software engineering. Documentation facilitates transparency by providing insights into the software&apos;s architecture, functionalities, and dependencies. It serves as a reference for developers, aiding in understanding and troubleshooting issues. Robust documentation not only contributes to the maintainability of the software but also reflects a commitment to accountability by ensuring that information is readily available for the entire development team.</p>
            <br></br>
            <p className='ml-4'>User Support: Providing reliable support channels for users to report issues and seek assistance is an essential practice aligned with accountability. Establishing clear communication channels, such as help desks or user forums, demonstrates a commitment to addressing user concerns and maintaining accountability for the software&apos;s performance. Responsiveness and effectiveness in addressing user queries or problems further enhance the overall accountability of software engineers to the users and stakeholders relying on their products. These applications of accountability contribute to the development of a culture that values responsibility, continuous improvement, and user satisfaction in software engineering.</p>
          </li>
        </ol>

        <h2>Fairness and Avoidance of Discrimination:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Fairness in software engineering involves the commitment to treating all users and stakeholders equitably, devoid of favoritism or discrimination based on characteristics such as race, gender, or socio-economic status. This ethical principle underscores the importance of ensuring that software systems and products provide fair and just outcomes, promoting inclusivity and equal opportunities for all individuals interacting with the technology.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Algorithmic Fairness: A crucial application of fairness in software engineering is the implementation of measures to identify and mitigate biases in algorithms. This involves a proactive approach to ensure that algorithms, which often make critical decisions, produce fair and equitable outcomes for all users. By scrutinizing algorithms for potential biases and implementing corrective measures, software engineers contribute to building systems that prioritize fairness and avoid perpetuating discriminatory practices.</p>
            <br></br>
            <p className='ml-4'>Accessibility: Ensuring accessibility is another key application of fairness in software engineering. This involves designing software interfaces and features to be inclusive and accessible to users with diverse abilities and needs. Prioritizing accessibility ensures that all users, regardless of physical or cognitive differences, can engage with and benefit from the software, fostering a fair and equal user experience for everyone.</p>
            <br></br>
            <p className='ml-4'>Inclusivity in Design: Fairness is actively applied in software engineering through an inclusive approach to design and development. This includes considering the needs and perspectives of a diverse user base throughout the entire process, from initial design concepts to the final product. By incorporating inclusivity in design, software engineers create products that are responsive to the varied requirements of users, promoting fairness by avoiding exclusionary practices and catering to the diverse nature of the user population. These applications of fairness in software engineering contribute to the creation of technology that respects the rights and dignity of all users, fostering an ethical and inclusive software development environment.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=2TqPkyVoOvU' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=K_Uh09RAjR8' width={500}/>
          }
          </div>
        </div> 

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUOA0Ld-MHmSN8X-7SqwT-UcimWrbjhSZ3FQvILd1WC9SR5g/viewform?embedded=true" className="w-full" height="1695" >Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-2">Previous</a>
          <a className="nextButton" href="./topic-4">Next</a>
        </div>
      </div>
    </div>
  )
}