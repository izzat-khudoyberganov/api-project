import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MainContextProvider } from "./context/useMainContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>
);
