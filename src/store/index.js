/**
 * The state manager should manage communication
 * with the API for query and subscriptions.
 */
import Vue from "vue";
import Vuex from "vuex";

import graphqlClient from "../utils/graphql";
import {
  GET_BOARDS_QUERY,
  CREATE_BOARD_MUTATION,
  CREATE_TODO_MUTATION,
  DELETE_TODO_MUTATION,
  DELETE_BOARD_MUTATION,
  CHANGE_TODO_STATUS_MUTATION
} from "../utils/api";

Vue.use(Vuex);

export const mutations = {
  setBoards(state, boards) {
    state.boards = boards;
  }
};

export const actions = {
  async fetchBoards({ commit }) {
    const response = await graphqlClient.query({
      query: GET_BOARDS_QUERY,
      fetchPolicy: "network-only"
    });
    // Trigger the `setBoards` mutation which is defined above.
    commit("setBoards", response.data.boardsList.items);
  },

  async addBoard({ dispatch }, board) {
    await graphqlClient.mutate({
      mutation: CREATE_BOARD_MUTATION,
      variables: {
        name: board.name
      }
    });
    dispatch("fetchBoards");
  },

  async addTodo({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: CREATE_TODO_MUTATION,
      variables: {
        description: todo.description,
        boardId: todo.boardId
      }
    });
    dispatch("fetchBoards");
  },

  async updateTodoStatus({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: CHANGE_TODO_STATUS_MUTATION,
      variables: {
        todoId: todo.todoId,
        status: todo.status
      }
    });
    dispatch("fetchBoards");
  },

  async deleteTodo({ dispatch }, todo) {
    await graphqlClient.mutate({
      mutation: DELETE_TODO_MUTATION,
      variables: {
        todoId: todo.todoId
      }
    });

    dispatch("fetchBoards");
  },

  async deleteBoard({ dispatch }, board) {
    await graphqlClient.mutate({
      mutation: DELETE_BOARD_MUTATION,
      variables: {
        boardId: board.boardId
      }
    });

    dispatch("fetchBoards");
  }
};

export const state = {
  boards: []
};

export const getters = {
  boards: state => state.boards
};

export default new Vuex.Store({
  mutations,
  actions,
  state
});
