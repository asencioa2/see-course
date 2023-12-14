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
            <p className='ml-4'>Utilitarianism is a consequentialist ethical theory that assesses the morality of an action based on its outcomes. According to this philosophy, an action is considered morally right if it maximizes overall happiness or minimizes overall harm. Utilitarianism prioritizes the collective well-being and aims to achieve the greatest good for the greatest number of individuals, emphasizing the consequences of actions as the primary determinant of their ethical value. This approach contrasts with deontological ethics, which focuses on adhering to moral principles regardless of the outcomes.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the realm of software engineering, utilitarianism can be applied by evaluating the consequences of specific decisions, such as feature implementations or design choices. For instance, when deciding whether to introduce a new feature in a software application, software developers might consider the potential impact on user satisfaction, productivity, and overall user experience. If the implementation enhances these aspects without compromising security or introducing significant drawbacks, it aligns with utilitarian principles. Additionally, when addressing issues like software performance, accessibility, or user safety, software engineers can use utilitarianism as a guiding principle to weigh the positive and negative consequences of different approaches. By applying utilitarian thinking in software development, engineers can strive to create products that contribute positively to the well-being of users and stakeholders.</p>
          </li>
        </ol>

        <h2>Deontology:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Deontology represents a non-consequentialist ethical theory that places significance on adhering to a predetermined set of moral principles or rules, regardless of the outcomes. In contrast to consequentialist theories like utilitarianism, deontology asserts that certain actions possess intrinsic moral value, and their ethicality is not solely contingent on the consequences they produce. This ethical framework is grounded in the notion that there are fundamental principles or duties that individuals are obligated to follow, forming the basis for evaluating the morality of their actions. Deontological ethics often involves a sense of moral duty and the belief that individuals have inherent rights and responsibilities.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the domain of software engineering, deontology finds application in various scenarios, particularly those involving privacy, intellectual property, and user rights. For example, adhering to deontological principles might entail obtaining explicit and informed consent before collecting user data, irrespective of the potential benefits such data collection might bring. Respecting user privacy is considered a fundamental ethical rule, aligning with deontological principles that prioritize individual rights and the sanctity of personal information. Similarly, when dealing with intellectual property, software engineers adhering to deontological ethics would prioritize respecting copyrights and patents, recognizing the intrinsic value of protecting creators&apos; rights regardless of potential positive outcomes for the project. By applying deontological reasoning, software engineers contribute to ethical decision-making by upholding predetermined principles, fostering a sense of integrity, and respecting the fundamental rights of individuals involved in or affected by the software development process.</p>
          </li>
        </ol>

        <h2>Virtue Ethics:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Virtue ethics is an ethical framework that centers on the cultivation of good character traits as the foundation for ethical behavior. Instead of focusing on rules or the consequences of actions, virtue ethics emphasizes the development of virtues such as honesty, integrity, responsibility, and empathy. The theory asserts that individuals who possess virtuous character traits are more likely to make ethical decisions consistently, contributing to the overall betterment of themselves and their communities. Virtue ethics is concerned with fostering qualities that reflect the highest standards of moral excellence and ethical conduct.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the software engineering domain, virtue ethics encourages developers to prioritize qualities that enhance trust, professionalism, and the overall ethical climate within the industry. Acting with integrity in code development involves being truthful and transparent, ensuring that the software accurately represents its capabilities and limitations. Virtue ethics also calls for transparency about potential risks associated with the software. Taking responsibility for one&apos;s work, including acknowledging and rectifying mistakes, exemplifies the virtue of responsibility in the context of software development. Embracing virtue-based decision-making in software engineering not only contributes to the creation of high-quality, reliable software but also fosters a positive and ethical work culture. By cultivating virtues such as honesty, integrity, and responsibility, software engineers contribute to the development of a professional community that values ethical conduct and promotes the well-being of users and stakeholders.</p>
          </li>
        </ol>

        <h2>Social Contract Theory:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Social Contract Theory is an ethical framework that proposes that ethical actions are those that adhere to a mutually agreed-upon social contract. This social contract is formed by individuals within a community or society who come together to establish norms, rules, and standards to govern their interactions. The theory suggests that ethical behavior is characterized by abiding by these agreed-upon principles, and individuals have a moral obligation to uphold their end of the social contract. Social Contract Theory provides a framework for understanding ethical responsibilities within the context of collective agreements and shared expectations.</p>
          </li>
          <li>
            <h3>Application in Software Engineering:</h3>
            <p className='ml-4'>In the realm of software engineering, the application of Social Contract Theory involves adhering to industry standards, best practices, and the terms of open-source licensing agreements. By following established norms and guidelines, software developers contribute to a cohesive and ethical software community. Adherence to coding conventions, security protocols, and licensing agreements reflects a commitment to the social contract within the software development industry. Engaging positively in collaborative efforts, such as open-source contributions, also aligns with Social Contract Theory by recognizing the importance of community-driven development. This ethical framework emphasizes that ethical actions in software engineering go beyond individual preferences or interests; instead, they involve a collective commitment to fostering a collaborative and mutually beneficial environment for all members of the software community.</p>
          </li>
        </ol>

        <h2>Applying Ethical Theories in Software Engineering:</h2>
        <ol className="ml-2">
          <li>
            <h3>Privacy and Data Handling:</h3>
            <p className='ml-4'>Utilitarianism: When addressing privacy and data handling in software engineering, a utilitarian approach involves evaluating whether a particular data-handling practice maximizes user trust and minimizes the risk of data breaches. Decisions are based on the overall impact on user well-being and the prevention of harm. Utilitarianism here would weigh the benefits of data collection against potential risks, striving to create a balance that enhances user trust without compromising their privacy.</p>
            <br></br>
            <p className='ml-4'>Deontology: In the realm of data handling, deontological ethics emphasizes the importance of ensuring that data collection and handling adhere to established privacy principles. This approach is rule-based, focusing on respecting user autonomy and safeguarding individual rights. Deontology guides software engineers to follow ethical guidelines and principles, emphasizing a duty to protect user privacy regardless of the potential benefits of data collection.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Virtue ethics prompts software engineers to prioritize honesty and transparency when dealing with sensitive user information in the context of privacy. Virtue ethics focuses on the development of good character traits, including integrity and responsibility. By prioritizing these virtues, software engineers contribute to a culture of trust and ethical conduct in the handling of user data.</p>
            <br></br>
            <p className='ml-4'>Social Contract Theory: Social Contract Theory, applied to privacy and data handling, underscores the importance of complying with legal and industry-specific data protection regulations. Adherence to these agreed-upon norms and standards forms part of the collective social contract within the software community. This approach recognizes that ethical behavior is not just an individual responsibility but a shared commitment to protecting user privacy and upholding industry standards.</p>
          </li>
          <li>
            <h3>Algorithmic Bias and Fairness:</h3>
            <p className='ml-4'>Utilitarianism: When grappling with algorithmic bias and fairness, a utilitarian approach involves considering the impact of algorithms on various user groups to minimize bias and maximize overall fairness. Decisions are guided by the goal of creating algorithms that result in equitable outcomes, acknowledging the potential consequences on different demographic groups and striving for the greatest good for the greatest number.</p>
            <br></br>
            <p className='ml-4'>Deontology: In the context of algorithmic bias, deontological ethics necessitates following established ethical guidelines for developing and deploying algorithms. This involves a commitment to fairness in outcomes and the avoidance of discriminatory practices. Deontology emphasizes adherence to moral principles irrespective of the potential positive or negative consequences, fostering a sense of duty in ensuring just and equitable algorithmic decision-making.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Virtue ethics, when applied to algorithmic bias and fairness, encourages software engineers to promote fairness and equality as fundamental values in the design and deployment of algorithms. Virtue ethics emphasizes the development of good character traits, including virtues like fairness and empathy. By embodying these virtues, software engineers contribute to the creation of algorithms that prioritize equitable outcomes and uphold ethical values in decision-making processes.</p>
            <br></br>
            <p className='ml-4'>Social Contract Theory: Social Contract Theory, in the domain of algorithmic bias, calls for active contributions to and adherence to industry-wide initiatives for fair AI practices. This involves recognizing and fulfilling the collective responsibility within the software community to address biases and ensure fair treatment in algorithmic decision-making systems. Adhering to industry-wide standards and actively participating in initiatives reinforces the shared commitment to ethical AI practices as part of the social contract within the software development community.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=nPv6t7EvO4c' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=-a739VjqdSI' width={500}/>
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