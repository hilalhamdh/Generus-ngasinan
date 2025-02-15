import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
// import SpinnerLoader from "./component/SpinnerLoader.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <>
    {/* <SpinnerLoader /> */}

    <StrictMode>
      <App />
    </StrictMode>
  </>
);
