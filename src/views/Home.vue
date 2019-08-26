<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 v-if="loading">Loading...</h1>
    <boardCanvas v-if="!loading" :boards="boards" />
  </div>
</template>

<script>
// @ is an alias to /src
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

  computed: {
  	boards() { return this.$store.state.boards }
  },

  async mounted() {
    this.loading = true;
    await this.$store.dispatch("fetchBoards");
    this.loading = false;
  }
};
</script>
