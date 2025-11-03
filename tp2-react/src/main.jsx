import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "./components/Counter.jsx";
import { Login } from "./components/login.jsx";
import { App } from "./pages/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
