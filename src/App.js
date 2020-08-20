import React from "react";
import SearchBar from './components/searchBar';
import VideoPlayer from './components/videoPlayer';
import VideoList from './components/videoList';
import "./App.css";

function App() {
  return (
  <div className="container">
    <SearchBar/>
    <VideoPlayer/>
    <VideoList/>
  </div>
  );
}

export default App;