import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./Context/ContextAPI";
import Header from "./Components/Header";
import MainFeed from "./Components/MainFeed";
import SearchBar from "./Components/SearchBar";
import VideoDetails from "./Components/VideoDetails";

function App() {
  return (
    <>
      <AppContext>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
            <Routes>
              <Route path="/" exact element={<MainFeed />} />
              <Route
                path="/searchResult/:searchQuery"
                element={<SearchBar />}
              />
              <Route path="/video/:id" element={<VideoDetails />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
