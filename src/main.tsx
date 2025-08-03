import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@react-three/fiber";
import "@react-three/drei";

createRoot(document.getElementById("root")!).render(<App />);

initThemeMode();
