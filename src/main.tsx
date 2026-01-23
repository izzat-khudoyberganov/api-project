import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MainContextProvider } from "./context/useMainContext.tsx";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </ThemeProvider>
  </StrictMode>
);
