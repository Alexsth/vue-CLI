<template>
  <div>
  <h1> {{ title }} </h1>
  <players></players>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Lets Begin'
    }
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
