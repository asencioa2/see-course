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
            <p className='ml-4'>Explanation: The Software Development Life Cycle (SDLC) represents a systematic and structured approach to software development. It spans multiple phases, including planning, requirements gathering, design, implementation, testing, deployment, and maintenance. Each phase has specific objectives and deliverables, ensuring a comprehensive and organized development process.</p>
            <br></br>
            <p className='ml-4'>Importance: Following a structured SDLC is crucial for successful software development. It provides a roadmap that guides developers through the entire process, reducing the likelihood of errors and oversights. The SDLC ensures that each aspect of the software is thoroughly planned, implemented, and tested, ultimately leading to higher-quality software products.</p>
          </li>
          <li>
            <h3>Requirements Engineering:</h3>
            <p className='ml-4'>Explanation: Requirements engineering is a foundational phase in software development that involves the systematic gathering, analysis, documentation, and management of the requirements for a software system. This phase establishes the groundwork for all subsequent development activities, shaping the direction of the project and defining what the software is expected to achieve.</p>
            <br></br>
            <p className='ml-4'>Importance: Clear and accurate requirements are the bedrock of successful software development. They serve as the basis for design, implementation, and testing, ensuring that the final product aligns with user expectations and business needs. Well-defined requirements minimize misunderstandings, reduce project risks, and contribute to the overall success of the software project.</p>          
          </li>
          <li>
            <h3>Software Design:</h3>
            <p className='ml-4'>Explanation: The software design phase involves the careful planning of the system&apos;s architecture and design based on the gathered requirements. It encompasses defining the structure, components, modules, interfaces, and data architecture of the software. The goal is to create a blueprint that guides the actual implementation phase.</p>
            <br></br>
            <p className='ml-4'>Importance: Effective software design is critical for the success of a project. It ensures that the software is not only functional but also scalable, maintainable, and capable of meeting both functional and non-functional requirements. A well-thought-out design facilitates efficient coding, reduces development time, and contributes to the long-term viability of the software.</p>          
          </li>
          <li>
            <h3>Coding/Implementation:</h3>
            <p className='ml-4'>Explanation: The coding or implementation phase is where the theoretical design is translated into actual lines of code. Programmers write code based on the design specifications, implementing the algorithms and functionalities outlined in the earlier phases. This is the stage where the software begins to take tangible form, with developers using programming languages to create the executable software product.</p>
            <br></br>
            <p className='ml-4'>Importance: Proper coding practices in this phase are paramount for the overall success of the software. Writing clean, efficient, and well-documented code not only ensures that the software functions as intended but also contributes to its reliability, readability, and ease of maintenance. A well-implemented codebase facilitates collaboration among developers, reduces the likelihood of errors, and simplifies future enhancements or modifications.</p>    
          </li>
          <li>
            <h3>Software Testing:</h3>
            <p className='ml-4'>Explanation: Software testing is a systematic process of evaluating the software to identify and fix defects or issues. It includes various levels of testing such as unit testing, where individual components are tested, integration testing, which examines interactions between integrated components, system testing to verify the entire system&apos;s functionality, and acceptance testing to ensure the software meets user requirements.</p>
            <br></br>
            <p className='ml-4'>Importance: Rigorous testing is integral to ensuring the quality and reliability of the software. Thorough testing not only detects and rectifies defects but also validates that the software performs as expected under different conditions. By addressing potential issues early in the development process, software testing contributes to the overall correctness, reliability, and robustness of the final software product.</p>    
          </li>
          <li>
            <h3>Software Maintenance:</h3>
            <p className='ml-4'>Explanation: Software maintenance is a post-deployment phase where the software undergoes updates, corrections, and enhancements. This phase addresses bugs that may emerge post-deployment, introduces new features to meet evolving user needs, and adapts the software to changing environments or requirements. Maintenance ensures the software remains relevant, secure, and aligned with current technology standards.</p>
            <br></br>
            <p className='ml-4'>Importance: The importance of software maintenance cannot be overstated. It is a continuous process that keeps the software up-to-date, secure, and responsive to user feedback. Without proper maintenance, software can become outdated, vulnerable to security threats, and unable to meet changing user expectations. Timely and effective maintenance is crucial for maximizing the lifespan and value of the software product.</p>    
          </li>
        </ol>

        <h2>Principles of Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Modularity:</h3>
            <p className='ml-4'>Explanation: Modularity involves breaking down a software system into smaller, manageable units or modules, with each module designed to perform a specific function. These modules can be developed and tested independently, promoting a more systematic and organized approach to software development.</p>
            <br></br>
            <p className='ml-4'>Importance: The significance of modularity lies in its ability to enhance code reusability, simplify testing processes, and facilitate collaboration among developers. By isolating specific functionalities into modules, developers can focus on individual components without being overwhelmed by the complexity of the entire system. This approach streamlines development, promotes efficiency, and makes it easier to identify and rectify issues.</p>    
          </li>
          <li>
            <h3>Abstraction:</h3>
            <p className='ml-4'>Explanation: Abstraction involves simplifying complex software systems by focusing on essential properties and ignoring unnecessary details. It allows developers to create a high-level representation of a system, emphasizing the most critical aspects while suppressing less important specifics.</p>
            <br></br>
            <p className='ml-4'>Importance:  Abstraction is crucial in managing the inherent complexity of software systems. By emphasizing essential features, developers can create a conceptual framework that enhances overall system comprehension. Abstraction provides a clear separation between what a component does and how it achieves its functionality, making it easier to design, implement, and maintain complex software systems.</p>    
          </li>
          <li>
            <h3>Encapsulation:</h3>
            <p className='ml-4'>Explanation: Encapsulation is the practice of bundling data and the methods that operate on that data within a single unit, typically known as a class. This approach promotes the concept of information hiding, as the internal workings of a class are shielded from external entities.</p>
            <br></br>
            <p className='ml-4'>Importance: Encapsulation is vital for reducing dependencies between different parts of the software. By encapsulating data and methods within a class, developers can control access to the internal workings, limiting the potential for unintended interference. This not only enhances code organization but also contributes to the creation of more robust and maintainable software.</p>    
          </li>
          <li>
            <h3>Hierarchy:</h3>
            <p className='ml-4'>Explanation: Hierarchy involves organizing software components in a structured, hierarchical manner. This organization is often implemented using concepts such as classes, objects, and inheritance, creating a clear and organized structure for the software.</p>
            <br></br>
            <p className='ml-4'>Importance: The importance of hierarchy in software engineering lies in its ability to simplify system design, promote code reuse, and enhance maintainability. A well-structured hierarchy allows developers to understand the relationships and dependencies between different components, making it easier to extend, modify, and troubleshoot the software. Hierarchy also facilitates collaboration by providing a standardized and intuitive structure that developers can navigate and comprehend.</p>    
          </li>
        </ol>

        <h2>Emerging Trends in Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Agile Development:</h3>
            <p className='ml-4'>Explanation: Agile development is an iterative and flexible approach to software development that prioritizes collaboration, customer feedback, and the ability to respond to change quickly. It involves breaking down the development process into small, manageable increments, allowing for continuous adaptation and improvement throughout the project&apos;s lifecycle.</p>
            <br></br>
            <p className='ml-4'>Importance: The significance of agile methodologies lies in their ability to enhance adaptability, customer satisfaction, and the timely delivery of incremental, functional software. Agile practices foster a dynamic and responsive development environment, ensuring that software aligns closely with user needs, and allowing teams to make adjustments based on evolving requirements.</p>    
          </li>
          <li>
            <h3>DevOps:</h3>
            <p className='ml-4'>Explanation: DevOps is a practice that integrates development and operations teams to improve collaboration and productivity throughout the software development life cycle. It emphasizes communication, collaboration, and automation, with the goal of creating a more efficient and streamlined software delivery process.</p>
            <br></br>
            <p className='ml-4'>Importance: DevOps practices are of paramount importance in modern software engineering as they aim to automate and streamline the software delivery pipeline. By breaking down silos between development and operations, DevOps reduces errors, accelerates release cycles, and enhances overall software quality. The collaborative nature of DevOps fosters a culture of continuous improvement, where feedback loops contribute to increased efficiency and faster time-to-market.</p>    
          </li>
          <li>
            <h3>Machine Learning in Software Engineering:</h3>
            <p className='ml-4'>Explanation: Machine Learning (ML) in software engineering involves the use of algorithms to automate specific development tasks, enhance decision-making processes, and improve overall efficiency. ML applications in software engineering include code optimization, automated testing, and the identification of patterns and anomalies.</p>
            <br></br>
            <p className='ml-4'>Importance: The importance of machine learning in software engineering lies in its ability to optimize various aspects of the development life cycle. ML algorithms can enhance code reviews, identify potential issues early in the development process, and automate repetitive tasks. By leveraging machine learning, software engineers can streamline workflows, improve software quality, and make data-driven decisions that contribute to more efficient and effective software development processes.</p>    
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
          <a className="nextButton" href="./topic-1">Next</a>
        </div>

      </div>
    </div>
    
  )
}