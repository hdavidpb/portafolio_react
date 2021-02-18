import React, { useEffect } from "react";
import "../assets/styles/header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <header data-aos="fade-right" className="info" id="home">
      <div className="info_general">
        <h2 className="hello">Hello!</h2>
        <h2>I'm Hernan Plaza</h2>
        <p>
          Frontend developer who likes by implementing designs that inspire your
          brand.
        </p>
      </div>
      <div className="info_legado">
        <p>DEVELOP YOUR DREAMS</p>
        <Link
          className="btn_primary"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Learn More
        </Link>
      </div>
    </header>
  );
}

export default Header;
