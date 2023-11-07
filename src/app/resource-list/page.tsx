'use client'
import { useState, useEffect } from 'react';
import '../_styles/topics.css'

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
      <div className="w-full mx-12">
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

        <br/>
      </div>
    </div>
    
  )
}