import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "../../assets/Netflix-avatar.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { logout } from "../../firebase";

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 80) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`navbar
			${show && "nav-dark"}`}
		>
			<div className="navbar-left">
				<img src={logo} alt="Netflix Logo" width="100" />
				<ul>
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
					<li>Browse by Languages</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li>
						<SearchIcon />
					</li>
					<li>
						<NotificationsNoneIcon />
					</li>
					<li className="profile-container">
						<img
							src={AccountBoxIcon}
							alt="Profile"
							width="30"
							className="profile"
						/>
						<ArrowDropDownIcon />
						<div className="dropdown">
							<p
								onClick={() => {
									logout();
								}}
							>
								Sign Out of Netflix
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
