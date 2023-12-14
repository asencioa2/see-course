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
            <p className='ml-4'>The rights-based approach to ethics, often rooted in the philosophies of thinkers like Immanuel Kant, centers on the idea of respecting and safeguarding the fundamental rights of individuals. This ethical perspective posits that certain rights are inherent, universal, and should be upheld without compromise, regardless of the potential consequences. It places a strong emphasis on the dignity and autonomy of individuals, asserting that ethical decision-making should prioritize the protection of these fundamental rights.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Rights Identification: A key application of the rights-based approach in ethical decision-making involves the identification of rights that may be affected by a particular decision or action. This process requires a careful examination of the potential impact on individual rights, ranging from basic freedoms to more complex entitlements. Identifying the rights at stake provides a foundation for ethical analysis, guiding decision-makers in evaluating the moral implications of their choices.</p>
            <br></br>
            <p className='ml-4'>Balancing Rights: Ethical decision-making within a rights-based approach necessitates considering how different rights may conflict and striving to find a balance that respects the most fundamental rights. This involves weighing the potential infringement on one right against the protection of another, seeking an ethical equilibrium that upholds the core principles of human rights. Balancing rights requires a nuanced and context-specific approach, recognizing the interconnectedness of various rights and the need to navigate potential conflicts with sensitivity and ethical discernment. The rights-based approach, by prioritizing the inviolability of fundamental rights, provides a robust framework for ethical decision-making that places the dignity and autonomy of individuals at the forefront.</p>
          </li>
        </ol>

        <h2>Virtue Ethics:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Virtue ethics, stemming from the philosophical teachings of Aristotle, centers on the cultivation of good character traits as the foundation for ethical behavior. Unlike consequentialist or deontological approaches, virtue ethics directs attention to the intrinsic qualities of individuals, emphasizing the importance of virtues such as honesty, integrity, compassion, and responsibility. This ethical framework is concerned with fostering a virtuous character that consistently makes ethically sound decisions, reflecting a commitment to moral excellence.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Virtue Cultivation: The application of virtue ethics in ethical decision-making involves actively encouraging the development of virtues among individuals and within the organization. This includes fostering a culture that values and prioritizes the cultivation of virtues like honesty, empathy, and integrity. By promoting a focus on character development, organizations can create an ethical environment that emphasizes the importance of intrinsic qualities in guiding decision-makers toward morally upright actions.</p>
            <br></br>
            <p className='ml-4'>Behavioral Standards: Virtue ethics, when applied, calls for the promotion and rewarding of behaviors that exemplify ethical virtues. Establishing clear behavioral standards aligned with virtuous conduct creates a framework for ethical decision-making. This may involve recognizing and appreciating instances where individuals demonstrate virtues such as courage or honesty. By reinforcing positive behaviors, organizations can strengthen a culture that values ethical virtues, providing a guiding framework for individuals facing ethical dilemmas. Virtue ethics, through its emphasis on character development and intrinsic virtues, offers a holistic and enduring approach to ethical decision-making that goes beyond rules and consequences.</p>
          </li>
        </ol>

        <h2>Casuistry:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Casuistry represents a case-based approach to ethical decision-making that draws its roots from moral philosophy. In casuistry, ethical dilemmas are approached by comparing the current situation with similar cases from the past, aiming to identify relevant precedents and determine the most appropriate course of action. This methodology acknowledges the complexity of ethical issues and emphasizes the importance of context, nuance, and real-world situations in guiding decision-makers toward morally sound choices.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Case Analysis: The application of casuistry in ethical decision-making involves a thorough analysis of the current ethical situation by comparing it with similar historical cases. This requires a detailed examination of the facts, circumstances, and outcomes of past cases that share similarities with the present dilemma. By drawing parallels between cases, decision-makers gain insights into potential ethical principles, considerations, and resolutions that may be applicable to the current scenario.</p>
            <br></br>
            <p className='ml-4'>Identify Relevant Factors: Casuistry requires decision-makers to identify relevant factors by considering both the similarities and differences between the current ethical dilemma and historical cases. This process involves assessing the nuances of each situation, recognizing the unique aspects that may impact the decision. By identifying relevant factors, decision-makers can navigate the complexities of the ethical landscape, making informed choices that align with ethical principles while accounting for the specific details of the case at hand. Casuistry, through its emphasis on real-world cases and contextual analysis, offers a pragmatic and nuanced approach to ethical decision-making that recognizes the importance of precedent and practical considerations.</p>
          </li>
        </ol>

        <h2>Principle of Utility (Utilitarianism):</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Utilitarianism, associated with philosophers such as John Stuart Mill, is a consequentialist ethical theory that evaluates the morality of an action based on its overall utility in maximizing happiness or minimizing harm for the greatest number of people. It posits that the right action is the one that produces the greatest overall balance of pleasure over pain, emphasizing the collective well-being of individuals within a society.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Cost-Benefit Analysis: The application of utilitarianism in ethical decision-making involves conducting a thorough cost-benefit analysis. Decision-makers weigh the potential positive and negative consequences of a particular action, considering how it will impact the well-being and happiness of individuals affected. By quantifying and comparing the expected outcomes, decision-makers can assess which course of action is likely to result in the greatest overall utility, aligning with the utilitarian principle of maximizing overall happiness.</p>
            <br></br>
            <p className='ml-4'>Consider Stakeholder Impact: Utilitarianism requires decision-makers to consider the impact on different stakeholders. By evaluating how various individuals or groups will be affected by a decision, decision-makers can make choices that promote the greatest overall well-being. This involves recognizing the diverse interests and perspectives of stakeholders and striving to maximize utility for the entire community. Considering stakeholder impact ensures that ethical decisions are made with a holistic view, taking into account the broader implications for the well-being of individuals within the affected community. Utilitarianism, through its focus on maximizing overall happiness, provides a pragmatic and consequentialist approach to ethical decision-making that prioritizes the greatest good for the greatest number.</p>
          </li>
        </ol>

        <h2>Ethical Pluralism:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical pluralism is a perspective that recognizes the existence of multiple valid ethical principles and contends that different situations may require different ethical approaches. This approach embraces the diversity of ethical frameworks and encourages a comprehensive consideration of various perspectives when making ethical decisions. Ethical pluralism acknowledges that there is no one-size-fits-all solution to ethical dilemmas, and it emphasizes the importance of context, nuance, and flexibility in navigating complex moral issues.</p>
          </li>
          <li>
            <h3>Application in Ethical Decision-Making:</h3>
            <p className='ml-4'>Multi-Perspective Evaluation: : The application of ethical pluralism in ethical decision-making involves a thorough and multi-perspective evaluation. Decision-makers consider and weigh different ethical principles that may apply to the situation, recognizing that there can be valid insights from various ethical perspectives. This comprehensive examination ensures that ethical decisions are informed by a nuanced understanding of the diverse principles that may be relevant to a particular context.</p>
            <br></br>
            <p className='ml-4'>Balancing Conflicting Principles: Ethical pluralism is particularly valuable in situations where multiple valid ethical principles may compete or conflict. Decision-makers navigate these complexities by balancing conflicting principles, striving to find a harmonious and ethical resolution. This might involve identifying common ground, prioritizing certain principles in specific contexts, or adapting ethical approaches to suit the unique aspects of the situation. By embracing ethical pluralism, decision-makers can respond to the dynamic and multifaceted nature of ethical dilemmas, fostering a more inclusive and adaptive approach to ethical decision-making.</p>
          </li>
          <li>
            <h3>Applying Ethical Decision-Making Frameworks:</h3>
            <h4>1. Privacy and Data Handling:</h4>
            <p className='ml-4'>Rights-Based Approach: In the context of privacy and data handling, a rights-based approach involves protecting individuals&apos; right to privacy and data security. This framework emphasizes the inviolability of certain rights and requires decision-makers to prioritize the safeguarding of personal information, respecting the autonomy and dignity of individuals.</p>
            <br></br>
            <p className='ml-4'>Virtue Ethics: Virtue ethics, when applied to privacy and data handling, focuses on cultivating virtues like integrity and responsibility in the handling of sensitive information. This ethical framework emphasizes the importance of developing good character traits, encouraging individuals to act with honesty and conscientiousness in managing and safeguarding data. The virtues cultivated in this approach contribute to a culture of trust and responsibility in handling privacy-related matters.</p>
            <h4>2. Algorithmic Fairness:</h4>
            <p className='ml-4'>Casuistry: Casuistry, when applied to algorithmic fairness, involves a case-based approach to decision-making. In the context of algorithmic bias, decision-makers may utilize casuistry by comparing the current situation with similar historical cases to inform their decision-making process. This requires a careful analysis of past instances where algorithmic systems exhibited bias, considering factors such as context, outcomes, and ethical considerations. By drawing parallels with historical cases, decision-makers can gain insights into potential ethical principles, challenges, and resolutions, contributing to a more informed and contextually sensitive approach to addressing algorithmic fairness.</p>
            <br></br>
            <p className='ml-4'>Principle of Utility: The principle of utility, rooted in utilitarianism, is applicable to algorithmic fairness by evaluating the impact of algorithmic decisions on a broad range of stakeholders. Utilitarianism emphasizes maximizing overall happiness and minimizing harm, making it relevant in assessing the consequences of algorithmic choices. In the context of algorithmic fairness, decision-makers can apply the principle of utility by conducting a comprehensive evaluation of how different stakeholders, including individuals directly affected by the algorithms, are impacted. This involves considering not only the immediate outcomes but also the long-term consequences on the well-being and satisfaction of various groups within the user base. By prioritizing the greatest overall utility, decision-makers contribute to creating algorithms that are more equitable and considerate of the diverse interests and needs of the user community.</p>
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