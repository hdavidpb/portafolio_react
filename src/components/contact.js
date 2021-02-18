import React, { useEffect } from "react";
import perfil from "../assets/img/perfil.jpeg";
import Social from "./social";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/contact.css";

function Contacto({ children }) {


	return (
		<section  className="contacto-container" id="more">
			<div className="contacto">
				<div className="contacto-img-info">
					<div className="img-contacto">
						<img src={perfil} alt="" />
					</div>
					<div className="info-contacto">
						<h3>Hernan Plaza</h3>
						<p>Systems engineer - Frontend developer</p>
					</div>
				</div>
				<div className="contacto-datos">
					<div className="datos">
						<ul className="datos-list">
							<li>
								<FontAwesomeIcon icon={faAt} /> Hernan.plazabs@gmail.com
							</li>

							<li>
								<FontAwesomeIcon icon={faWhatsapp} />
								+57 302 3842288
							</li>
							<li>
								<FontAwesomeIcon icon={faTelegram} />
								+57 301 2418285
							</li>
						</ul>

						<Social />
						{/* <footer>
							<nav className="navegador-social">
								<ul className="social-list">
									<a href="https://www.facebook.com/hernandavid.plaza">
										<li>
											<i className="fab fa-facebook"></i>
										</li>
									</a>
									<a href="https://www.instagram.com/hdavidpb/">
										<li>
											<i className="fab fa-instagram"></i>
										</li>
									</a>
									<a href="#">
										<li>
											<i className="fab fa-twitter"></i>
										</li>
									</a>
									<a href="https://github.com/hdavidpb">
										<li>
											<i className="fab fa-github"></i>
										</li>
									</a>
								</ul>
							</nav>
						</footer> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacto;
