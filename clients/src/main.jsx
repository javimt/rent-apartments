
import axios from "axios";
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';
import { Auth0Provider } from '@auth0/auth0-react';



axios.defaults.baseURL = "https://api-rent-appartament.up.railway.app";

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Provider store={store}>
      <Auth0Provider 
        domain="medellinfurnishedapartments.us.auth0.com"
        clientId="KKLguo9hEm5BOuDQDz3T6hl1TfBXiYmd"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </HashRouter>
)
