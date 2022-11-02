// General Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./components/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
	const [videos, setVideos] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => getData(), []);

	useEffect(() => {
		console.log(query, videos);
		getData(query);
	}, [query]);

	const getData = async (query) => {
		try {
			const response = await axios.get(
				`https://www.googleapis.com/youtube/v3/search`,
				{
					params: {
						q: query,
						key: process.env.REACT_APP_API_KEY,
						part: "snippet",
					},
				}
			);
			setVideos(response.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Navbar setQuery={setQuery} />
			<SearchPage videos={videos} />
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
