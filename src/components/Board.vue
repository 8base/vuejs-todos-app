<template>
  <section class="board-container" ref="list" :data-id="board.id">
    <hr>
    <h2 class="board">{{ board.name }}</h2> 
    <button class="delete" @click="onDelete">Delete</button>

    <textEntry
      placeholder="Add a todo"
      icon="ellipsis-h"
      @enter="addTodo"
    />

    <ul class="todos" v-for="todo in board.todos.items" :key="todo.id">
      <li><todo :todo="todo" @status="updateStatus" @delete="deleteTodo" /></li>
    </ul>
  </section>
</template>

<script>
import Todo from "./Todo";
import TextEntry from "./UI/TextEntry";

export default {
  name: 'board',
  props: {
    board: Object
  },

  components: {
    Todo,
    TextEntry
  },

  methods: {
    addTodo({ text }) {
      this.$store.dispatch("addTodo", { boardId: this.board.id, description: text });
    },

    updateStatus({id, status}){
      this.$store.dispatch("updateTodoStatus", { todoId: id, status: status });
    },

    deleteTodo({ id }) {
      this.$store.dispatch("deleteTodo", { todoId: id });
    },

    onDelete() {
      this.$emit("delete", { id: this.board.id });
    }
  }
};
</script>

<style scoped>
.board {
  display: inline;
}
.delete { 
  margin-left: 10px;
  display: inline;
}
</style>
