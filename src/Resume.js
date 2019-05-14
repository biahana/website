import React from 'react';
import './Resume.scss';
import { Link } from "react-router-dom";



class Resume extends React.Component {
  render() {
    return (
      <div className="Resume">
   
       
       <div id="root"></div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav" >
   
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">Certifications</a>
          </li>
        </ul>
      </div>
    </nav>
  
    <div className="container-fluid p-0">
  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h2 className="mb-0">Beatriz Ogura Hanashiro
            <span className="text-primary"></span>
          </h2>
          <div className="subheading mb-5"> Barclay Street · Vancouver, BC V6G1K7 · (236) 988-0078 ·
            <a id="email" href="mailto:biahana@hotmail.com">biahana@hotmail.com</a>
          </div>
          <p className="lead mb-5">MBA professional with 7 years of experience as a Business Analyst. Have worked closely with stakeholders to comprehend the overall business vision for each project and to propose processes for improvement. Skilled in identifying and documenting business requirements for system implementation using BPMN. Known for achieving and maintaining a competitive advantage by finding new ways to decrease costs and increase efficiency</p>
          <div className="social-icons">

            <a target="_blank" href="https://github.com/biahana"><i className="fa fa-github"></i></a>

            <a target="_blank" href="https://www.linkedin.com/in/beatriz-ogura-hanashiro-35082a85/"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </section>
  
      <hr className="m-0"/>
  
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>
  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Business Process Analyst</h3>
              <div className="subheading mb-3">Stefanini</div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2014 - July 2018</span>
              </div>
              <p id="title">Client: PRODESP (Sep 2014 – Feb 2015)</p>
              <p>Worked in the client side PRODESP (data processing company of the state of Sao Paulo) to analyze the needs of DETRAN (transit department of Sao Paulo). The goal of the project was to improve services to the users through automation, and this automation facilitated  many services to customers</p>
            <ul>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Interviewed the key-users who worked in DETRAN</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Designed the scenarios AS IS / TO BE</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Identified possible improvements to automate the process</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Presented to the stakeholders in the project</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Writing the analysis according to the client’s template</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Sent the analysis to the developer</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Followed the process after implementing automation</li>
              <li><i className="fa-li fa fa-trophy text-warning"></i>Interviewed the end-users to measure if was a successful automation</li>
            </ul>

            <p id="title">Client: Caixa Economica Federal (Feb 2015 – Jul 2018)</p>
              <p>Worked in the client side Caixa Economica Federal (government bank) in Sao Paulo, Brazil.
                  Using Agile method, this project aimed to write the requirements of the judicial system. Through this method, the corrections in the legacy system and new programs led to a decrease in processing time from 4 months to 3 weeks</p>
            <ul>
              
              <p> &emsp;- Discussed with the client the priority of the activities in the product backlog</p>
              <p> &emsp;- Understanding the needs of the client during the planning</p>
              <p> &emsp;- Analyzed the stories that the Product Owner created</p>
              <p> &emsp;- Analyzed in COBOL language the programs and database</p>
              <p> &emsp;- Writing the requirements according to the client’s template</p>
              <p> &emsp;- Tested the stories in the user’s system</p>
              <p> &emsp;- Presented the implementation to the stakeholders in the project</p>
            </ul>
            </div>
            
          </div>
  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Business Process Analyst</h3>
              <div className="subheading mb-3">Insper</div>
              <div className="resume-date text-md-right">
                <span className="text-primary">December 2009 - April 2014</span>
              </div>
              <p>Worked for a College in Sao Paulo, Brazil to deliver project to change the native academic system. Successfully ERP implemented academic systems using strategic and business process improvement strategies, newly developed software, and by providing decision support for ERP buying analysis. The new system properly managed and linked academic and financial information, resulting in the elimination of 70% of the operational work and reduction of errors that prevented students from receiving the correct invoices</p>
              <ul>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Finding a new academic system that fits in the college needs. For this analysis was used RFP(request for proposal) and POC (proof of concept)</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Visited colleges who was using this academic system</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Interviewed the key-users to understand the needs of the native operating system</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Identified possible improvements to automate in the new system</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Mapping the AS IS / TO BE scenarios for each department in the college which were
                  affected through the new system</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Set system parameters to make tests</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Presented to each department the process in the new system (test environment)</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Gave access to the key-users the test environment</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Discussed with each department the final configuration to implement in the new system</li>
                <li><i className="fa-li fa fa-trophy text-warning"></i>Showed to the stakeholders how the new system was customized before the “Go Live”
                  time</li>
                </ul>
              </div>
          </div>
        </div>
      </section>
  
      <hr className="m-0"/>
  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Cornerstone International Community College of Canada (Vancouver, BC - Canada)</h3>
              <div className="subheading mb-3">Diploma | Web and Mobile App Developer</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2018 - September 2020</span>
            </div>
          </div>
  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University Anhembi Morumbi (Sao Paulo,SP - Brazil)</h3>
              <div className="subheading mb-3"> Associate’s Degree | Analysis and Systems Development </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2015 - December 2017</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">FIAP (Sao Paulo,SP - Brazil)</h3>
              <div className="subheading mb-3">Post-Graduation Degree | Business Process Management</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2012 - October 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Insper (Sao Paulo,SP - Brazil)</h3>
              <div className="subheading mb-3">Post-Graduation Degree| Administration</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2005 - December 2009</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University Anhembi Morumbi (Sao Paulo,SP - Brazil)</h3>
              <div className="subheading mb-3">Bachelor’s Degree | Hotel Management</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2001 - December 2004</span>
            </div>
          </div>

        </div>
      </section>
  
      <hr className="m-0"/>
  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
  
          <ul className="list-inline dev-icons">
            <li> Requirement Gathering</li>
            <li>Analysis of Business Requirements</li>
            <li>Agile and Waterfall methodologies</li>
            <li>Strong Communication and Interpersonal skills</li>
            <li>Adaptable to change and resilience</li>
            <li>BPMN - Bizagi, Visio and ARIS</li>
            <li>HTML, CSS</li>
            <li>Java, JavaScript</li>
            <li>COBOL language</li>
          </ul>
          </div>
      </section>

      <hr className="m-0"/>
  
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="list-inline dev-icons">
            <li>FreeCodeCamp - Responsive Web Design</li>
            <li>SCRUMstudy - Scrum Fundamentals</li>
            <li>ISACA - COBIT</li>
            <li>EXIN - ITIL Fundation</li>
            <li>6sigmastudy - Yellow Belt</li>
          </ul>
        </div>
      </section>
    </div>
   
    </div>
  
    
    );
  }
}
export default Resume;
