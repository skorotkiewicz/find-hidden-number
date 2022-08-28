import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from "./contexts/DataContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
