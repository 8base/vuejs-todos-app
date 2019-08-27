<template>
  <section class="todo-container" ref="todos" :data-id="todo.id">
    <div class="todo-description">
      {{ todo.description }}
    </div>
    <div class="todo-status" style="width:200px;">
      <select v-model="todo.status" @change="onChangeStatus">
        <option value="PENDING">Pending:</option>
        <option value="IN PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
    <button class="btn" @click="onDelete">Delete</button>
  </section>
</template>

<script>
export default {
  name: "todo",
  props: {
    todo: Object
  },

  methods: {
    onChangeStatus($event) {
      this.$emit("status", {
          id: this.todo.id,
          status: event.target.value
        });
    },

    onDelete() {
      this.$emit("delete", { id: this.todo.id });
    }
  }
}
</script>

<style scoped>
.todo-description{
  display: inline
}
.todo-status {
  display: inline
}
</style>