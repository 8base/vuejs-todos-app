import gql from "graphql-tag";

export const GET_BOARDS_QUERY = gql`
  query getBoard {
    boardsList {
      items {
        ...boardFields
      }
    }
  }

  fragment boardFields on Board {
    id
    name
    todos {
      items {
        ...todoFields
      }
    }
  }

  fragment todoFields on Todo {
    id
    description
    status
  }
`;
/**
 * BOARDS
 */
export const CREATE_BOARD_MUTATION = gql`
  mutation createBoard($name: String!) {
    boardCreate(data: { name: $name }) {
      id
      name
    }
  }
`;

export const UPDATE_BOARD_MUTATION = gql`
  mutation changeBoardName($boardId: ID!, $name: String!) {
    boardUpdate(filter: { id: $boardId }, data: { name: $name }) {
      id
    }
  }
`;

export const DELETE_BOARD_MUTATION = gql`
  mutation deleteBoard($boardId: ID!) {
    boardDelete(filter: { id: $boardId }) {
      success
    }
  }
`;

export const BOARDS_SUBSCRIPTION = gql`
  subscription {
    Board(filter: { mutation_in: [create, update, delete] }) {
      updatedFields
      node {
        id
      }
    }
  }
`;

/**
 * TODOS
 */
export const CREATE_TODO_MUTATION = gql`
  mutation createTodo($description: String!, $boardId: ID!) {
    todoCreate(
      data: { description: $description, board: { connect: { id: $boardId } } }
    ) {
      id
      description
      status
    }
  }
`;

export const CHANGE_TODO_DESCRIPTION_MUTATION = gql`
  mutation changeTodoDescription($todoId: ID!, $description: String!) {
    todoUpdate(filter: { id: $todoId }, data: { description: $description }) {
      id
      description
      status
    }
  }
`;

export const CHANGE_TODO_STATUS_MUTATION = gql`
  mutation changeTodoStatus($todoId: ID!, $status: String!) {
    todoUpdate(filter: { id: $todoId }, data: { status: $status }) {
      id
      description
      status
    }
  }
`;

export const DELETE_TODO_MUTATION = gql`
  mutation deleteTodo($todoId: ID!) {
    todoDelete(filter: { id: $todoId }) {
      success
    }
  }
`;

export const TODOS_SUBSCRIPTION = gql`
  subscription {
    Todos(filter: { mutation_in: [create, update, delete] }) {
      updatedFields
      node {
        id
      }
    }
  }
`;
