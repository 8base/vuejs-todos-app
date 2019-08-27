<template>
  <div class='home'>
    <!--  -->
    <h1 v-if='loading'>Loading...</h1>
    <BoardCanvas v-if='!loading' :boards='$store.state.boards' />
  </div>
</template>

<script>
/* @ is an alias to src */
import BoardCanvas from '@/components/BoardCanvas.vue';

export default {
  name: 'home',

  components: {
    BoardCanvas
  },

  data() {
    return {
      loading: true
    };
  },

  async mounted() {
    this.loading = true;
    await this.$store.dispatch('fetchBoards');
    this.loading = false;
  }
};
</script>
