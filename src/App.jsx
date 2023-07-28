import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/app.scss";

import { CallProvider } from "./context/CallContext.js";
import { LoadingProvider } from "./context/LoadingContext.js";
import Header from "./components/Header.jsx";
import ActivityFeed from "./pages/ActivityFeed.jsx";
import ActivityDetail from "./pages/ActivityDetail.jsx";
import Archived from "./pages/Archived.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <HashRouter>
      <LoadingProvider>
        <CallProvider>
          <div className="container">
            <Header />
            <Routes>
              <Route path="/" element={<ActivityFeed />} />
              <Route path="/call/:id" element={<ActivityDetail />} />
              <Route path="/archived" element={<Archived />} />
            </Routes>
            <Footer />
          </div>
        </CallProvider>
      </LoadingProvider>
    </HashRouter>
  );
};

export default App;
