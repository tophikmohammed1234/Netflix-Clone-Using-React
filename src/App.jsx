import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/Player.jsx/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

const App = () => {
	const navigate = useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				console.log("Logged In");
				navigate("/");
			} else {
				console.log("Logged Out");
				navigate("login");
			}
		});
	}, []);

	return (
		<>
			<ToastContainer theme="dark" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/player/:id" element={<Player />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			</Routes>
		</>
	);
};

export default App;
