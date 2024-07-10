import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import RowList from "../../components/Rows/RowList/RowList";

const Home = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<RowList />
			<Footer />
		</>
	);
};

export default Home;
