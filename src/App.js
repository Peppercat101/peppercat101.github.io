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
            My name is Melissa Peters. I am an enthusiastic and dedicated
            Software Developer. Developing software is not just another job but
            an extension of my identity. I care greatly about the software I
            create, in both user interface design and coding style. I have
            experience in multiple web technologies and Java-based desktop
            applications. I am a fast learner and always willing to learn new
            technologies. I enjoy helping others with coding problems and find
            it easy to understand other people's code. I have been in Canada for
            4 years, working as a Full Stack developer. My working experience
            includes agile and non-agile teams with pairing, mobbing and TDD.
          </p>
        </div>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <div className="sub-section">
            <h4>
              Software Developer{" "}
              <div className="sub-heading">Mar 2018 - present (4 years)</div>
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
            </ul>
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
