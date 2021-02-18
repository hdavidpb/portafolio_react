import React from "react";
import "../assets/styles/folder.css"

function FolderItems(props) {
	return (
		<div className="portafolio-item">
			<a href={props.href}>
				<img src={props.proyect} alt="" className="portafolio-img" />
			</a>

			<div className="portafolio-texo">
				<h3>{props.tittle}</h3>
			</div>
		</div>
	);
}

export default FolderItems;
