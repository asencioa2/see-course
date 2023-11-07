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
        <h1 className="text-center mb-4 mt-4">Topic 8: Ethical Hacking and Cybersecurity</h1>
        <h2>Introduction:</h2>
        <p>Ethical hacking and cybersecurity play pivotal roles in safeguarding digital assets, protecting sensitive information, and ensuring the integrity of computer systems. This topic explores how ethical hacking, also known as penetration testing, is employed to identify vulnerabilities and fortify systems against malicious attacks.</p>

        <h2>Ethical Hacking:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Ethical hacking involves conducting controlled, authorized attempts to infiltrate systems, networks, or applications to identify vulnerabilities, weaknesses, and security flaws.</p>
          </li>
          <li>
            <h3>Purpose:</h3>
            <p>Risk Mitigation: Discovering and addressing vulnerabilities before malicious actors can exploit them.</p>
            <br></br>
            <p>Security Enhancement: Strengthening the security posture of an organization&rsquo;s digital infrastructure.</p>
          </li>
          <li>
            <h3>Methodologies:</h3>
            <p>Black Box Testing: Simulates an attack by an outsider with no prior knowledge of the system.</p>
            <br></br>
            <p>White Box Testing: Testers have full knowledge of the system&rsquo;s architecture and source code.</p>
            <br></br>
            <p>Gray Box Testing: Testers have partial knowledge of the system, often reflecting real-world scenarios.</p>
          </li>
        </ol>

        <h2>Vulnerability Assessment:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Vulnerability assessment is a systematic evaluation of an organization&rsquo;s digital infrastructure to identify weaknesses, security gaps, and potential points of exploitation.</p>
          </li>
          <li className="list-decimal">
            <h3>Steps in Vulnerability Assessment:</h3>
            <p>Discovery: Identifying systems, devices, and applications within the network.</p>
            <br></br>
            <p>Scanning: Employing specialized tools to scan for known vulnerabilities.</p>
            <br></br>
            <p>Analysis: Evaluating the severity of vulnerabilities and prioritizing them for remediation.</p>
          </li>
          <li>
            <h3>Penetration Testing:</h3>
            <p>Network Penetration Testing: Focuses on identifying vulnerabilities in network infrastructure and services.</p>
            <br></br>
            <p>Web Application Testing: Evaluates the security of web applications, searching for vulnerabilities like SQL injection or cross-site scripting.</p>
            <br></br>
            <p>Social Engineering Testing: Assesses the susceptibility of employees to phishing attacks and other manipulation techniques.</p>
          </li>
        </ol>

        <h2>Cybersecurity Best Practices:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Cybersecurity best practices encompass a range of measures and protocols aimed at fortifying digital environments against unauthorized access, data breaches, and cyber threats.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p>Access Control: Restricting access to sensitive information based on user roles and responsibilities.</p>
            <br></br>
            <p>Firewall Implementation: Employing firewalls to filter and monitor network traffic.</p>
            <br></br>
            <p>Regular Software Patching: Ensuring that software and applications are up-to-date with the latest security patches.</p>
          </li>
        </ol>

        <h2>Ethical Hacking:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Ethical hacking involves conducting controlled, authorized attempts to infiltrate systems, networks, or applications to identify vulnerabilities, weaknesses, and security flaws.</p>
          </li>
          <li>
            <h3>Purpose:</h3>
            <p>Risk Mitigation: Discovering and addressing vulnerabilities before malicious actors can exploit them.</p>
            <br></br>
            <p>Security Enhancement: Strengthening the security posture of an organization&rsquo;s digital infrastructure.</p>
          </li>
          <li>
            <h3>Methodologies:</h3>
            <p>Black Box Testing: Simulates an attack by an outsider with no prior knowledge of the system.</p>
            <br></br>
            <p>White Box Testing: Testers have full knowledge of the system&rsquo;s architecture and source code.</p>
            <br></br>
            <p>Gray Box Testing: Testers have partial knowledge of the system, often reflecting real-world scenarios.</p>
          </li>
        </ol>

        <h2>Incident Response and Disaster Recovery:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Incident response involves the systematic approach to handling and mitigating the aftermath of a security breach or cyberattack. Disaster recovery encompasses strategies to restore and resume normal operations after a major incident.</p>
          </li>
          <li>
            <h3>Key Elements:</h3>
            <p>Preparation: Developing an incident response plan and establishing a disaster recovery strategy.</p>
            <br></br>
            <p>Identification: Detecting and confirming security incidents or breaches.</p>
            <br></br>
            <p>Containment and Eradication: Taking steps to limit the damage and eliminate the root cause of the incident.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-7">Previous</a>
          <a className="nextButton" href="./topic-9">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCCfX4bBvie969_WXA2O9IRduG8QjeeAjd1EMjHER_fV8mow/viewform?embedded=true" className="w-full" height="2091">Loading…</iframe>      
      </div>
    </div>
    
  )
}