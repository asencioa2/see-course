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
        <h1 className="text-center mb-4 mt-4">Topic 4: Ethical Decision-Making Frameworks</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Ethical decision-making frameworks serve as systematic approaches to evaluating and resolving moral dilemmas. They provide structured methods for individuals and organizations to navigate complex ethical issues and make informed, ethically sound choices.</p>

        <h2>Rights-Based Approach:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>The rights-based approach, often associated with philosophers like Immanuel Kant, emphasizes respecting and protecting the rights of individuals. It asserts that certain rights are fundamental and should not be violated, regardless of the consequences.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Rights Identification: Identify the rights that may be affected by a decision or action.</p>
            <br></br>
            <p className='ml-4'>Balancing Rights: Consider how different rights may conflict and seek a balance that respects the most fundamental rights.</p>
          </li>
        </ol>

        <h2>Virtue Ethics:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Virtue ethics, rooted in the works of Aristotle, focuses on the development of good character traits. It asserts that ethical behavior arises from cultivating virtues like honesty, integrity, and responsibility.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Virtue Cultivation: Encourage the development of virtues among individuals and within the organization.</p>
            <br></br>
            <p className='ml-4'>Behavioral Standards: Promote and reward behaviors that exemplify ethical virtues.</p>
          </li>
        </ol>

        <h2>Casuistry:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Casuistry is a case-based approach to ethical decision-making. It involves comparing a current ethical dilemma with past cases to determine the most appropriate course of action.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Case Analysis: Compare the current ethical situation with similar historical cases.</p>
            <br></br>
            <p className='ml-4'>Identify Relevant Factors: Consider the similarities and differences that may impact the decision.</p>
          </li>
        </ol>

        <h2>Principle of Utility (Utilitarianism):</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Utilitarianism, associated with philosophers like John Stuart Mill, evaluates the morality of an action based on its overall utility in maximizing happiness or minimizing harm for the greatest number of people.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Cost-Benefit Analysis: Weigh the potential positive and negative consequences of a decision.</p>
            <br></br>
            <p className='ml-4'>Consider Stakeholder Impact: Evaluate how different stakeholders will be affected by the decision.</p>
          </li>
        </ol>

        <h2>Ethical Pluralism:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical pluralism acknowledges that there are multiple valid ethical perspectives and that different situations may warrant different approaches. It encourages a comprehensive consideration of various ethical principles.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Multi-Perspective Evaluation: Consider and weigh different ethical principles that may apply to the situation.</p>
            <br></br>
            <p className='ml-4'>Balancing Conflicting Principles: Navigate situations where multiple valid ethical principles may compete.</p>
          </li>
          <li>
            <h3>Applying Ethical Decision-Making Frameworks:</h3>
            <h4>1. Privacy and Data Handling:</h4>
            <p className='ml-4'>Rights-Based Approach: Protecting individuals&rsquo; right to privacy and data security.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Cultivating virtues like integrity and responsibility in handling sensitive information.</p>
            <h4>2. Algorithmic Fairness:</h4>
            <p className='ml-4'>Casuistry: Comparing with similar historical cases of algorithmic bias to inform decision-making.</p>
            <br></br>
            <p className='ml-4'>Principle of Utility: Evaluating the impact of algorithmic decisions on a broad range of stakeholders.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=_CSbNINRXVo' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=VscA5yKEPVY' width={500}/>
          }
          </div>
        </div> 

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXmtuBwtaQtQ57NpmRiOzGRzfVYGHSdvoMhyHqrS0NwN1vMQ/viewform?embedded=true" className="w-full" height="1895">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-3">Previous</a>
          <a className="nextButton" href="./topic-5">Next</a>
        </div>
      </div>
    </div>
    
  )
}