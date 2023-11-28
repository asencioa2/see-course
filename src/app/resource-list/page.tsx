'use client'
import { useState, useEffect } from 'react';
import '../_styles/topics.css'

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
      <div className="w-full mx-12">
        <h1 className="text-center mb-4 mt-4">Resource List</h1>

        <h2>Topic 0: Introduction to Software Engineering</h2>
        <ol className="list-decimal">
          <li>
            <cite>Chen, Kenneth. &quot;Software Engineering Definition, History & Processes - Video & Lesson ...&quot; Study.Com, 2023, study.com/academy/lesson/software-engineering-definition-process-methods.html. </cite>
          </li>
          <li>
            <cite>Davis, Krissy. &quot;What Is Software Engineering?&quot; RSS, www.wearedevelopers.com/magazine/what-is-software-engineering. </cite>
          </li>
          <li>  
            <cite>&quot;Software Engineering: Introduction to Software Engineering.&quot; GeeksforGeeks, GeeksforGeeks, 2 Aug. 2023, www.geeksforgeeks.org/software-engineering-introduction-to-software-engineering/. </cite>
          </li>
          <li>  
            <cite>&quot;What Is Software Engineering?&quot; Michigan Technological University, Michigan Technological University, 2 Nov. 2023, www.mtu.edu/cs/undergraduate/software/what/. </cite>
          </li>  
          <li> 
            <cite>Yasar, Kinza. &quot;What Is Software Engineering? – TechTarget Definition.&quot; WhatIs.Com, TechTarget, 14 Mar. 2023, www.techtarget.com/whatis/definition/software-engineering. </cite>
          </li>
        </ol>
        
        <h2>Topic 1: Introduction to Software Engineering Ethics</h2>
        <ol className="list-decimal">
          <li>
            <cite>Cook, Brier. &quot;Everything to Know about Software Engineering Ethics.&quot; Fellow.App, 3 Feb. 2023, fellow.app/blog/engineering/engineering-everything-you-need-to-know-about-software-engineering-ethics/.  </cite>
          </li>
          <li>
            <cite>&quot;Ethics in Software Engineering: A Key Component of Professional Practice.&quot; Continuing Education for Professional Engineers PDHPRO, pdh-pro.com/pe-resources/ethics-in-software-engineering/.  </cite>
          </li>
          <li>  
            <cite>Gotterbarn, Don, et al. &quot;Software engineering code of ethics.&quot; Communications of the ACM, vol. 40, no. 11, 1997, pp. 110–118, https://doi.org/10.1145/265684.265699.  </cite>
          </li>
          <li>  
            <cite>Vallor, Shannon, and Arvind Narayanan. An Introduction to Software Engineering Ethics - Santa Clara University, www.scu.edu/media/ethics-center/technology-ethics/Students.pdf.  </cite>
          </li>  
        </ol>

        <h2>Topic 2: Ethical Theories and Frameworks</h2>
        <ol className="list-decimal">
          <li>
            <cite>Biable, Seblewongel E., et al. &quot;Proposed ethical framework for software requirements engineering.&quot; IET Software, vol. 17, no. 4, 2023, pp. 526–537, https://doi.org/10.1049/sfw2.12136.</cite>
          </li>
          <li>
            <cite>Hersh, Marion. &quot;Ethical engineering: Definitions, theories and Techniques.&quot; Ethical Engineering for International Development and Environmental Sustainability, 2015, pp. 15–62, https://doi.org/10.1007/978-1-4471-6618-4_2. </cite>
          </li>
          <li>  
            <cite>Summet, Valerie, and Rebecca Bates. &quot;Science fiction as an entry point for ethical frameworks in engineering and Computer Science Education.&quot; 2020 ASEE Virtual Annual Conference Content Access Proceedings, 2021, https://doi.org/10.18260/1-2--35180. </cite>
          </li>  
        </ol>

        <h2>Topic 3: Ethical Principles in Software Engineering</h2>
        <ol className="list-decimal">
          <li>
            <cite>J. Singer and N. G. Vinson, &quot;Ethical issues in empirical studies of software engineering,&quot; in IEEE Transactions on Software Engineering, vol. 28, no. 12, pp. 1171-1180, Dec. 2002, doi: 10.1109/TSE.2002.1158289. </cite>
          </li>
          <li>
            <cite>Halme, E. (2022). Ethical Tools, Methods and Principles in Software Engineering and Development: Case Ethical User Stories. In: Taibi, D., Kuhrmann, M., Mikkonen, T., Klünder, J., Abrahamsson, P. (eds) Product-Focused Software Process Improvement. PROFES 2022. Lecture Notes in Computer Science, vol 13709. Springer, Cham. https://doi.org/10.1007/978-3-031-21388-5_48  </cite>
          </li>
          <li>  
            <cite>Gotterbarn, Don, et al. &quot;Software engineering code of ethics.&quot; Communications of the ACM, vol. 40, no. 11, 1997, pp. 110–118, https://doi.org/10.1145/265684.265699.  </cite>
          </li> 
        </ol>

        <h2>Topic 4: Ethical Decision-Making Framework</h2>
        <ol className="list-decimal">
          <li>
            <cite> Banks, G., Knapp, D., Lin, L., Sanders, C., & Grand, J. (2022). Ethical decision making in the 21st century: A useful framework for industrial-organizational psychologists. Industrial and Organizational Psychology, 15(2), 220-235. doi:10.1017/iop.2021.143  </cite>
          </li>
          <li>
            <cite>Mökander, J., Axente, M. Ethics-based auditing of automated decision-making systems: intervention points and policy implications. AI & Soc 38, 153–171 (2023). https://doi.org/10.1007/s00146-021-01286-x</cite>
          </li>
          <li>  
            <cite>Nussbaumer, Alexander, et al. &quot;A framework for applying ethics‐by‐design to decision support systems for emergency management.&quot; Information Systems Journal, vol. 33, no. 1, 2021, pp. 34–55, https://doi.org/10.1111/isj.12350.</cite>
          </li>  
        </ol>

        <h2>Topic 5: Legal and Regulatory Aspects</h2>
        <ol className="list-decimal">
          <li>
            <cite>Aydemir, Fatma Başak, and Fabiano Dalpiaz. &quot;A roadmap for ethics-aware software engineering.&quot; Proceedings of the International Workshop on Software Fairness, 2018, https://doi.org/10.1145/3194770.3194778.</cite>
          </li>
          <li>
            <cite>Aydemir, Fatma Başak, and Fabiano Dalpiaz. &quot;Ethics-aware software engineering.&quot; Proceedings of the 40th International Conference on Software Engineering: Companion Proceeedings, 2018, https://doi.org/10.1145/3183440.3195075.</cite>
          </li>
          <li>  
            <cite>Kosenkov, Oleksandr, et al. &quot;Vision for an artefact-based approach to Regulatory Requirements Engineering.&quot; Proceedings of the 15th ACM / IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM), 2021, https://doi.org/10.1145/3475716.3484191.</cite>
          </li>
        </ol>

        <h2>Topic 6: Ethical Considerations in AI and Machine Learning</h2>
        <ol className="list-decimal">
          <li>
            <cite>Safdar, Nabile M., et al. &quot;Ethical considerations in Artificial Intelligence.&quot; European Journal of Radiology, vol. 122, 2020, p. 108768, https://doi.org/10.1016/j.ejrad.2019.108768.</cite>
          </li>
          <li>
            <cite>D. F. Mujtaba and N. R. Mahapatra, &quot;Ethical Considerations in AI-Based Recruitment,&quot; 2019 IEEE International Symposium on Technology and Society (ISTAS), Medford, MA, USA, 2019, pp. 1-7, doi: 10.1109/ISTAS48451.2019.8937920.</cite>
          </li>
          <li>  
            <cite>Danton S. Char, Michael D. Abràmoff & Chris Feudtner (2020) Identifying Ethical Considerations for Machine Learning Healthcare Applications, The American Journal of Bioethics, 20:11, 7-17, DOI: 10.1080/15265161.2020.1819469</cite>
          </li>
        </ol>

        <h2>Topic 7: Privacy and Data Ethics</h2>
        <ol className="list-decimal">
          <li>
            <cite>Chen, W., & Quan-Haase, A. (2020). Big Data Ethics and Politics: Toward New Understandings. Social Science Computer Review, 38(1), 3-9. https://doi.org/10.1177/0894439318810734.</cite>
          </li>
          <li>
            <cite>B. C. Stahl and D. Wright, &quot;Ethics and Privacy in AI and Big Data: Implementing Responsible Research and Innovation,&quot; in IEEE Security & Privacy, vol. 16, no. 3, pp. 26-33, May/June 2018, doi: 10.1109/MSP.2018.2701164.</cite>
          </li>
          <li>  
            <cite>Herschel, Richard, and Virginia M. Miori. &quot;Ethics & Big Data.&quot; Technology in Society, vol. 49, 2017, pp. 31–36, https://doi.org/10.1016/j.techsoc.2017.03.003.</cite>
          </li> 
        </ol>

        <h2>Topic 8: Ethical Hacking and Cybersecurity</h2>
        <ol className="list-decimal">
          <li>
            <cite>Berger, Hilary, and Andrew Jones. &quot;Cyber Security & Ethical Hacking for smes.&quot; Proceedings of the The 11th International Knowledge Management in Organizations Conference on The Changing Face of Knowledge Management Impacting Society, 2016, https://doi.org/10.1145/2925995.2926016.</cite>
          </li>
          <li>
            <cite>S. Patil, A. Jangra, M. Bhale, A. Raina and P. Kulkarni, &quot;Ethical hacking: The need for cyber security,&quot; 2017 IEEE International Conference on Power, Control, Signals and Instrumentation Engineering (ICPCSI), Chennai, India, 2017, pp. 1602-1606, doi: 10.1109/ICPCSI.2017.8391982.</cite>
          </li>
          <li>  
            <cite>Conteh, Nabie Y. &quot;Ethical Hacking, Threats, and Vulnerabilities in Cybersecurity.&quot; Ethical Hacking Techniques and Countermeasures for Cybercrime Prevention, edited by Nabie Y. Conteh, IGI Global, 2021, pp. 1-18. https://doi.org/10.4018/978-1-7998-6504-9.ch001</cite>
          </li>  
        </ol>

        <h2>Topic 9: Ethical Leadership and Organizational Culture</h2>
        <ol className="list-decimal">
          <li>
            <cite>Fraga, A. (2022). An Ethical Leadership Approach for Complex Systems Integrated into the Systems Engineering Practice. In: Squires, A.F., Wheaton, M.J., Feli, H.J. (eds) Emerging Trends in Systems Engineering Leadership. Women in Engineering and Science. Springer, Cham. https://doi.org/10.1007/978-3-031-08950-3_9</cite>
          </li>
          <li>
            <cite>Saha, Raiswa, et al. &quot;Effect of ethical leadership and corporate social responsibility on firm performance: A systematic review.&quot; Corporate Social Responsibility and Environmental Management, vol. 27, no. 2, 2019, pp. 409–429, https://doi.org/10.1002/csr.1824.</cite>
          </li>
          <li>  
            <cite>Rizwan, Muhammad, Zeeshan, Chaudhary and Mahmood, Saba. &quot;The Impact of Perceived Ethical Leadership and Organizational Culture on Job Satisfaction with the Mediating Role of Organizational Commitment in Private Educational Sector of Islamabad, Pakistan&quot; Journal of Intercultural Management, vol.9, no.1, 2017, pp.75-100. https://doi.org/10.1515/joim-2017-0004</cite>
          </li>
        </ol>

        <h2>Topic 10: Building and Promoting Ethical Software</h2>
        <ol className="list-decimal">
          <li>
            <cite>Tashiro, Jay Shiro. &quot;Ethical Analysis of Publisher and Faculty Roles in Building and Using Electronic Educational Products.&quot; JECO vol.7, no.1 2009: pp.1-17. http://doi.org/10.4018/jeco.2009010101</cite>
          </li>
          <li>
            <cite>Bubinger, H. and Dinneen, J.D. (2021), Actionable Approaches to Promote Ethical AI in Libraries. Proceedings of the Association for Information Science and Technology, 58: 682-684. https://doi.org/10.1002/pra2.528</cite>
          </li>
          <li>  
            <cite>Alidoosti, R., Lago, P., Poort, E., Razavian, M. (2023). Designing Ethics-Aware DecidArch Game to Promote Value Diversity in Software Architecture Design Decision Making. In: Antona, M., Stephanidis, C. (eds) Universal Access in Human-Computer Interaction. HCII 2023. Lecture Notes in Computer Science, vol 14020. Springer, Cham. https://doi.org/10.1007/978-3-031-35681-0_1</cite>
          </li>
        </ol>

        <br/>
      </div>
    </div>
    
  )
}