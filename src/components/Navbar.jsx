import "../styles/navbar.css";
import { useState } from "react";
import * as PropTypes from "prop-types";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const getNavLink = (link, name) => {
    return (
      <li>
        <a
          href={link}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {name}
        </a>
      </li>
    );
  };

  const mainClass = isNavExpanded
    ? "navigation-menu expanded"
    : "navigation-menu";

  return (
    <nav className="navigation">
      <Hamburger
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      />
      <div className={mainClass}>
        <ul>
          <li className="lg-item">
            <img src="favicon.png" />
          </li>
          {getNavLink("#about", "About")}
          {getNavLink("#experience", "Experience")}
          {getNavLink("#education", "Education")}
          {getNavLink("#skills", "Skills")}
          {getNavLink("#contact", "Contact")}
        </ul>
      </div>
    </nav>
  );
}
