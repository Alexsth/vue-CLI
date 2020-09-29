<template>
<div id="players">
  <ul>
    <li v-for="player in players" v-on:click="player.show= !player.show">
    <h2> {{player.name}} </h2>
    <h3 v-show="player.show"> {{ player.speciality}}</h3>
    </li>
  </ul>
  <button v-on:click="deletePlayer"> Delete </button>
</div>
</template>

<script>

export default {
  props:{
    players:{
      type: Array,
      required: true
    }
  },

  data () {
    return {

    }
  },
  methods:{
    deletePlayer:function(){
      this.players.pop();
    }
  },
  //Lifecycle Hooks
  beforeCreate(){
    alert('beforeCreate');
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
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
