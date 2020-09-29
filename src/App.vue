<template>
<form-Helper>
  <div slot="form-header">
    <h3>This is the title of the form</h3>
    <p> Fill the information below: </p>
  </div>
  <div slot="form-fields">
    <input type="text" placeholder="Name" required />
    <input type="password" placeholder="password" required/>
  </div>
  <div slot="form-controls">
    <button v-on:click="handleSubmit"> Submit </button>
  </div>
</form-Helper>
</template>

<script>
import formHelper from './components/formHelper.vue'
export default {

  components:{
    'form-Helper': formHelper
  },
  data () {
    return {
    }

  },
  methods: {

    },
}
</script>

<style>

</style>
