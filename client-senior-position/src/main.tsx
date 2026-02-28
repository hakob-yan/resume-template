import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./components/CV";
import Provider from "./components/Provider";
import "./index.css";
import "./styles/fonts.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <CV />
    </Provider>
  </StrictMode>,
);
