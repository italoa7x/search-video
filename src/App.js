import React from "react";
import { Provider } from "react-redux";

import store from './storage';
import SearchBar from "./components/searchBar";
import VideoPlayer from "./components/videoPlayer";
import VideoList from "./components/videoList";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <VideoPlayer />
        <VideoList />
      </div>
    </Provider>
  );
}

export default App;
