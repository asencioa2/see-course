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
        <h1 className="text-center mb-4 mt-4">Topic 6: Ethical Considerations in AI and Machine Learning</h1>
        <h2>Introduction:</h2>
        <p>The rapid advancement of Artificial Intelligence (AI) and Machine Learning (ML) technologies presents new ethical challenges. Understanding and addressing these considerations is crucial to ensure the responsible and ethical development and deployment of AI systems.</p>
        <br></br>
        
        <h2>Bias and Fairness:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Bias in AI systems refers to the unjust or prejudiced treatment of individuals or groups, often due to imbalances in the training data or algorithms themselves.</p>
          </li>
          <li>
            <h3>Types of Bias:</h3>
            <p>Selection Bias: Occurs when training data is not representative of the broader population.</p>
            <br></br>
            <p>Algorithmic Bias: Arises from biases in the design and implementation of the ML algorithm.</p>
            <br></br>
            <p>Historical Bias: Reflects past inequalities present in the training data.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p>Fairness-aware Algorithms: Develop algorithms that explicitly consider fairness metrics to mitigate bias.</p>
            <br></br>
            <p>Bias Audits: Conduct thorough assessments of datasets and models to identify and rectify biases.</p>
            <br></br>
            <p>Diverse and Representative Data: Ensure that training data is diverse and representative of the population it aims to serve.</p>
          </li>
        </ol>

        <h2>Transparency and Explainability:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Transparency and explainability in AI refer to the ability to understand how a system makes decisions and to communicate this information to stakeholders.</p>
          </li>
          <li>
            <h3>Importance:</h3>
            <p>Accountability: Allows for identifying and rectifying erroneous or biased decisions made by AI systems.</p>
            <br></br>
            <p>User Trust: Enhances user trust by providing insights into how AI systems arrive at their conclusions.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p>Interpretability Techniques: Utilize techniques like LIME (Local Interpretable Model-agnostic Explanations) or SHAP (Shapley Additive Explanations) to provide insights into model predictions.</p>
            <br></br>
            <p>Explainable AI (XAI): Implement models and algorithms designed to produce interpretable and human-understandable results.</p>
          </li>
        </ol>

        <h2>Privacy and Data Protection:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>AI systems often rely on large amounts of data, some of which may be sensitive or personal. Protecting the privacy of individuals is a critical ethical consideration.</p>
          </li>
          <li>
            <h3>Key Principles:</h3>
            <p>Data Minimization: Collect and use only the data necessary for the intended purpose.</p>
            <br></br>
            <p>Anonymization and Pseudonymization: Remove or encrypt personally identifiable information.</p>
            <br></br>
            <p>Informed Consent: Obtain clear and informed consent from individuals before collecting or using their data.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p>Privacy-preserving Techniques: Employ techniques like federated learning or differential privacy to train models without exposing raw data.</p>
            <br></br>
            <p>Compliance with Data Protection Regulations: Adhere to regulations like GDPR or CCPA to ensure proper handling of personal data.</p>
          </li>
        </ol>

        <h2>Accountability and Liability:</h2>
        <ol>
          <li>
            <h3>Explanation:</h3>
            <p>Determining responsibility for AI-driven decisions and actions is crucial in the event of errors, biases, or adverse outcomes.</p>
          </li>
          <li>
            <h3>Key Considerations:</h3>
            <p>Human-in-the-loop Systems: Define clear roles and responsibilities for human oversight and intervention in AI systems.</p>
            <br></br>
            <p>Legal and Regulatory Compliance: Understand and comply with laws and regulations pertaining to AI and ML systems.</p>
          </li>
          <li>
            <h3>Application in AI and ML:</h3>
            <p>Documentation and Logging: Maintain thorough records of training data, models, and decisions made by AI systems.</p>
            <br></br>
            <p>Escalation Procedures: Establish protocols for handling situations where AI systems make critical decisions.</p>
          </li>
        </ol>
        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-5">Previous</a>
          <a className="nextButton" href="./topic-7">Next</a>
        </div>
      </div>
      <div className="w-2/5">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2PLRn8MUlv6AeV8RaRnhXUqTVewa_-7vcB7ijvnYbx6yVfQ/viewform?embedded=true" className="w-full" height="2355">Loading…</iframe>      
      </div>
    </div>
    
  )
}