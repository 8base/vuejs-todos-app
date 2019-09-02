<template>
  <div class="boards-container">
    <div class="canvas" v-for="board in boards" :key="board.id">
      <board :board="board" @delete="deleteBoard" />
    </div>
    <hr>
    <div class="new-board">
      <textEntry placeholder="Add a board" @enter="addBoard" />
    </div>
  </div>
</template>

<script>
import Board from "./Board";
import TextEntry from "./UI/TextEntry";

export default {
  name: "boardCanvas",
  components: {
    Board,
    TextEntry
  },

  props: {
    boards: Array
  },

  methods: {
    addBoard({ text }) {
      this.$store.dispatch("addBoard", { name: text });
    },

    deleteBoard({ id }) {
      this.$store.dispatch("deleteBoard", { boardId: id });
    }
  }
};
</script>

<style>
.board-container {
  text-align: left;
}
</style>