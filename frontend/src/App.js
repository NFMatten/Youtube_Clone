// General Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Pages Imports
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
// import { items, relatedVideos } from "./sampledata";

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
            maxResults: 12,
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
      <Routes>
        <Route exact path="/" element={<SearchPage videos={videos} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video/:videoId" element={<VideoPage videos={videos} />} />
      </Routes>
    </div>
  );
}

export default App;
