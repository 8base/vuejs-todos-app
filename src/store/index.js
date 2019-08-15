/**
 * The state manager should manage communication
 * with the API for query and subscriptions.
 */
import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";

import graphqlClient from "../utils/graphql";

Vue.use(Vuex);

export const mutations = {
  setLists(state, lists) {
    state.lists = lists;
  }
};

export const actions = {
  async fetchLists({ commit }) {
    const response = await graphqlClient.query({
      query: gql`
        query {
          todoListsList {
            items {
              id
              name
              todoItems {
                items {
                  id
                  description
                  status
                }
              }
            }
          }
        }
      `
    });

    // Trigger the `setBookList` mutation
    // which is defined above.
    commit("setLists", response.data.todoListsList);
  }
};

export const state = {
  lists: []
};

export default new Vuex.Store({
  mutations,
  actions,
  state
});

// EXAMPLE USE OF ADDING VARIABLES
// const response = await graphqlClient.query({
//   // It is important to not use the
//   // ES6 template syntax for variables
//   // directly inside the `gql` query,
//   // because this would make it impossible
//   // for Babel to optimize the code.
//   query: gql`
//     query Book($bookId: ID!) {
//       book(id: $bookId) {
//         id
//         title
//         author
//         description
//       }
//     }
//   `,
//   variables: { bookId: id },
// });
