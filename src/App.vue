<template>
<div>
  <app-header></app-header>
  <app-body></app-body>
  <app-footer></app-footer>

</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Player from './components/player.vue'

export default {
  components:{
    'app-header': Header,
    "app-footer": Footer,
    "app-body": Player
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
