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
        <h1 className="text-center mb-4 mt-4">Topic 5: Legal and Regulatory Aspects</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Understanding the legal and regulatory landscape in software engineering is crucial for ensuring compliance, protecting intellectual property, and mitigating legal risks associated with software development and deployment.</p>
        
        <h2>Intellectual Property (IP) Rights:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Intellectual property encompasses legal rights that protect creations of the mind, such as inventions, literary and artistic works, and symbols, names, and images used in commerce.</p>
          </li>
          <li>
            <h3>Types of IP Rights:</h3>
            <p className='ml-4'>Copyright: Protects original works of authorship (e.g., code, software).</p>
            <br></br>
            <p className='ml-4'>Patent: Grants exclusive rights to an invention for a certain period.</p>
            <br></br>
            <p className='ml-4'>Trademark: Protects symbols, names, and slogans used to identify goods or services.</p>
            <br></br>
            <p className='ml-4'>Trade Secret: Protects confidential and proprietary information.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Copyright: Developers automatically hold copyright over their code, giving them exclusive rights to reproduce, distribute, and display it.</p>
            <br></br>
            <p className='ml-4'>Open Source Licensing: Different licenses (e.g., GPL, MIT) grant specific permissions and restrictions for using and distributing open-source software.</p>
            <br></br>
            <p className='ml-4'>Patents: Can apply to novel software-related inventions, though patenting software can be complex and controversial.</p>
          </li>
        </ol>

        <h2>Data Privacy and Protection:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Data privacy and protection laws regulate the collection, processing, and storage of personal data to safeguard individuals&rsquo; rights and privacy.</p>
          </li>
          <li>
            <h3>Key Regulations:</h3>
            <p className='ml-4'>General Data Protection Regulation (GDPR): Applies to the processing of personal data within the European Union and the European Economic Area.</p>
            <br></br>
            <p className='ml-4'>California Consumer Privacy Act (CCPA): Provides data privacy rights to California residents and imposes obligations on businesses handling their personal information.</p>
            <br></br>
            <p className='ml-4'>Health Insurance Portability and Accountability Act (HIPAA): Regulates the handling of healthcare data in the United States.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Data Encryption: Implement strong encryption protocols to protect sensitive information during transmission and storage.</p>
            <br></br>
            <p className='ml-4'>User Consent: Obtain clear and informed consent from users before collecting, storing, or processing their personal data.</p>
            <br></br>
            <p className='ml-4'>Data Access Controls: Restrict access to personal data to authorized personnel only.</p>
          </li>
        </ol>        

        <h2>Cybersecurity and Compliance:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Cybersecurity involves protecting computer systems, networks, and data from theft, damage, or unauthorized access.</p>
          </li>
          <li>
            <h3>Key Regulations:</h3>
            <p className='ml-4'>Payment Card Industry Data Security Standard (PCI DSS): Ensures secure handling of credit card information.</p>
            <br></br>
            <p className='ml-4'>Health Information Portability and Accountability Act (HIPAA): Includes provisions for securing healthcare data.</p>
            <br></br>
            <p className='ml-4'>ISO/IEC 27001: Provides a framework for establishing, implementing, maintaining, and continually improving an information security management system.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Secure Coding Practices: Employ secure coding techniques to prevent common vulnerabilities like SQL injection, cross-site scripting, etc.</p>
            <br></br>
            <p className='ml-4'>Regular Security Audits: Conduct routine security assessments to identify and address potential vulnerabilities.</p>
            <br></br>
            <p className='ml-4'>Incident Response Plans: Have protocols in place for handling security incidents and breaches.</p>
          </li>
        </ol>  

        <h2>Compliance with Industry-Specific Regulations:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Certain industries have specific regulations governing software development and usage.</p>
          </li>
          <li>
            <h3>Examples:</h3>
            <p className='ml-4'>Finance: Financial institutions must comply with regulations like the Sarbanes-Oxley Act (SOX) and the Dodd-Frank Wall Street Reform and Consumer Protection Act.</p>
            <br></br>
            <p className='ml-4'>Healthcare: The Health Insurance Portability and Accountability Act (HIPAA) imposes strict requirements on healthcare software systems.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Domain-Specific Expertise: Understand and adhere to industry-specific compliance requirements when developing software for regulated sectors.</p>
            <br></br>
            <p className='ml-4'>Audits and Certifications: Seek relevant certifications and undergo audits to demonstrate compliance.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=z8R7gOcy5I4' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=iyfldFelaSk' width={500}/>
          }
          </div>
        </div> 
        
        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnWoQ81oOGOG_Dx98drmMqkHmk4yoPGAVA7TbYZF3afnHBoA/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-4">Previous</a>
          <a className="nextButton" href="./topic-6">Next</a>
        </div>
      </div>
    </div>
    
  )
}