import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer_outer_container">
			<div className="footer_inner_container">
				<div className="footer_icons">
					<Link to="https://www.facebook.com/apple" target="block">
						<FacebookOutlinedIcon className="FacebookOutlinedIcon" />
					</Link>
					<Link to="https://www.instagram.com/apple/" target="block">
						<InstagramIcon className="InstagramIcon" />
					</Link>
					<Link to="https://www.youtube.com/@Apple" target="block">
						<YouTubeIcon className="YouTubeIcon" />
					</Link>
				</div>
				<div className="footer_data">
					<div>
						<ul>
							<li>Audio Discription</li>
							<li>Investor Relations</li>
							<li>Legal Notice</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Help Center</li>
							<li>Jobs</li>
							<li>Cookie Preferences</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Gift Cards</li>
							<li>Terms of Use</li>
							<li>Corporate Information</li>
						</ul>
					</div>
					<div>
						<ul>
							<li>Media Center</li>
							<li>
								<Link
									to="/privacy-policy"
									style={{ color: "grey", textDecoration: "none" }}
								>
									Privacy Policy
								</Link>
							</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</div>
				<div className="service_code">
					<p>Service Code</p>
				</div>
				<div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
			</div>
		</div>
	);
};

export default Footer;
