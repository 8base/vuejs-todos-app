import { Auth, AUTH_STRATEGIES } from "@8base/auth";

// You can get this info from authentication settings page
const AUTH0_CLIENT_ID = "p24uWnr2gGUxhUEUBOdfooYJSUIAX2E7";
const AUTH0_CLIENT_DOMAIN = "secure.8base.com";

// Auth0 auth client
export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0,
    subscribable: true
  },
  {
    clientId: AUTH0_CLIENT_ID,
    domain: AUTH0_CLIENT_DOMAIN,
    // Don't forget set custom domains in the authentication settings!
    redirectUri: `${window.location.origin}/auth/callback`,
    logoutRedirectUri: `${window.location.origin}/`
  }
);
