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
        <h1 className="text-center mb-4 mt-4">Topic 1: Introduction to Software Engineering Ethics</h1>
        <h2>Defining Software Engineering Ethics:</h2>
        <p>Software Engineering Ethics refers to the set of moral principles and values that guide the behavior and decisions of professionals in the field of software development. It encompasses the responsibilities and obligations that software engineers have towards their clients, users, colleagues, and the broader society.</p>

        <h2>The Significance of Software Engineering Ethics:</h2>
        <ol className="list-decimal">
          <li>
            <h3>User Well-being and Safety:</h3>
            <p>Ethical software development prioritizes the safety, security, and well-being of end-users. It ensures that software functions as intended and does not pose any harm.</p>
          </li>
          <li>
            <h3>Trust and Reputation:</h3>
            <p>Upholding ethical standards is crucial for establishing and maintaining trust with clients, stakeholders, and the public. Companies that adhere to ethical practices are more likely to build a positive reputation.</p>
          </li>
          <li>
            <h3>Legal Compliance:</h3>
            <p>Adhering to ethical guidelines helps software development teams avoid legal troubles and liabilities. It ensures that projects are in compliance with relevant laws and regulations.</p>
          </li>
          <li>
            <h3>Long-term Viability:</h3>
            <p>Ethical practices contribute to the sustainability of software projects. By avoiding shortcuts or questionable tactics, software engineers create a solid foundation for long-term success.</p>
          </li>
        </ol>

        <h2>Core Principles of Software Engineering Ethics:</h2>
        <ol className="list-decimal">
          <li>
            <h3>Transparency and Honesty:</h3>
            <p>Engineers should be transparent about the capabilities and limitations of their software. They must provide accurate information to stakeholders and users.</p>
          </li>
          <li>
            <h3>Integrity:</h3>
            <p>Software engineers should act with integrity, meaning they should be honest and fair in their dealings. This includes not misrepresenting facts, respecting intellectual property, and avoiding conflicts of interest.</p>
          </li>
          <li>
            <h3>Respect for Privacy:</h3>
            <p>Upholding privacy rights is paramount. Engineers should handle sensitive data responsibly and obtain proper consent when collecting, storing, or processing personal information.</p>
          </li>
          <li>
            <h3>Accountability:</h3>
            <p>Engineers should take responsibility for their work. This involves acknowledging and rectifying mistakes, as well as ensuring that software meets the required quality standards.</p>
          </li>
        </ol>

        <h2>Ethical Dilemmas in Software Engineering:</h2>
        <ol className="list-decimal">
          <li>
            <h3>Balancing Innovation and Safety:</h3>
            <p>Engineers may face the dilemma of pushing boundaries to innovate while ensuring the safety and reliability of the software.</p>
          </li>
          <li>
            <h3>Data Privacy vs. Functionality:</h3>
            <p>Developers must strike a balance between providing robust functionality and safeguarding users' data and privacy.</p>
          </li>
          <li>
            <h3>Open Source vs. Proprietary Software:</h3>
            <p>Choosing between open-source and proprietary solutions involves considering the broader ethical implications of accessibility, ownership, and community contributions.</p>
          </li>
          <li>
            <h3>Responsibility for AI and Automation:</h3>
            <p>With the rise of AI, engineers need to grapple with issues like algorithmic bias, fairness, and the potential consequences of autonomous systems.</p>
          </li>
        </ol>

        <h2>Establishing a Framework for Ethical Decision-Making:</h2>
        <ol className="list-decimal">
          <li>
            <h3>Utilitarianism:</h3>
            <p>This approach evaluates the consequences of an action, aiming to maximize overall happiness or minimize overall harm. In software development, this might involve considering the impact on users, stakeholders, and society at large.</p>
          </li>
          <li>
            <h3>Deontology:</h3>
            <p>Deontology emphasizes adherence to a set of moral principles or rules, regardless of the outcomes. For instance, respecting user privacy might be a fundamental ethical rule.</p>
          </li>
          <li>
            <h3>Virtue Ethics:</h3>
            <p>Virtue ethics focuses on the development of good character traits. Software engineers should cultivate virtues like honesty, integrity, and responsibility in their professional conduct.</p>
          </li>
          <li>
            <h3>Social Contract Theory:</h3>
            <p>This theory asserts that ethical actions are those that adhere to a mutually agreed-upon social contract. In software engineering, this could relate to following industry standards and best practices.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="#">Previous</a>
          <a className="nextButton" href="./topic-2">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe_3B-9wcGxI7idUsEhcbx_LhQJQXqsT-tVCl2R04xzvGl0yg/viewform?embedded=true" className="w-full" height="2095">Loading…</iframe>
      </div>
    </div>
    
  )
}