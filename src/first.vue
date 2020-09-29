<template>
<div>
  <h1> List of players </h1>
  <ul>
    <li v-for="player in players">{{ player }} </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      players:['Ronaldo','Messi','Ramos']
    }
  }
}
</script>

<style scoped>
h1{
  color: green;
}
</style>
