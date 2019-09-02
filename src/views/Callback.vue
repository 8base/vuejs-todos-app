<template>
  <div class="authenticating">
    Authenticating...
  </div>
</template>

<script>
import router from '@/router'
import { mapActions } from 'vuex'

export default {
  name: 'Auth',

  methods: mapActions(['handleAuthentication']),

  data () {
    this.handleAuthentication();
    router.push({ name: 'home' });

    return {}
  }
}
</script>