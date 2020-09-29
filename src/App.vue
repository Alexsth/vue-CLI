<template>
<div>
  <app-header></app-header>
  <app-body v-bind:players="players"></app-body>
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
      players: [
        {name: 'Ronaldo', speciality: 'everything', show: false},
        {name: 'Messi', speciality: 'dribbling', show: false},
        {name: 'Ramos', speciality: 'defence', show: false},
        {name: 'Zidane', speciality: 'Coach', show: false},
        {name: 'De Gea', speciality: 'Keeper', show: false}
      ]

    }
  }
}
</script>

<style>

</style>
