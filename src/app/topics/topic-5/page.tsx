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
        <h1 className="text-center mb-4 mt-4">Topic 5: Legal and Regulatory Aspects</h1>
        <h2>Introduction:</h2>
        <p>Understanding the legal and regulatory landscape in software engineering is crucial for ensuring compliance, protecting intellectual property, and mitigating legal risks associated with software development and deployment.</p>
        
        <h2>Intellectual Property (IP) Rights:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Intellectual property encompasses legal rights that protect creations of the mind, such as inventions, literary and artistic works, and symbols, names, and images used in commerce.</p>
          </li>
          <li>
            <h3>Types of IP Rights:</h3>
            <p>Copyright: Protects original works of authorship (e.g., code, software).</p>
            <br></br>
            <p>Patent: Grants exclusive rights to an invention for a certain period.</p>
            <br></br>
            <p>Trademark: Protects symbols, names, and slogans used to identify goods or services.</p>
            <br></br>
            <p>Trade Secret: Protects confidential and proprietary information.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Copyright: Developers automatically hold copyright over their code, giving them exclusive rights to reproduce, distribute, and display it.</p>
            <br></br>
            <p>Open Source Licensing: Different licenses (e.g., GPL, MIT) grant specific permissions and restrictions for using and distributing open-source software.</p>
            <br></br>
            <p>Patents: Can apply to novel software-related inventions, though patenting software can be complex and controversial.</p>
          </li>
        </ol>

        <h2>Data Privacy and Protection:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Data privacy and protection laws regulate the collection, processing, and storage of personal data to safeguard individuals' rights and privacy.</p>
          </li>
          <li>
            <h3>Key Regulations:</h3>
            <p>General Data Protection Regulation (GDPR): Applies to the processing of personal data within the European Union and the European Economic Area.</p>
            <br></br>
            <p>California Consumer Privacy Act (CCPA): Provides data privacy rights to California residents and imposes obligations on businesses handling their personal information.</p>
            <br></br>
            <p>Health Insurance Portability and Accountability Act (HIPAA): Regulates the handling of healthcare data in the United States.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Data Encryption: Implement strong encryption protocols to protect sensitive information during transmission and storage.</p>
            <br></br>
            <p>User Consent: Obtain clear and informed consent from users before collecting, storing, or processing their personal data.</p>
            <br></br>
            <p>Data Access Controls: Restrict access to personal data to authorized personnel only.</p>
          </li>
        </ol>        

        <h2>Cybersecurity and Compliance:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Cybersecurity involves protecting computer systems, networks, and data from theft, damage, or unauthorized access.</p>
          </li>
          <li>
            <h3>Key Regulations:</h3>
            <p>Payment Card Industry Data Security Standard (PCI DSS): Ensures secure handling of credit card information.</p>
            <br></br>
            <p>Health Information Portability and Accountability Act (HIPAA): Includes provisions for securing healthcare data.</p>
            <br></br>
            <p>ISO/IEC 27001: Provides a framework for establishing, implementing, maintaining, and continually improving an information security management system.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Secure Coding Practices: Employ secure coding techniques to prevent common vulnerabilities like SQL injection, cross-site scripting, etc.</p>
            <br></br>
            <p>Regular Security Audits: Conduct routine security assessments to identify and address potential vulnerabilities.</p>
            <br></br>
            <p>Incident Response Plans: Have protocols in place for handling security incidents and breaches.</p>
          </li>
        </ol>  

        <h2>Compliance with Industry-Specific Regulations:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Certain industries have specific regulations governing software development and usage.</p>
          </li>
          <li>
            <h3>Examples:</h3>
            <p>Finance: Financial institutions must comply with regulations like the Sarbanes-Oxley Act (SOX) and the Dodd-Frank Wall Street Reform and Consumer Protection Act.</p>
            <br></br>
            <p>Healthcare: The Health Insurance Portability and Accountability Act (HIPAA) imposes strict requirements on healthcare software systems.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p>Domain-Specific Expertise: Understand and adhere to industry-specific compliance requirements when developing software for regulated sectors.</p>
            <br></br>
            <p>Audits and Certifications: Seek relevant certifications and undergo audits to demonstrate compliance.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-4">Previous</a>
          <a className="nextButton" href="./topic-6">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnWoQ81oOGOG_Dx98drmMqkHmk4yoPGAVA7TbYZF3afnHBoA/viewform?embedded=true" className="w-full" height="2108">Loading…</iframe>      
      </div>
    </div>
    
  )
}