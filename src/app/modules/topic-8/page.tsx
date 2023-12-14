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
        <h1 className="text-center mb-4 mt-4">Topic 8: Ethical Hacking and Cybersecurity</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Ethical hacking and cybersecurity play pivotal roles in safeguarding digital assets, protecting sensitive information, and ensuring the integrity of computer systems. This topic explores how ethical hacking, also known as penetration testing, is employed to identify vulnerabilities and fortify systems against malicious attacks.</p>

        <h2>Ethical Hacking:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical hacking, also known as penetration testing or white-hat hacking, involves conducting controlled and authorized attempts to infiltrate systems, networks, or applications to identify vulnerabilities, weaknesses, and security flaws. Unlike malicious hacking, ethical hacking is performed with the explicit purpose of enhancing cybersecurity by proactively identifying and addressing potential threats. Ethical hackers, often employed by organizations or hired as independent professionals, use their skills to simulate real-world cyberattacks, providing valuable insights into the security posture of digital systems.</p>
          </li>
          <li>
            <h3>Purpose:</h3>
            <p className='ml-4'>One primary purpose of ethical hacking is risk mitigation. By identifying and addressing vulnerabilities before malicious actors can exploit them, organizations can significantly reduce the likelihood of security breaches and the potential impact on their operations, data, and reputation. Another crucial purpose is security enhancement, as ethical hacking contributes to fortifying an organization's overall security posture. The insights gained from ethical hacking activities enable organizations to implement stronger security measures and stay one step ahead of potential cyber threats, creating a more resilient and robust digital environment.</p>
          </li>
          <li>
            <h3>Methodologies:</h3>
            <p className='ml-4'>Black Box Testing: In black box testing, ethical hackers simulate an attack by an outsider with no prior knowledge of the system. This approach helps assess how well an organization's defenses can withstand real-world scenarios where attackers have limited information about the target.</p>
            <br></br>
            <p className='ml-4'>White Box Testing: White box testing involves ethical hackers having full knowledge of the system's architecture and source code. This method allows for a thorough examination of internal structures and potential vulnerabilities, providing a comprehensive understanding of the system's security landscape.</p>
            <br></br>
            <p className='ml-4'>Gray Box Testing: Gray box testing strikes a balance between black box and white box testing. Testers have partial knowledge of the system, often reflecting real-world scenarios where attackers might have some information about the target. This approach offers a pragmatic assessment, considering both internal and external perspectives. Ethical hacking, with its diverse methodologies, is an integral component of proactive cybersecurity strategies, helping organizations stay ahead in the constant battle against evolving cyber threats.</p>
          </li>
        </ol>

        <h2>Vulnerability Assessment:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Vulnerability assessment is a systematic evaluation of an organization's digital infrastructure to identify weaknesses, security gaps, and potential points of exploitation. It is a critical component of proactive cybersecurity, allowing organizations to assess their vulnerability landscape and take preemptive measures to strengthen their defenses. By conducting a vulnerability assessment, organizations can gain a comprehensive understanding of potential threats, enabling them to prioritize and address vulnerabilities before they can be exploited by malicious actors.</p>
          </li>
          <li>
            <h3>Steps in Vulnerability Assessment:</h3>
            <p className='ml-4'>Discovery: The initial step involves identifying systems, devices, and applications within the network. This comprehensive discovery phase lays the groundwork for understanding the scope of the organization's digital assets, including both internal and external elements that contribute to the overall attack surface.</p>
            <br></br>
            <p className='ml-4'>Scanning: Employing specialized tools comes next, where the organization utilizes scanning tools to identify known vulnerabilities across its digital landscape. These tools systematically examine the network, seeking vulnerabilities in software, configurations, and potential entry points that could be exploited by cyber threats.</p>
            <br></br>
            <p className='ml-4'>Analysis: Following the scanning phase, the identified vulnerabilities undergo analysis. This involves evaluating the severity of each vulnerability and prioritizing them based on the potential impact on the organization's security. The analysis phase guides organizations in allocating resources effectively, addressing the most critical vulnerabilities first to maximize the impact of remediation efforts. The systematic approach of discovery, scanning, and analysis in vulnerability assessment provides organizations with actionable insights to enhance their cybersecurity posture and mitigate potential risks.</p>
          </li>
          <li>
            <h3>Penetration Testing:</h3>
            <p className='ml-4'>Network Penetration Testing: This type of testing focuses on identifying vulnerabilities in network infrastructure and services. Ethical hackers attempt to exploit weaknesses in routers, switches, firewalls, and other network components to assess the potential impact of a network-based cyberattack.</p>
            <br></br>
            <p className='ml-4'>Web Application Testing: Web applications are often targeted by cybercriminals, making this type of penetration testing essential. The evaluation concentrates on the security of web applications, searching for vulnerabilities such as SQL injection, cross-site scripting, or other weaknesses that could compromise the integrity of web-based systems.</p>
            <br></br>
            <p className='ml-4'>Social Engineering Testing: In this type of penetration testing, the susceptibility of employees to social engineering attacks is assessed. Social engineering involves manipulating individuals to divulge sensitive information or perform actions that may compromise security. This testing helps organizations understand and mitigate the human factor in cybersecurity, including vulnerabilities to phishing attacks and other manipulation techniques. The diverse approaches in penetration testing address different facets of an organization's digital landscape, contributing to a comprehensive understanding of its cybersecurity strengths and weaknesses.</p>
          </li>
        </ol>

        <h2>Cybersecurity Best Practices:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Cybersecurity best practices constitute a comprehensive set of measures and protocols designed to fortify digital environments against unauthorized access, data breaches, and a myriad of cyber threats. As the digital landscape evolves, the adoption of robust cybersecurity practices becomes imperative for organizations to safeguard their sensitive information, maintain the integrity of systems, and ensure the confidentiality of user data. These best practices are not only reactive, responding to known threats, but also proactive, aiming to establish resilient defenses that can adapt to emerging cybersecurity challenges.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p className='ml-4'>Access Control: Implementing strict access controls is fundamental to cybersecurity. This involves restricting access to sensitive information based on user roles and responsibilities. By defining and enforcing access policies, organizations can minimize the risk of unauthorized individuals gaining entry to critical systems and data.</p>
            <br></br>
            <p className='ml-4'>Firewall Implementation: Firewalls serve as a crucial line of defense by filtering and monitoring network traffic. Properly configured firewalls act as barriers, preventing unauthorized access and potential cyber threats from infiltrating an organization's network. Regularly updating firewall rules and configurations enhances their efficacy in protecting against evolving cyber threats.</p>
            <br></br>
            <p className='ml-4'>Regular Software Patching: Software vulnerabilities are often targeted by cybercriminals. Regularly patching software and applications with the latest security updates and patches is a vital practice to address known vulnerabilities. Timely patching helps eliminate potential entry points for cyber threats, reducing the risk of exploitation and enhancing the overall security posture of digital systems. Adopting these key practices contributes to building a robust cybersecurity foundation, ensuring that organizations are well-prepared to navigate the complex and dynamic landscape of cyber threats.</p>
          </li>
        </ol>

        <h2>Incident Response and Disaster Recovery:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Incident response and disaster recovery are integral components of a cybersecurity strategy, focusing on the systematic approach to handling and mitigating the aftermath of a security breach or cyberattack. Incident response is a dynamic and organized process that involves identifying, managing, and containing the impact of security incidents. On the other hand, disaster recovery encompasses comprehensive strategies to restore and resume normal operations after a major incident, ensuring the continuity of business processes. These practices are essential not only for minimizing the potential damage caused by cybersecurity incidents but also for maintaining the resilience of an organization's digital infrastructure.</p>
          </li>
          <li>
            <h3>Key Elements:</h3>
            <p className='ml-4'>Preparation: The foundation of effective incident response and disaster recovery lies in thorough preparation. This involves developing an incident response plan and establishing a disaster recovery strategy well in advance. Preparedness ensures that organizations can respond swiftly and efficiently when faced with security incidents, minimizing downtime and potential financial losses.</p>
            <br></br>
            <p className='ml-4'>Identification: Timely detection and confirmation of security incidents or breaches are crucial for initiating an effective response. Organizations deploy advanced monitoring tools and employ skilled cybersecurity professionals to identify and verify security incidents promptly, enabling a rapid and targeted response.</p>
            <br></br>
            <p className='ml-4'>Containment and Eradication: Once an incident is identified, the next critical steps involve containment and eradication. Containment measures are implemented to limit the damage and prevent the further spread of the incident. Simultaneously, efforts are directed towards eradicating the root cause of the incident, eliminating vulnerabilities, and restoring the integrity of affected systems. These key elements collectively form a proactive and responsive framework, ensuring that organizations can navigate the aftermath of security incidents with resilience and minimize the potential impact on their operations.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=XLvPpirlmEs' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=oKgnYe_6uh8&list=PLWPirh4EWFpEK7BXbMvKDYuHhA4AiYLDb' width={500}/>
          }
          </div>
        </div> 

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCCfX4bBvie969_WXA2O9IRduG8QjeeAjd1EMjHER_fV8mow/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-7">Previous</a>
          <a className="nextButton" href="./topic-9">Next</a>
        </div>
      </div>
    </div>
    
  )
}