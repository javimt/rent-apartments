import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApartmentProvider } from "./ApartmenContext.jsx";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:5173/";
axios.defaults.baseURL = "https://rentapartmentsmedelin.netlify.app/"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="javi1.us.auth0.com"
        clientId="eCKamfLq8rY3XmXqjdC0GCsXEpa906u1"
        authorizationParams={{
          redirect_uri: window.location.origin, 
        }}
      >
        <ApartmentProvider>
          <App />
        </ApartmentProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
