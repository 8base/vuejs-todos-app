<template>
  <div class='home'>
    <!--  -->
    <div v-if='authenticated'>
      <a href="#" @click='logout()'>Log Out</a>
      <h1 v-if='loading'>Loading...</h1>
      <BoardCanvas v-if='!loading' :boards='$store.state.boards' />    
    </div>
    <div v-else>
      <button @click='login()'>Sign In</button>     
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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

  computed: mapGetters(['authenticated']),

  methods: mapActions(['login', 'logout']),

  async mounted() {
    if(this.authenticated){
      this.loading = true;
      await this.$store.dispatch('fetchBoards');
      this.loading = false;
    }
  }
};
</script>
