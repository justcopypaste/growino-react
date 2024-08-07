

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Redirect } from "react-router-dom";
import App from "App";
import Footer from "examples/Footer";

// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const userid = window.localStorage.getItem("userid")
root.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <App />
      {(() => {
        if (!userid && window.location.pathname != "/login") { return <Redirect to='/login' /> }
      })()}
    </VisionUIControllerProvider>
  </BrowserRouter>
)

