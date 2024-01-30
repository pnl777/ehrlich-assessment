import React from "react";
import ReactDOM from "react-dom/client";
import {Auth0Provider} from "@auth0/auth0-react";
import "./_styles/styles.css";
import App from "./App";

const authZeroDomain = "dev-ttqdrecfpp8gutn1.us.auth0.com";
const authZeroClientId = "jAXXH0df85aLdShsk4jJlSiHI9NTwAhr";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authZeroDomain}
      clientId={authZeroClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
