<template>
<div id="players">
  <ul>
    <li v-for="player in players" v-on:click="player.show= !player.show">
    <h2> {{player.name}} </h2>
    <h3 v-show="player.show"> {{ player.speciality}}</h3>
    </li>
  </ul>
</div>
</template>

<script>

export default {

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

<style scoped>
#players{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
