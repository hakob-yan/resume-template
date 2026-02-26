import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CV from "./components/CV";
import Provider from "./components/Provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <CV />
    </Provider>
  </StrictMode>,
);
