import React, { useEffect } from "react";
import proyect1 from "../assets/img/img1.jpg";
import imagesProyects from "../assets/img/imagesProyects";


import FolderItems from "./folder-items";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/folder.css";

function Folder() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos="fade-up" className="Folder-container" id="projects">
			<h1>SOME PROJECTS</h1>
			<div className="portafolio-container">
				{imagesProyects.map((el, i) => (
					<FolderItems
						key={el.key}
						tittle={el.titlle}
						href={el.href}
						proyect={el.proyect}
					/>
				))}
			</div>
		</div>
	);
}

export default Folder;
