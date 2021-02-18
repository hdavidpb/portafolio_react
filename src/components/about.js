import React, { useEffect } from "react";
import "../assets/styles/about.css";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<section data-aos="fade-up" className="about-me" id= "about">
			<h1>ABOUT ME</h1>
			<div className="about-me-text">
				Hello again , well my full name is Hernan Plaza Barrios i'm 27 years old
				systems engineer and self-taught Frontend developer, born and raised in
				Barranquilla city. I'm a sports and technology passionate person , love
				video games and movies, a good song and good food. Since I entered this
				world of web programming about 4 months ago I have been hooked and
				wanting to eat this world acquiring new knowledge every day. I hope you
				like my work.
			</div>
		</section>
	);
}
export default About;
