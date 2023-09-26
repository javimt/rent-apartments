import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApartmentProvider } from "./ApartmenContext.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://deploy-ik5w.onrender.com"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="rentapartmentsmedellin.us.auth0.com"
        clientId="4iut0kg2nX6PF8CCPoLh4b7LeERAF4pc"
        authorizationParams={{
          redirect_uri: window.location.origin, 
        }}
      >
          <ThemeProvider>
        <ApartmentProvider>
            <App />
        </ApartmentProvider>
          </ThemeProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
