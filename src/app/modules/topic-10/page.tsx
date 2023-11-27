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
        <h1 className="text-center mb-4 mt-4">Topic 10: Building and Promoting Ethical Software</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Building and promoting ethical software involves adopting principles and practices that prioritize user well-being, fairness, transparency, and responsible use of technology. This topic explores how developers and organizations can create software that aligns with ethical standards.</p>

        <h2>User-Centric Design:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>User-centric design focuses on creating software that meets the needs and preferences of end-users while considering their well-being and satisfaction.</p>
          </li>
          <li>
            <h3>Key Principles:</h3>
            <p className='ml-4'>User Research: Understand the preferences, behaviors, and pain points of the target user base.</p>
            <br></br>
            <p className='ml-4'>Accessibility: Ensure the software is usable and accessible to users with diverse needs and abilities.</p>
            <br></br>
            <p className='ml-4'>Feedback Loops: Establish mechanisms for gathering and incorporating user feedback.</p>
          </li>
          <li>
            <h3>Application in Software Development:</h3>
            <p className='ml-4'>Empathetic Design: Designing interfaces and features with the user&rsquo;s perspective and experience in mind.</p>
            <br></br>
            <p className='ml-4'>User Testing: Conducting usability tests to validate design choices and identify areas for improvement.</p>
          </li>
        </ol>

        <h2>Ethical Considerations in Algorithm Development:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical algorithm development involves ensuring that algorithms are designed and implemented in a way that upholds fairness, avoids bias, and promotes responsible decision-making.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p className='ml-4'>Bias Mitigation: Implement techniques to identify and rectify biases in algorithms, particularly in areas like machine learning and AI.</p>
            <br></br>
            <p className='ml-4'>Explainability: Ensure that the reasoning behind algorithmic decisions is understandable and transparent to users.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Fair AI Practices: Implement techniques like fairness-aware algorithms and bias detection to promote equitable outcomes.</p>
            <br></br>
            <p className='ml-4'>Algorithmic Audits: Regularly assess algorithms for potential biases or discriminatory impacts.</p>
          </li>
        </ol>

        <h2>Data Privacy and Security:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Prioritizing data privacy and security involves safeguarding user information, protecting against unauthorized access, and adhering to relevant data protection regulations.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p className='ml-4'>Encryption: Employ strong encryption protocols to secure data during transmission and storage.</p>
            <br></br>
            <p className='ml-4'>Access Controls: Restrict access to sensitive information to authorized personnel only.</p>
          </li>
          <li>
            <h3>Application in Software Development:</h3>
            <p className='ml-4'>Privacy by Design: Integrate data protection measures into the development process from the outset.</p>
            <br></br>
            <p className='ml-4'>Compliance with Data Protection Laws: Adhere to regulations like GDPR or CCPA to ensure proper handling of personal data.</p>
          </li>
        </ol>

        <h2>Responsible Use of Technology:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Responsible use of technology involves considering the broader societal impact of software and ensuring it is used in ways that align with ethical principles.</p>
          </li>
          <li>
            <h3>Key Considerations:</h3>
            <p className='ml-4'>Avoiding Harm: Evaluate the potential risks and consequences of software usage, and take steps to mitigate harm.</p>
            <br></br>
            <p className='ml-4'>Ethical Licensing: Choose licenses that promote responsible and ethical use of software.</p>
          </li>
          <li>
            <h3>Application in Software Deployment:</h3>
            <p className='ml-4'>Ethical Use Policies: Establish policies and guidelines for the use of software to ensure it aligns with ethical standards.</p>
            <br></br>
            <p className='ml-4'>Regular Audits and Assessments: Monitor how software is being used and take corrective action if any misuse is identified.</p>
          </li>
        </ol>

        <h2>Ethical Marketing and Promotion:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical marketing and promotion involve representing software truthfully and responsibly, and avoiding misleading or deceptive practices.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p className='ml-4'>Accurate Representation: Provide honest and accurate information about the capabilities and limitations of the software.</p>
            <br></br>
            <p className='ml-4'>Respecting User Privacy: Obtain clear consent before using user testimonials or data for promotional purposes.</p>
          </li>
          <li>
            <h3>Application in Software Marketing:</h3>
            <p className='ml-4'>Clear Documentation and Descriptions: Ensure that product descriptions and documentation accurately reflect the software&rsquo;s capabilities.</p>
            <br></br>
            <p className='ml-4'>Transparent Pricing and Licensing: Clearly communicate pricing and licensing terms to potential customers.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=H9Esi2kDUsc' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=a4qBuojlkL8' width={500}/>
          }
          </div>
        </div>

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxmahThMUmoBveWzC-A3c2wI_gWgmmEE61ZzZ0adVpWrK6xg/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-9">Previous</a>
          <a className="nextButton" href="../exam-2">Exam 2</a>
        </div>
      </div>
    </div>
    
  )
}