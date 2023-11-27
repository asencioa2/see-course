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
        <h1 className="text-center mb-4 mt-4">Topic 2: Ethical Theories and Frameworks</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Ethical theories and frameworks provide structured approaches to evaluating and resolving moral dilemmas. In software engineering, understanding these theories is crucial for making informed, ethically sound decisions.</p>
        <br></br>

        <h2>Utilitarianism:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Utilitarianism is a consequentialist ethical theory that evaluates the morality of an action based on its outcomes. It asserts that an action is morally right if it maximizes overall happiness or minimizes overall harm.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the context of software development, utilitarianism could be applied by assessing the consequences of a particular feature or design choice. For example, if implementing a new feature increases user satisfaction and productivity without compromising security, it aligns with utilitarian principles.</p>
          </li>
        </ol>

        <h2>Deontology:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Deontology is a non-consequentialist ethical theory that emphasizes adherence to a set of moral principles or rules, regardless of the outcomes. It asserts that some actions are inherently right or wrong, irrespective of their consequences.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>Deontology is relevant in scenarios involving privacy, intellectual property, and user rights. For instance, respecting user privacy by obtaining clear consent before collecting data aligns with deontological principles.</p>
          </li>
        </ol>

        <h2>Virtue Ethics:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Virtue ethics focuses on the development of good character traits. It asserts that ethical behavior arises from cultivating virtues like honesty, integrity, and responsibility.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the software industry, virtue ethics encourages developers to prioritize qualities that promote trust and professionalism. Acting with integrity in code development, being transparent about limitations, and taking responsibility for one&rsquo;s work exemplify virtue-based decision-making.</p>
          </li>
        </ol>

        <h2>Social Contract Theory:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Social Contract Theory posits that ethical actions are those that adhere to an agreed-upon social contract. This means abiding by mutually accepted norms, rules, and standards within a community or industry.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In software development, adhering to industry standards, best practices, and open-source licensing agreements aligns with Social Contract Theory. It emphasizes the importance of contributing positively to the software community.</p>
          </li>
        </ol>

        <h2>Applying Ethical Theories in Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Privacy and Data Handling:</h3>
            <p className='ml-4'>Utilitarianism: Evaluate if a data-handling practice maximizes user trust and minimizes the risk of data breaches.</p>
            <br></br>
            <p className='ml-4'>Deontology: Ensure that data collection and handling adheres to established privacy principles.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Prioritize honesty and transparency when dealing with sensitive user information.</p>
            <br></br>
            <p className='ml-4'>Social Contract Theory: Comply with legal and industry-specific data protection regulations.</p>
          </li>
          <li>
            <h3>Algorithmic Bias and Fairness:</h3>
            <p className='ml-4'>Utilitarianism: Consider the impact of algorithms on various user groups to minimize bias and maximize fairness.</p>
            <br></br>
            <p className='ml-4'>Deontology: Follow established ethical guidelines for developing and deploying algorithms, ensuring fairness in outcomes.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Promote fairness and equality as fundamental values in algorithm design and deployment.</p>
            <br></br>
            <p className='ml-4'>Social Contract Theory: Contribute to and adhere to industry-wide initiatives for fair AI practices.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=nPv6t7EvO4c' width={580}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=-a739VjqdSI' width={580}/>
          }
          </div>
        </div> 

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQXbRuskDPhaV_qmBw1y3XN0voE9U2eV9QlvwHEz2ucaAI_w/viewform?embedded=true" className="w-full" height="1695">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-1">Previous</a>
          <a className="nextButton" href="./topic-3">Next</a>
        </div>
      </div>
    </div>
    
  )
}