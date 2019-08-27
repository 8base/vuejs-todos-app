<template>
  <section class="board-container" ref="list" :data-id="board.id">
    <div class="board-header">
      <hr>
      {{ board.name }}
      <button class="btn" @click="onDelete">Delete</button>
      <hr>
    </div>

    <div class="todo-entry">
      <textEntry
        placeholder="Add a todo"
        icon="ellipsis-h"
        @enter="addTodo"
      />
    </div>

    <div>
      <div class="todos" v-for="todo in board.todos.items" :key="todo.id">
        <todo :todo="todo" @status="updateStatus" @delete="deleteTodo" />
      </div>
    </div>
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
