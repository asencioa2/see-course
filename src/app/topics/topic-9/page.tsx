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
        <h1 className="text-center mb-4 mt-4">Topic 9: Ethical Leadership and Organizational Culture</h1>
        <h2>Introduction:</h2>
        <p>Ethical leadership and organizational culture are critical elements in creating a work environment that promotes integrity, accountability, and responsible decision-making. This topic explores how ethical leadership sets the tone for an organization and influences its culture.</p>

        <h2>Ethical Leadership:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Ethical leadership is a style of management that emphasizes honesty, integrity, and transparency in decision-making and interactions with stakeholders.</p>
          </li>
          <li>
            <h3>Key Traits of Ethical Leaders:</h3>
            <p>Integrity: Upholding moral and ethical principles in all actions and decisions.</p>
            <br></br>
            <p>Accountability: Taking responsibility for one's actions and the consequences of those actions.</p>
            <br></br>
            <p>Empathy: Understanding and considering the perspectives and feelings of others.</p>
            <br></br>
            <p>Transparency: Communicating openly and honestly, especially about difficult or sensitive matters.</p>
          </li>
          <li>
            <h3>Impact on Organizational Culture:</h3>
            <p>Sets the Tone: Ethical leaders establish the expectations and values that guide the behavior of employees.</p>
            <br></br>
            <p>Fosters Trust: Employees are more likely to trust leaders who consistently demonstrate ethical behavior.</p>
            <br></br>
            <p>Encourages Ethical Decision-Making: Ethical leaders inspire employees to make responsible choices, even in challenging situations.</p>
          </li>
        </ol>

        <h2>Organizational Culture:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Organizational culture refers to the shared values, beliefs, norms, and practices that shape the behavior and interactions of individuals within a company.</p>
          </li>
          <li>
            <h3>Types of Organizational Cultures:</h3>
            <p>Innovative Culture: Encourages creativity, risk-taking, and experimentation.</p>
            <br></br>
            <p>Collaborative Culture: Emphasizes teamwork, communication, and a collective approach to problem-solving.</p>
            <br></br>
            <p>Ethical Culture: Prioritizes integrity, transparency, and ethical behavior in all aspects of the organization.</p>
          </li>
          <li>
            <h3>Building an Ethical Organizational Culture:</h3>
            <p>Lead by Example: Leaders should consistently demonstrate ethical behavior, serving as role models for employees.</p>
            <br></br>
            <p>Communicate Ethical Expectations: Clearly articulate the organization's values and expectations for ethical conduct.</p>
            <br></br>
            <p>Provide Resources and Training: Equip employees with the knowledge and tools to make ethical decisions.</p>
          </li>
        </ol>

        <h2>Ethical Decision-Making in Leadership:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Ethical decision-making involves evaluating choices and actions based on moral principles and values.</p>
          </li>
          <li>
            <h3>Steps in Ethical Decision-Making:</h3>
            <p>1. Identify the Problem: Clearly define the ethical dilemma or issue at hand.</p>
            <br></br>
            <p>2. Gather Information: Collect relevant facts and perspectives.</p>
            <br></br>
            <p>3. Evaluate Options: Consider the potential consequences and ethical implications of each option.</p>
            <br></br>
            <p>4. Make a Decision: Choose the option that aligns with ethical principles and organizational values.</p>
            <br></br>
            <p>5. Implement the Decision: Take action and communicate the decision to stakeholders.</p>
            <br></br>
            <p>6. Monitor and Reflect: Assess the outcomes and learn from the experience to inform future decisions.</p>
          </li>
        </ol>

        <h2>Promoting Ethical Behavior and Whistleblower Protection:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Fostering an environment where ethical behavior is valued and protected encourages employees to act responsibly and report misconduct.</p>
          </li>
          <li>
            <h3>Key Practices:</h3>
            <p>Clear Policies: Establish and communicate policies that outline expected ethical behavior.</p>
            <br></br>
            <p>Anonymous Reporting Mechanisms: Provide confidential channels for employees to report ethical concerns or misconduct.</p>
            <br></br>
            <p>Non-Retaliation Policies: Ensure that employees who report wrongdoing are protected from retaliation.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-8">Previous</a>
          <a className="nextButton" href="./topic-10">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScjwK6BHwHceA-iFH4pO25Afmp-ioKDeZOKEFsAW4TRD9kmYg/viewform?embedded=true" className="w-full" height="2273">Loading…</iframe>      
      </div>
    </div>
    
  )
}