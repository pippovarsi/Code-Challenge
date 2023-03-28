import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";
import { BrowserRouter } from "react-router-dom";

const node = document.getElementById("root") as HTMLElement;
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
