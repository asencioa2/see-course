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
        <h1 className="text-center mb-4 mt-4">Topic 7: Privacy and Data Ethics</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Privacy and data ethics encompass the responsible handling, collection, storage, and usage of personal information. As technology continues to advance, safeguarding privacy and upholding data ethics have become critical concerns in various industries.</p>

        <h2>Data Privacy:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Data privacy involves the protection of an individual&rsquo;s personal information, ensuring that it is handled with confidentiality, integrity, and security.</p>
          </li>
          <li>
            <h3>Key Components:</h3>
            <p className='ml-4'>Consent: Individuals should provide clear and informed consent before their data is collected, processed, or shared.</p>
            <br></br>
            <p className='ml-4'>Security Measures: Robust security protocols should be in place to prevent unauthorized access or breaches.</p>
            <br></br>
            <p className='ml-4'>Data Minimization: Only collect data that is necessary for the intended purpose.</p>
          </li>
          <li>
            <h3>Application in Various Industries:</h3>
            <p className='ml-4'>Healthcare: Ensuring patient confidentiality and compliance with Health Insurance Portability and Accountability Act (HIPAA) regulations.</p>
            <br></br>
            <p className='ml-4'>E-commerce: Safeguarding customer payment information and transaction histories.</p>
          </li>
        </ol>

        <h2>Ethical Use of Data:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical data use involves ensuring that data is used in ways that align with societal values, respect individual rights, and avoid harm or discrimination.</p>
          </li>
          <li>
            <h3>Principles:</h3>
            <p className='ml-4'>Non-Discrimination: Data should not be used in ways that unfairly target or discriminate against individuals or groups.</p>
            <br></br>
            <p className='ml-4'>Beneficence: Data use should aim to benefit individuals and society as a whole.</p>
            <br></br>
            <p className='ml-4'>Transparency: Individuals should be informed about how their data will be used and have the ability to opt out.</p>
          </li>
          <li>
            <h3>Application in Technology:</h3>
            <p className='ml-4'>AI and Machine Learning: Implementing fairness-aware algorithms to prevent biased or discriminatory outcomes.</p>
            <br></br>
            <p className='ml-4'>Advertising and Marketing: Ensuring that targeted advertising is based on consent and does not infringe on privacy.</p>
          </li>
        </ol>

        <h2>Consent and Informed Decision-Making:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Obtaining informed consent means individuals have a clear understanding of how their data will be used and voluntarily agree to it.</p>
          </li>
          <li>
            <h3>Key Elements:</h3>
            <p className='ml-4'>Clear Communication: Provide detailed information about data usage in a language that individuals can understand.</p>
            <br></br>
            <p className='ml-4'>Option to Opt-Out: Individuals should have the ability to decline data collection or usage.</p>
          </li>
          <li>
            <h3>Application in Service Providers:</h3>
            <p className='ml-4'>Social Media Platforms: Ensuring users are aware of how their data is used for advertising and third-party applications.</p>
            <br></br>
            <p className='ml-4'>Online Retailers: Clearly communicating how customer data is used for transactional purposes and marketing.</p>
          </li>
        </ol>

        <h2>Data Governance and Compliance:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Data governance involves establishing policies and procedures to ensure that data is managed and used in compliance with legal and regulatory requirements.</p>
          </li>
          <li>
            <h3>Key Components:</h3>
            <p className='ml-4'>Data Audits: Regular assessments to ensure compliance with relevant laws and regulations.</p>
            <br></br>
            <p className='ml-4'>Data Protection Officers: Appointing individuals responsible for overseeing data protection efforts.</p>
          </li>
          <li>
            <h3>Application in Industries:</h3>
            <p className='ml-4'>Financial Services: Complying with regulations like the General Data Protection Regulation (GDPR) or the Gramm-Leach-Bliley Act (GLBA).</p>
            <br></br>
            <p className='ml-4'>Education: Adhering to the Family Educational Rights and Privacy Act (FERPA) to protect student records.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=bOU2r0y9X80' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=6vNxslcf9AE' width={500}/>
          }
          </div>
        </div>

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoMNoqaZgYB4CxRj4fKJsYLoz30iiDec082o8OUl1jhv9rTg/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-6">Previous</a>
          <a className="nextButton" href="./topic-8">Next</a>
        </div>
      </div>

    </div>
    
  )
}