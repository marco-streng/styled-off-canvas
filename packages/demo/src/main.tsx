import React from "react";
import ReactDOM from "react-dom/client";
import { OffCanvasProvider } from "styled-off-canvas";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OffCanvasProvider>
      <App />
    </OffCanvasProvider>
  </React.StrictMode>
);
