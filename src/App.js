import "./styles/app.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <div className="content">
        <div id="about" className="section">
          <h2>About</h2>
          <p>
            My name is Melissa Peters. With over a decade of experience in software development, I specialize in creating robust full-stack
            systems. I am passionate about user experience, dedicated to designing applications that are intuitive,
            responsive, and user-friendly. I thrive on tackling complex challenges and take pride in resolving issues
            that impact both clients and developers. Collaborative by nature, I work closely with designers and
            product managers to develop features that are both useful and impactful, ensuring that every solution
            addresses real needs and drives meaningful results.
          </p>
        </div>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <div className="sub-section">
            <h4>
              Software Developer{" "}
              <div className="sub-heading">Mar 2018 - present (6 years)</div>
              <div className="sub-heading">
                Nulogy Corporation | Toronto, Canada
              </div>
            </h4>

            <ul>
              <li>
                Collaborated with project managers to select ambitious but
                realistic coding milestones on pre-release software project
                development.
              </li>
              <li>
                Implemented automated build and continuous software integration,
                monitored and improved performance continuously.
              </li>
              <li>
                Teamed with the infrastructure team to move a product from
                managed hosting to self-hosted on AWS, doing IAC in terraform.
              </li>
              <li>
                Participated in software field testing to verify the performance
                of developed projects.
              </li>
              <li>
                Updated old code bases to modern development standards,
                improving functionality.
              </li>
              <li>
                Collaborated on stages of systems development lifecycle from
                requirement gathering to production releases
              </li>
              <li>
                Documented technical workflows and knowledge to educate newly
                hired employees.
              </li>
              <li>
                Troubleshot and resolved performance issues for databases and
                software.
              </li>
              <li>
                 Expert: Acted as a key advisor to the design team by evaluating and 
                 validating thefeasibility of front-end designs, ensuring that proposed designs were practical and aligned with technicalconstraints and capabilities
               </li>
               <li>
                  Participated in the on-call rotation, leading incident responses to ensure quick recoveries and performing post-mortem analyses to prevent future issues.
               </li> 
               <li>
                  Facilitated important agile team meetings on a rotational basis, contributing to effective team collaboration and ensuring alignment with agile methodologies.
               </li>
               <li>
                  Applied test-driven development practices (TDD), including end-to-end tests, to ensure high code quality and reliable software functionality.
               </li>
               <li>
                  Initiated and facilitated cross team collaboration
                </li>     
            </ul>
            <span>       
              <b>Technology stack:</b> Ruby on Rails · React.js · GraphQL · PostgreSQL · JavaScript · Amazon Web Services (AWS) · Typescript
            </span>       
          </div>
          <div className="sub-section">
            <h4>
              Software Product Developer{" "}
              <div className="sub-heading">Jan 2013 - Dec 2017 (5 years)</div>{" "}
              <div className="sub-heading">
                GEW Technologies l Pretoria, South Africa
              </div>
            </h4>

            <div>
              <div className="title">
                Senior Software Product Developer
                <span className="sub-heading"> (01/2017 - 12/2017)</span>
              </div>
              <div className="title">
                Software Product Developer
                <span className="sub-heading"> (01/2015 - 12/2016)</span>
              </div>
              <div className="title">
                Junior Software Product Developer
                <span className="sub-heading"> (01/2013 - 12/2014)</span>
              </div>
            </div>
            <ul>
              <li>
                Managed a complete system’s development, setup and deployment in
                foreign country- outside Africa.
              </li>
              <li>
                Modified existing software to improve performance and adapt to
                new hardware.
              </li>
              <li>
                Debugged and modified software components developed Java
                products in technical programming environment. - Assisted in
                systems engineering function to facilitate product software
                combinations for user-required functions.
              </li>
              <li>
                Designed, developed and documented Java programs and modules
                according to engineering detail designs. Developed modular
                reusable product code in line with existing design practices
                with Agile focus.
              </li>
            </ul>
            <span>
              <b>Awards:</b> Excellence in software product development 2014 and
              2016
            </span>
          </div>
          <h5>
            See more on my{" "}
            <a
              href="https://www.linkedin.com/in/melissaingels/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            profile
          </h5>
        </div>
        <div id="education" className="section">
          <h2>Education</h2>
          <div className="sub-section">
            <h4>
              Honors (Computer Science), BSc Hons (Computer Science)
              <div className="sub-heading">Jan 2012 - Dec 2012</div>{" "}
              <div className="sub-heading">
                University of Pretoria | Pretoria, South Africa
              </div>
            </h4>
          </div>

          <div className="sub-section">
            <h4>
              Bachelor's degree(BIS), Multimedia
              <div className="sub-heading">Jan 2009 - Dec 2011</div>{" "}
              <div className="sub-heading">
                University of Pretoria | Pretoria, South Africa
              </div>
            </h4>
          </div>
        </div>
        <div id="skills" className="section">
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p>
            Ruby | JavaScript | Terraform | Java | SQL | CSS3 | HTML5 | PHP |
            Typescript
          </p>
          <h3>Technologies</h3>
          <p>
            React | Rails | NodeJS | Angular | GIT | AWS | Java Swing |
            PostgreSQL | Terragrunt
          </p>
          <h3>Personal</h3>
          <p>
            Passion for DevOps, CICD and Developer Experience | UI Design |
            Problem resolution and structured logical thinking abilities |
            Excellent time management and organizational skills | Good
            communication skills | Strong team player | Agile/Scrum development
            methodologies
          </p>
        </div>
        <div id="contact" className="section">
          <h2>Contact</h2>
          <div className="sub-section">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              contact@melissapeters.me
            </div>
            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/melissaingels/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Peppercat101" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
