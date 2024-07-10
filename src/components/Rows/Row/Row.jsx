import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const rowRef = useRef(null);
	const base_url = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const request = await axios.get(fetchUrl);
				setMovies(request.data.results);
			} catch (error) {
				console.log("Error fetching data:", error);
			}
		};
		fetchData();
	}, [fetchUrl]);

	const scroll = (direction) => {
		const scrollAmount = 300;
		if (direction === "left") {
			rowRef.current.scrollLeft -= scrollAmount;
		} else {
			rowRef.current.scrollLeft += scrollAmount;
		}
	};

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__container">
				<button
					className="row__arrow row__arrow-left"
					onClick={() => scroll("left")}
				>
					<ArrowBackIosIcon />
				</button>
				<div className="row__posters" ref={rowRef}>
					{movies?.map((movie, index) => (
						<Link key={index} to={`/player/${movie.id}`}>
							<img
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
								className={`row_poster ${isLargeRow ? "row__posterLarge" : ""}`}
							/>
						</Link>
					))}
				</div>
				<button
					className="row__arrow row__arrow-right"
					onClick={() => scroll("right")}
				>
					<ArrowForwardIosIcon />
				</button>
			</div>
		</div>
	);
};

export default Row;
