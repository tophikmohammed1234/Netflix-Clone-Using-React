import React, { useEffect, useState } from "react";
import "./Player.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
	const { id } = useParams();
	const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODc1ZWQ2ZTBiZDRlYmQ0MWMyYjE2ZDRjMGEyNDUxYSIsIm5iZiI6MTcyMDA5OTAyNC44OTQ1NjYsInN1YiI6IjY2ODY2NjRhYjhhNmJhNjZkNjIyZjYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ch_wiJO9JadAfWKKh2gcJ0DZsl-z3QAeQM3024GshYo",
		},
	};
	const [apiData, setApiData] = useState({
		name: "",
		key: "",
		published_at: "",
		type: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, options);
				const data = await response.json();
				if (data.results && data.results.length > 0) {
					setApiData(data.results[0]);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [url, options]);
	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};
	return (
		<div className="player">
			<div className="back-arrow">
				<ArrowBackIosIcon onClick={handleBackClick} />
			</div>
			{apiData.key && (
				<iframe
					width="90%"
					height="90%"
					src={`https://youtube.com/embed/${apiData.key}?autoplay=1`}
					title="trailer"
					frameBorder="0"
					allowFullScreen
				></iframe>
			)}
			<div className="player-info">
				<p>{apiData.published_at.slice(0, 10)}</p>
				<p>{apiData.name}</p>
				<p>{apiData.type}</p>
			</div>
		</div>
	);
};

export default Player;
