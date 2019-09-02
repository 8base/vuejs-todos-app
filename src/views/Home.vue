<template>
  <div class="home">
    <!--  -->
    <div v-if="authenticated">
      <button @click="logout()">Log Out</button>
      <h1 v-if="loading">Loading...</h1>
      <BoardCanvas v-if="!loading" :boards="$store.state.todo.boards" />
    </div>
    <div v-else>
      <button @click="login()">Sign In</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
/* @ is an alias to src */
import BoardCanvas from "@/components/BoardCanvas.vue";

export default {
  name: "home",

  components: {
    BoardCanvas
  },

  data() {
    return {
      loading: true
    };
  },

  computed: mapGetters(["authenticated"]),

  methods: mapActions(["login", "logout", "fetchBoards"]),

  async mounted() {
    if (this.authenticated) {
      this.loading = true;
      await this.fetchBoards();
      this.loading = false;
    }
  }
};
</script>
