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
            <p className='ml-4'>Transparency and honesty are fundamental ethical principles that require software engineers to be open, truthful, and forthright in their interactions with stakeholders, clients, and users.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Communication: Engineers should provide accurate and clear information about the capabilities, limitations, and potential risks associated with the software.</p>
            <br></br>
            <p className='ml-4'>Error Reporting: Transparently communicate any errors or shortcomings in the software to stakeholders.</p>       
            <br></br>
            <p className='ml-4'>User Expectations: Set realistic expectations about what the software can achieve to avoid over-promising and under-delivering.</p>
          </li>
        </ol>

        <h2>Integrity:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Integrity in software engineering involves acting ethically and morally, even in situations where there may be no immediate consequences for unethical behavior.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Code Quality: Engineers should strive for high-quality, reliable code that adheres to established best practices and coding standards.</p>
            <br></br>
            <p className='ml-4'>Avoiding Plagiarism: Respecting intellectual property rights by not copying or using code without proper attribution or permission.</p>
            <br></br>
            <p className='ml-4'>Conflict of Interest: Avoiding situations where personal interests conflict with professional responsibilities.</p>
          </li>
        </ol>

        <h2>Respect for Privacy:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Respecting privacy means safeguarding individuals&rsquo; rights to control their personal information and ensuring it is collected, stored, and processed in a responsible manner.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Data Handling: Implement robust data protection measures to prevent unauthorized access, use, or sharing of sensitive information.</p>
            <br></br>
            <p className='ml-4'>Informed Consent: Obtain clear and explicit consent from users before collecting and utilizing their personal data.</p>
            <br></br>
            <p className='ml-4'>Compliance with Regulations: Adhere to relevant privacy laws and regulations governing data protection.</p>
          </li>
        </ol>

        <h2>Accountability:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Accountability involves taking ownership of one&rsquo;s actions, decisions, and their consequences. It entails acknowledging mistakes and rectifying them.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Bug Fixes and Maintenance: Promptly address and rectify any bugs or issues that arise in the software after deployment.</p>
            <br></br>
            <p className='ml-4'>Documentation: Maintain clear and comprehensive documentation to facilitate transparency and accountability.</p>
            <br></br>
            <p className='ml-4'>User Support: Provide reliable support channels for users to report issues and seek assistance.</p>
          </li>
        </ol>

        <h2>Fairness and Avoidance of Discrimination:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Fairness entails treating all users and stakeholders equitably, without favoritism or discrimination based on factors such as race, gender, or socio-economic status.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Algorithmic Fairness: Implement measures to identify and mitigate biases in algorithms, ensuring fair and equitable outcomes for all users.</p>
            <br></br>
            <p className='ml-4'>Accessibility: Design software interfaces and features to be inclusive and accessible to users with diverse abilities and needs.</p>
            <br></br>
            <p className='ml-4'>Inclusivity in Design: Consider the needs and perspectives of a diverse user base during the design and development process.</p>
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