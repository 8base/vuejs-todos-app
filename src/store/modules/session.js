import auth from "@/utils/auth.js";
import * as gql from "@/utils/api";
import graphqlClient from "@/utils/graphql";

const AUTH_PROFILE_ID = "cjz1n3hw700ae01mlhe4tfepw";

/**
 * State maintains the authentication state using Vuex.
 */
const state = {
  authenticated: !!localStorage.getItem("access_token"),
  accessToken: localStorage.getItem("access_token"),
  idToken: localStorage.getItem("id_token"),
  expiresAt: localStorage.getItem("expires_at")
};

const getters = {
  /**
   * Getter for retrieving authenticated status.
   */
  authenticated(state) {
    return state.authenticated;
  }
};

const mutations = {
  /**
   * Updates the Vuex state's authentication data
   */
  authenticated(state, authData) {
    state.authenticated = true;
    state.accessToken = authData.accessToken;
    state.idToken = authData.idToken;
    state.expiresAt = authData.expiresIn * 1000 + new Date().getTime();

    localStorage.setItem("access_token", state.accessToken);
    localStorage.setItem("id_token", state.idToken);
    localStorage.setItem("expires_at", state.expiresAt);
  },

  /**
   * Cleans Vuex state's authentication data
   */
  logout(state) {
    state.authenticated = false;
    state.accessToken = null;
    state.idToken = false;

    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
};

const actions = {
  /**
   * launches Auth0 authentication
   */
  login() {
    auth.authorize();
  },

  /**
   * Logs out and updates Vuex state's authentication data
   */
  logout({ commit }) {
    auth.logout();
    commit("logout");
  },

  /**
   * Checks if user is registered in 8base, if not signs up the user.
   * Afterwards stores the authentication data in Vuex State
   */
  async handleAuthentication({ commit }) {
    const authResult = await auth.getAuthorizedData();

    const context = {
      headers: { authorization: `Bearer ${authResult.idToken}` }
    };
    // Check if user exists, if not it'll return an error
    try {
      await graphqlClient.query({
        query: gql.CURRENT_USER_QUERY,
        context
      });
    } catch {
      graphqlClient.mutate({
        mutation: gql.USER_SIGN_UP_MUTATION,
        variables: {
          user: { email: authResult.email },
          authProfileId: AUTH_PROFILE_ID
        },
        context
      });
    }
    commit("authenticated", authResult);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
