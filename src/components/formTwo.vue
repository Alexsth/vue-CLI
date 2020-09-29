<template>
<div>
  <form-helper>
    <div slot="form-header">
      <h3>Form two - Login</h3>
      <p>Please fill out the form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="username" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button v-on:click="handleSubmit">Login</button>
    </div>
  </form-helper>
</div>

</template>

<script>
import formHelper from './formHelper.vue'

export default {

  components:{
    'form-helper': formHelper
  },
  data () {
    return {
    }

  },
  methods: {
    handleSubmit:function(){
      alert('Thanks for logging in (form two)');
    }
    },
}
</script>

<style>


</style>
