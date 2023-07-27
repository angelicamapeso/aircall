import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";

import Header from "./components/Header.jsx";
import ActivityFeed from "./pages/ActivityFeed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import Archived from "./pages/Archived.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<ActivityFeed />} />
          <Route path="/details/:id" element={<ActivityDetail />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
