import React from "react";
import "./css/app.css";

import Header from "./components/Header.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

export default App;
