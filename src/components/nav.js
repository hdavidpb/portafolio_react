import React, { useRef, useState } from "react";

import logo from "../assets/img/h.jpg";
import "../assets/styles/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import About from "./about";

import { Link } from "react-scroll";

function Nav() {
  const nav = document.querySelector(".nav-item");

  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <img src={logo} alt="" />
        {toggle ? (
          <ul className="nav-item">
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <Link
              onClick={handleToggle}
              activeClass="active"
              to="more"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              More
            </Link>
          </ul>
        ) : (
          <ul className="nav-item toogleMenu">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              to="more"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              More
            </Link>
          </ul>
        )}
        {toggle ? (
          <div className="bars_menu bars_color" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        ) : (
          <div className="bars_menu" onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </nav>
    </header>
  );
}
export default Nav;
