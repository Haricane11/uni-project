import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppRouter from "./AppRouter";

// Global Styling
import "./Resources/Css/uikit.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AppRouter>
        <App />
    </AppRouter>
);
