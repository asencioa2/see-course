'use client'
import { useState, useEffect } from 'react';
import '../../_styles/topics.css'
import dynamic from "next/dynamic";
import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Page({ params }: { params: { slug: string } }) {

  const [isMobile, setIsMobile] = useState(false);
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
        <h1 className="text-center mb-4 mt-4">Topic 0: Introduction to Software Engineering</h1>
        <h2>What is Software Engineering:</h2>
        <p className='ml-4'>Software engineering is a systematic and disciplined approach to developing, designing, testing, and maintaining software systems. It involves applying engineering principles to the entire software development process, from requirements gathering to system maintenance.</p>

        <h2>Key Concepts in Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Software Development Life Cycle (SDLC):</h3>
            <p className='ml-4'>Explanation: SDLC is a process used by software developers to design, develop, and test high-quality software. It typically includes phases such as planning, requirements, design, implementation, testing, deployment, and maintenance.</p>
            <p className='ml-4'>Importance: Following a structured SDLC ensures a methodical and organized approach to software development, reducing errors and enhancing the overall quality of the software.</p>
          </li>
          <li>
            <h3>Requirements Engineering:</h3>
            <p className='ml-4'>Explanation: This phase involves gathering, analyzing, documenting, and managing the requirements for a software system. It lays the foundation for the entire development process.</p>
            <p className='ml-4'>Importance: Clear and accurate requirements are essential for building software that meets user expectations and business needs.</p>          
          </li>
          <li>
            <h3>Software Design:</h3>
            <p className='ml-4'>Explanation: In this phase, the system&rsquo;s architecture and design are planned based on the gathered requirements. It includes defining the structure, components, modules, interfaces, and data for the system.</p>
            <p className='ml-4'>Importance: Effective design ensures that the software is scalable, maintainable, and capable of meeting its functional and non-functional requirements.</p>          
          </li>
          <li>
            <h3>Coding/Implementation:</h3>
            <p className='ml-4'>Explanation: This is the phase where the actual code is written based on the design specifications. It involves translating the design into a programming language.</p>
            <p className='ml-4'>Importance: Proper coding practices contribute to software reliability, readability, and ease of maintenance.</p>    
          </li>
          <li>
            <h3>Software Testing:</h3>
            <p className='ml-4'>Explanation: Testing involves systematically evaluating the software to identify and fix defects. It includes unit testing, integration testing, system testing, and acceptance testing.</p>
            <p className='ml-4'>Importance: Rigorous testing ensures the software&rsquo;s correctness, reliability, and robustness.</p>    
          </li>
          <li>
            <h3>Software Maintenance:</h3>
            <p className='ml-4'>Explanation: After deployment, software undergoes maintenance to address bugs, add new features, and adapt to changing requirements.</p>
            <p className='ml-4'>Importance: Maintenance is crucial for keeping software up-to-date, secure, and aligned with evolving user needs.</p>    
          </li>
        </ol>

        <h2>Principles of Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Modularity:</h3>
            <p className='ml-4'>Explanation: Breaking down a system into smaller, manageable units or modules. Each module performs a specific function and can be developed and tested independently.</p>
            <p className='ml-4'>Importance: Modularity enhances code reusability, simplifies testing, and facilitates collaboration among developers.</p>    
          </li>
          <li>
            <h3>Abstraction:</h3>
            <p className='ml-4'>Explanation: Simplifying complex systems by focusing on essential properties and ignoring unnecessary details.</p>
            <p className='ml-4'>Importance: Abstraction allows developers to manage complexity, understand high-level concepts, and improve overall system comprehension.</p>    
          </li>
          <li>
            <h3>Encapsulation:</h3>
            <p className='ml-4'>Explanation: Bundling data and methods that operate on the data within a single unit, known as a class.</p>
            <p className='ml-4'>Importance: Encapsulation promotes information hiding, reducing dependencies between different parts of the software.</p>    
          </li>
          <li>
            <h3>Hierarchy:</h3>
            <p className='ml-4'>Explanation: Organizing software components in a hierarchical structure, typically using concepts like classes, objects, and inheritance.</p>
            <p className='ml-4'>Importance: Hierarchy simplifies system design, promotes code reuse, and enhances maintainability.</p>    
          </li>
        </ol>

        <h2>Emerging Trends in Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Agile Development:</h3>
            <p className='ml-4'>Explanation: An iterative and flexible approach to software development that emphasizes collaboration, customer feedback, and the ability to respond to change quickly.</p>
            <p className='ml-4'>Importance: Agile methodologies enhance adaptability, customer satisfaction, and the delivery of incremental, functional software.</p>    
          </li>
          <li>
            <h3>DevOps:</h3>
            <p className='ml-4'>Explanation: Integrating development and operations teams to improve collaboration and productivity throughout the software development life cycle.</p>
            <p className='ml-4'>Importance: DevOps practices aim to automate and streamline the software delivery process, reducing errors and accelerating release cycles.</p>    
          </li>
          <li>
            <h3>Machine Learning in Software Engineering:</h3>
            <p className='ml-4'>Explanation: Utilizing machine learning algorithms to automate certain software development tasks, enhance decision-making, and improve efficiency.</p>
            <p className='ml-4'>Importance: Machine learning can optimize code reviews, identify patterns, and predict potential issues, leading to improved software quality.</p>    
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=O753uuutqH8' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=zOjov-2OZ0E&t=1s' width={500}/>
          }
          </div>
        </div> 

        <div className="w-3/5 m-auto mt-8">
          <iframe title="quiz" src="https://docs.google.com/forms/d/e/1FAIpQLSdddXCY9BXJOU-nqK4tcVE6SjOAcmYety2KIZ3rFYKYuhgRpg/viewform?embedded=true" className="w-full" height="1695">Loading…</iframe>
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="#">Previous</a>
          <a className="nextButton" href="./topic-2">Next</a>
        </div>

      </div>
    </div>
    
  )
}