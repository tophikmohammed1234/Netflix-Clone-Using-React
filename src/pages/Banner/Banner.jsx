import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Banner = () => {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const request = await axios.get(requests.fetchNetflixOriginals);
				setMovie(
					request.data.results[
						Math.floor(Math.random() * request.data.results.length)
					]
				);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const truncate = (str, n) =>
		str?.length > n ? `${str.substr(0, n - 1)}...` : str;

	return (
		<div
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<h1 className="banner__description">
					{truncate(movie?.overview, 150)}
				</h1>
				<div className="hero-btns">
					<button className="btn">
						<PlayArrowIcon />
						Play
					</button>
					<button className="btn dark-btn">
						<InfoOutlinedIcon />
						More Info
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
