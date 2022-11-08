// General Imports
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Pages Imports
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import { Box } from "@mui/material";

function App() {
	const [videos, setVideos] = useState([]);
	const navigate = useNavigate();

	useEffect(() => fetchMostPopular(), []);

	const fetchSearchVideos = async (query) => {
		try {
			const response = await axios.get(
				`https://www.googleapis.com/youtube/v3/search`,
				{
					params: {
						q: query,
						key: process.env.REACT_APP_API_KEY,
						part: "snippet",
						maxResults: 12,
						regionCode: "US",
						type: "video",
					},
				}
			);
			if (response.status === 200) {
				setVideos(response.data.items);
				navigate("/");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fetchMostPopular = async () => {
		try {
			const response = await axios.get(
				`https://www.googleapis.com/youtube/v3/videos`,
				{
					params: {
						part: "snippet",
						chart: "mostPopular",
						type: "video",
						maxResults: 12,
						regionCode: "US",
						videoCategoryId: "17",
						key: process.env.REACT_APP_API_KEY,
					},
				}
			);
			if (response.status === 200) setVideos(response.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Navbar fetchSearchVideos={fetchSearchVideos} />
			<Box sx={{ my: 5 }}>
				<Routes>
					<Route exact path="/" element={<SearchPage videos={videos} />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/video/:videoId" element={<VideoPage />} />
				</Routes>
			</Box>
		</div>
	);
}

export default App;
