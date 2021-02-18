import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../assets/styles/social.css";

function Social() {
	return (
		<footer>
			<nav className="navegador-social">
				<ul className="social-list">
					<a href="https://www.facebook.com/hernandavid.plaza">
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
					</a>
					<a href="https://www.instagram.com/hdavidpb/">
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
					</a>
					<a href="#">
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
					</a>
					<a href="https://github.com/hdavidpb">
						<li>
							<FontAwesomeIcon icon={faGithub} />
						</li>
					</a>
				</ul>
			</nav>
		</footer>
	);
}

export default Social;
