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
        <h1 className="text-center mb-4 mt-4">Topic 6: Ethical Considerations in AI and Machine Learning</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>The rapid advancement of Artificial Intelligence (AI) and Machine Learning (ML) technologies presents new ethical challenges. Understanding and addressing these considerations is crucial to ensure the responsible and ethical development and deployment of AI systems.</p>
        <br></br>
        
        <h2>Bias and Fairness:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Bias in AI systems occurs when these systems exhibit unjust or prejudiced treatment toward individuals or groups, often stemming from imbalances in training data or the algorithms themselves. Recognizing and addressing bias is crucial not only for ethical AI development but also for ensuring that AI technologies are fair, equitable, and do not perpetuate or exacerbate existing societal inequalities. Understanding the types of bias and implementing strategies to mitigate them are integral to fostering responsible AI development practices.</p>
          </li>
          <li>
            <h3>Types of Bias:</h3>
            <p className='ml-4'>Selection Bias: This occurs when training data is not representative of the broader population, leading to skewed models that may not generalize well to diverse groups.</p>
            <br></br>
            <p className='ml-4'>Algorithmic Bias: Arising from biases in the design and implementation of machine learning algorithms, this type of bias can perpetuate and amplify existing prejudices present in the training data.</p>
            <br></br>
            <p className='ml-4'>Historical Bias: Reflecting past inequalities present in the training data, historical bias can perpetuate discriminatory patterns and reinforce systemic disparities within AI systems.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p className='ml-4'>Fairness-aware Algorithms: Developing algorithms that explicitly consider fairness metrics is a proactive approach to mitigating bias. By incorporating fairness considerations into the design and evaluation of algorithms, developers can work toward ensuring equitable outcomes for all users.</p>
            <br></br>
            <p className='ml-4'>Bias Audits: Conducting thorough assessments of datasets and models is essential to identify and rectify biases. Regular bias audits help developers understand the potential sources of bias and take corrective actions to enhance the fairness of AI systems.</p>
            <br></br>
            <p className='ml-4'>Diverse and Representative Data: Ensuring that training data is diverse and representative of the population it aims to serve is fundamental to mitigating bias. By incorporating a wide range of perspectives and experiences into the training data, developers can enhance the generalizability of AI models and reduce the likelihood of biased outcomes. Addressing bias and fostering fairness in AI and ML systems is an ongoing process that requires continuous vigilance, transparency, and a commitment to ethical AI practices.</p>
          </li>
        </ol>

        <h2>Transparency and Explainability:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Transparency and explainability in AI encompass the capacity to comprehend how a system arrives at decisions and the ability to communicate this information effectively to stakeholders. This is a fundamental aspect of responsible AI development, ensuring accountability and fostering user trust in AI systems. By providing insights into the decision-making process, transparency and explainability contribute to ethical AI practices and help mitigate potential risks associated with biased or erroneous outcomes.</p>
          </li>
          <li>
            <h3>Importance:</h3>
            <p className='ml-4'>Accountability: Transparency and explainability enable the identification and rectification of erroneous or biased decisions made by AI systems. Understanding the rationale behind AI decisions is crucial for holding developers and systems accountable for their outputs and addressing any issues that may arise.</p>
            <br></br>
            <p className='ml-4'>User Trust: Enhancing user trust is a pivotal outcome of transparency and explainability. When users have visibility into how AI systems arrive at their conclusions, they are more likely to trust and engage with these systems. This trust is foundational for widespread acceptance and adoption of AI technologies across various domains.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p className='ml-4'>Interpretability Techniques: Utilizing interpretability techniques such as LIME (Local Interpretable Model-agnostic Explanations) or SHAP (Shapley Additive Explanations) provides insights into model predictions. These techniques offer post-hoc interpretability, allowing stakeholders to understand the model&apos;s behavior without requiring intricate knowledge of its internal workings.</p>
            <br></br>
            <p className='ml-4'>Explainable AI (XAI): Implementing models and algorithms designed for explainability is a proactive approach to transparency. Explainable AI (XAI) focuses on creating models that produce interpretable and human-understandable results, making the decision-making process more transparent and accessible to a broader audience. These approaches contribute to building ethical AI systems that align with principles of fairness, accountability, and user trust.</p>
          </li>
        </ol>

        <h2>Privacy and Data Protection:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>AI systems often rely on extensive datasets, some of which may contain sensitive or personal information. Ensuring the privacy and protection of individuals&apos; data is a critical ethical consideration in AI development. This involves implementing principles and practices that safeguard the confidentiality and security of personal information, balancing the need for data-driven insights with the imperative to respect individuals&apos; privacy rights.</p>
          </li>
          <li>
            <h3>Key Principles:</h3>
            <p className='ml-4'>Data Minimization: One key principle is data minimization, advocating for the collection and use of only the data necessary for the intended purpose. This helps mitigate the risk of unnecessary exposure and potential misuse of sensitive information.</p>
            <br></br>
            <p className='ml-4'>Anonymization and Pseudonymization: Anonymizing or pseudonymizing personally identifiable information adds an extra layer of protection. By either removing or encrypting such data, developers can reduce the risk of individual identification while still deriving valuable insights from the aggregated data.</p>
            <br></br>
            <p className='ml-4'>Informed Consent: Obtaining clear and informed consent from individuals before collecting or using their data is a foundational ethical practice. This principle ensures that individuals are aware of how their data will be utilized, empowering them to make informed decisions about sharing their information.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p className='ml-4'>Privacy-preserving Techniques: Employing privacy-preserving techniques such as federated learning or differential privacy allows for training AI models without exposing raw data. Federated learning enables model training across decentralized devices without centralizing sensitive data, while differential privacy adds noise to the data, preserving privacy while still enabling meaningful analysis.</p>
            <br></br>
            <p className='ml-4'>Compliance with Data Protection Regulations: Adhering to data protection regulations such as GDPR (General Data Protection Regulation) or CCPA (California Consumer Privacy Act) is crucial. Compliance ensures that AI developers follow legal frameworks that govern the proper handling, processing, and storage of personal data, reinforcing ethical considerations and building trust with users. The application of these principles and practices contributes to the development of AI systems that prioritize privacy and data protection, aligning with ethical standards and legal requirements.</p>
          </li>
        </ol>

        <h2>Accountability and Liability:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Determining responsibility for decisions and actions taken by AI systems is crucial, especially in cases of errors, biases, or adverse outcomes. This involves establishing clear lines of accountability to ensure that individuals or entities can be held responsible for the consequences of AI-driven processes. Additionally, understanding the legal and regulatory landscape surrounding AI is essential for determining liability and accountability in various contexts.</p>
          </li>
          <li>
            <h3>Key Considerations:</h3>
            <p className='ml-4'>Human-in-the-loop Systems: Incorporating clear roles and responsibilities for human oversight and intervention in AI systems is a fundamental consideration. Defining when and how humans should be involved in the decision-making process ensures a balance between automated processes and human judgment, providing a mechanism for accountability when needed.</p>
            <br></br>
            <p className='ml-4'>Legal and Regulatory Compliance: Understanding and complying with laws and regulations related to AI and ML systems are key considerations for accountability. Legal frameworks often dictate the responsibilities of developers, users, and organizations, and compliance with these regulations is essential for determining liability in the event of adverse outcomes.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p className='ml-4'>Documentation and Logging: Maintaining thorough records of training data, models, and decisions made by AI systems is crucial for accountability. Comprehensive documentation enables stakeholders to trace the decision-making process, identify potential sources of errors or biases, and establish accountability in the event of adverse outcomes.</p>
            <br></br>
            <p className='ml-4'>Escalation Procedures: Establishing protocols for handling situations where AI systems make critical decisions is essential. Clearly defined escalation procedures ensure that responsible individuals or teams are notified promptly when AI systems encounter challenging scenarios, allowing for human intervention when necessary. This proactive approach contributes to responsible AI deployment and reinforces accountability in the decision-making process. Overall, ensuring accountability and liability in AI and ML involves a combination of clear human oversight, adherence to legal and regulatory frameworks, and robust documentation and procedures to address potential challenges and adverse outcomes.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=aGwYtUzMQUk' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=zQ0Yeh2qdiM' width={500}/>
          }
          </div>
        </div>
        
        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2PLRn8MUlv6AeV8RaRnhXUqTVewa_-7vcB7ijvnYbx6yVfQ/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-5">Previous</a>
          <a className="nextButton" href="./topic-7">Next</a>
        </div>
      </div>
    </div>
    
  )
}