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
        <h1 className="text-center mb-4 mt-4">Topic 7: Privacy and Data Ethics</h1>
        <h2>Introduction:</h2>
        <p className='ml-4'>Privacy and data ethics encompass the responsible handling, collection, storage, and usage of personal information. As technology continues to advance, safeguarding privacy and upholding data ethics have become critical concerns in various industries.</p>

        <h2>Data Privacy:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Data privacy is the safeguarding of an individual's personal information, emphasizing the need to handle such data with confidentiality, integrity, and security. It is a critical aspect of ethical and responsible data management, ensuring that individuals maintain control over their sensitive information and are protected from unauthorized access or misuse.</p>
          </li>
          <li>
            <h3>Key Components:</h3>
            <p className='ml-4'>Consent: Obtaining clear and informed consent from individuals before collecting, processing, or sharing their data is a fundamental principle of data privacy. This empowers individuals to make informed decisions about how their information is used and ensures transparency in data handling practices.</p>
            <br></br>
            <p className='ml-4'>Security Measures: Implementing robust security protocols is essential for data privacy. These measures, including encryption, access controls, and secure storage, are designed to prevent unauthorized access, breaches, or any compromise of sensitive information.</p>
            <br></br>
            <p className='ml-4'>Data Minimization: Collecting only the data necessary for the intended purpose is another key component of data privacy. This principle helps mitigate risks associated with the unnecessary exposure of personal information and ensures that data is handled responsibly.</p>
          </li>
          <li>
            <h3>Application in Various Industries:</h3>
            <p className='ml-4'>Healthcare: In the healthcare industry, data privacy is paramount for ensuring patient confidentiality. Compliance with regulations such as the Health Insurance Portability and Accountability Act (HIPAA) is essential to protect patients' medical information and maintain the trust of individuals seeking healthcare services.</p>
            <br></br>
            <p className='ml-4'>E-commerce: Data privacy is critical in e-commerce, where safeguarding customer payment information and transaction histories is of utmost importance. Adhering to privacy principles ensures that customer data is handled securely, promoting trust in online transactions and fostering a secure digital marketplace. Data privacy practices, therefore, have broad applications across diverse industries, safeguarding sensitive information and respecting individuals' privacy rights.</p>
          </li>
        </ol>

        <h2>Ethical Use of Data:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Ethical data use involves the responsible and respectful utilization of data, aligning with societal values, protecting individual rights, and avoiding harm or discrimination. In an era where data plays a pivotal role in decision-making and technological advancements, ethical considerations surrounding data use are crucial for building trust and ensuring positive societal impact.</p>
          </li>
          <li>
            <h3>Principles:</h3>
            <p className='ml-4'>Non-Discrimination: One fundamental principle of ethical data use is the commitment to non-discrimination. Data should not be wielded in ways that unfairly target or discriminate against individuals or specific groups. This principle emphasizes the importance of fostering equitable outcomes in data-driven processes.</p>
            <br></br>
            <p className='ml-4'>Beneficence: Ethical data use should prioritize beneficence, aiming to benefit individuals and society as a whole. This principle encourages leveraging data for positive impacts, such as improving services, enhancing decision-making processes, or advancing scientific research for the betterment of society.</p>
            <br></br>
            <p className='ml-4'>Transparency: Transparency is key to ethical data use. Individuals should be informed about how their data will be used, providing them with the ability to make informed decisions and granting them the right to opt out of certain uses. Transparent communication builds trust and empowers individuals to have agency over their personal information.</p>
          </li>
          <li>
            <h3>Application in Technology:</h3>
            <p className='ml-4'>AI and Machine Learning: Ethical use of data is crucial in the development and deployment of AI and machine learning systems. Implementing fairness-aware algorithms helps prevent biased or discriminatory outcomes, ensuring that these technologies operate in a manner that respects ethical principles and societal values.</p>
            <br></br>
            <p className='ml-4'>Advertising and Marketing: In the realm of advertising and marketing, ethical data use involves ensuring that targeted advertising is based on user consent and respects privacy. Adhering to ethical principles prevents intrusive or manipulative practices, fostering a more respectful and user-centric approach in the digital marketing landscape. The application of ethical data use principles in technology is essential for creating a responsible and trustworthy data ecosystem, where innovation and societal benefits coexist with ethical considerations.</p>
          </li>
        </ol>

        <h2>Consent and Informed Decision-Making:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Obtaining informed consent is a foundational ethical principle in data management, ensuring that individuals possess a clear understanding of how their data will be used and voluntarily agree to those uses. This principle aligns with the idea that individuals have the right to control and make decisions about their personal information, emphasizing transparency and respect for autonomy in data practices.</p>
          </li>
          <li>
            <h3>Key Elements:</h3>
            <p className='ml-4'>Clear Communication: The cornerstone of informed consent is clear communication. Data collectors and service providers must provide detailed information about how data will be used, avoiding complex jargon and presenting information in a language that individuals can easily comprehend. Clear communication fosters transparency and enables individuals to make informed decisions about whether to grant consent.</p>
            <br></br>
            <p className='ml-4'>Option to Opt-Out: An essential element of informed decision-making is providing individuals with the option to opt-out. This empowers individuals to decline data collection or usage without facing negative consequences. Offering this choice is crucial for respecting the autonomy and privacy preferences of individuals.</p>
          </li>
          <li>
            <h3>Application in Service Providers:</h3>
            <p className='ml-4'>Social Media Platforms: In the context of social media platforms, obtaining informed consent involves ensuring that users are aware of how their data is used, particularly for targeted advertising and third-party applications. Transparent communication about data practices builds user trust and allows individuals to make informed decisions about their participation on these platforms.</p>
            <br></br>
            <p className='ml-4'>Online Retailers: For online retailers, obtaining informed consent includes clearly communicating how customer data will be used for transactional purposes and marketing. This could involve informing customers about the use of their data for order fulfillment, personalized recommendations, or promotional campaigns. Respecting customers' privacy choices and preferences contributes to a positive and trustworthy online shopping experience.</p>
          </li>
        </ol>

        <h2>Data Governance and Compliance:</h2>
        <ol className="ml-2">
          <li>
            <h3>Explanation:</h3>
            <p className='ml-4'>Data governance is a comprehensive approach to managing and utilizing data in a way that aligns with legal and regulatory requirements. It involves establishing policies, procedures, and accountability measures to ensure that data is handled ethically, securely, and in compliance with applicable laws. Data governance is crucial for maintaining the integrity and trustworthiness of data throughout its lifecycle.</p>
          </li>
          <li>
            <h3>Key Components:</h3>
            <p className='ml-4'>Data Audits: Regular data audits are a fundamental component of data governance. These assessments help organizations evaluate their data practices and ensure compliance with relevant laws and regulations. Data audits involve a systematic review of data handling processes, security measures, and overall compliance with established standards.</p>
            <br></br>
            <p className='ml-4'>Data Protection Officers: Appointing individuals responsible for overseeing data protection efforts is another key component of effective data governance. Data Protection Officers play a crucial role in ensuring that data-related activities align with legal requirements. They provide expertise, oversight, and act as a point of contact for data protection matters within an organization.</p>
          </li>
          <li>
            <h3>Application in Industries:</h3>
            <p className='ml-4'>Financial Services: In the financial services industry, data governance is vital for complying with stringent regulations such as the General Data Protection Regulation (GDPR) or the Gramm-Leach-Bliley Act (GLBA). These regulations mandate strict controls over the handling of sensitive financial and personal information, necessitating robust data governance practices to ensure compliance and protect customer data.</p>
            <br></br>
            <p className='ml-4'>Education: Data governance is equally important in the education sector, where adherence to regulations like the Family Educational Rights and Privacy Act (FERPA) is essential to protect student records. Educational institutions need to establish strong data governance frameworks to safeguard sensitive student information, maintain compliance, and uphold the trust placed in them by students and their families.</p>
          </li>
        </ol>

        <h2>Related Videos:</h2>
        <div className='flex w-full'>
          <div>
          {
            hasWindow && <ReactPlayer className="mr-4" url='https://www.youtube.com/watch?v=bOU2r0y9X80' width={500}/>
          }
          </div>
          <div>
          {
            hasWindow && <ReactPlayer className="ml-4" url='https://www.youtube.com/watch?v=6vNxslcf9AE' width={500}/>
          }
          </div>
        </div>

        <div className="w-3/5 m-auto mt-8">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoMNoqaZgYB4CxRj4fKJsYLoz30iiDec082o8OUl1jhv9rTg/viewform?embedded=true" className="w-full" height="1900">Loading…</iframe>      
        </div>

        <div className='my-12 flex justify-around'>
          <a className="previousButton" href="./topic-6">Previous</a>
          <a className="nextButton" href="./topic-8">Next</a>
        </div>
      </div>

    </div>
    
  )
}