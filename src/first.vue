<template>
  <ul>
    <li v-for="player in players">{{ player }} </li>
  </ul>

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

<style lang="scss">

</style>
