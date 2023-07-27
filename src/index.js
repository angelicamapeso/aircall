import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./styles/body.scss";
import "./styles/button.scss";
import "./styles/tag.scss";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
