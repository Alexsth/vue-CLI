<template>
<div>
  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
  <app-body v-bind:players="players"></app-body>
  <app-footer v-bind:title="title"></app-footer>

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
      ],
      title: 'Players'
    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title = updatedTitle;
    }
  }
}
</script>

<style>

</style>
