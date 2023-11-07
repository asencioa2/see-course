'use client'
import { useState, useEffect } from 'react';
import '../../_styles/topics.css'
export default function Page({ params }: { params: { slug: string } }) {
    
  const [isMobile, setIsMobile] = useState(false)
      
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
    <div className="flex">
      <div className="w-3/5">
        <h1 className="text-center mb-4 mt-4">Topic 3: Ethical Principles in Software Engineering</h1>
        <h2>Introduction:</h2>
        <p>Ethical principles in software engineering provide a framework for professionals to navigate complex moral dilemmas and make decisions that uphold integrity, responsibility, and user trust.</p>
        <br></br>

        <h2>Transparency and Honesty:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Transparency and honesty are fundamental ethical principles that require software engineers to be open, truthful, and forthright in their interactions with stakeholders, clients, and users.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Communication: Engineers should provide accurate and clear information about the capabilities, limitations, and potential risks associated with the software.</p>
            <br></br>
            <p>Error Reporting: Transparently communicate any errors or shortcomings in the software to stakeholders.</p>       
            <br></br>
            <p>User Expectations: Set realistic expectations about what the software can achieve to avoid over-promising and under-delivering.</p>
          </li>
        </ol>

        <h2>Integrity:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Integrity in software engineering involves acting ethically and morally, even in situations where there may be no immediate consequences for unethical behavior.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Code Quality: Engineers should strive for high-quality, reliable code that adheres to established best practices and coding standards.</p>
            <br></br>
            <p>Avoiding Plagiarism: Respecting intellectual property rights by not copying or using code without proper attribution or permission.</p>
            <br></br>
            <p>Conflict of Interest: Avoiding situations where personal interests conflict with professional responsibilities.</p>
          </li>
        </ol>

        <h2>Respect for Privacy:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Respecting privacy means safeguarding individuals' rights to control their personal information and ensuring it is collected, stored, and processed in a responsible manner.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Data Handling: Implement robust data protection measures to prevent unauthorized access, use, or sharing of sensitive information.</p>
            <br></br>
            <p>Informed Consent: Obtain clear and explicit consent from users before collecting and utilizing their personal data.</p>
            <br></br>
            <p>Compliance with Regulations: Adhere to relevant privacy laws and regulations governing data protection.</p>
          </li>
        </ol>

        <h2>Accountability:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Accountability involves taking ownership of one's actions, decisions, and their consequences. It entails acknowledging mistakes and rectifying them.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Bug Fixes and Maintenance: Promptly address and rectify any bugs or issues that arise in the software after deployment.</p>
            <br></br>
            <p>Documentation: Maintain clear and comprehensive documentation to facilitate transparency and accountability.</p>
            <br></br>
            <p>User Support: Provide reliable support channels for users to report issues and seek assistance.</p>
          </li>
        </ol>

        <h2>Fairness and Avoidance of Discrimination:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Fairness entails treating all users and stakeholders equitably, without favoritism or discrimination based on factors such as race, gender, or socio-economic status.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Algorithmic Fairness: Implement measures to identify and mitigate biases in algorithms, ensuring fair and equitable outcomes for all users.</p>
            <br></br>
            <p>Accessibility: Design software interfaces and features to be inclusive and accessible to users with diverse abilities and needs.</p>
            <br></br>
            <p>Inclusivity in Design: Consider the needs and perspectives of a diverse user base during the design and development process.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-2">Previous</a>
          <a className="nextButton" href="./topic-4">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfUOA0Ld-MHmSN8X-7SqwT-UcimWrbjhSZ3FQvILd1WC9SR5g/viewform?embedded=true" className="w-full" height="1997" >Loading…</iframe>      
      </div>
    </div>
    
  )
}