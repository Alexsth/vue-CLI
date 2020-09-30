<template>
<div id="add-blog">
  <h2>Add a new Blog Post:</h2>
  <form v-if="!submitted">
    <label>Blog Title:</label>
    <input type="text" v-model.lazy="blog.title" required/>
    <label> Blog Content:</label>
    <textarea v-model.lazy="blog.content"> </textarea>
    <div id="checkboxes">
      <label>social</label>
      <input type="checkbox" value="social" v-model="blog.categories"/>
      <label>Romantic</label>
      <input type="checkbox" value="Romantic" v-model="blog.categories"/>
      <label>Political</label>
      <input type="checkbox" value="Political" v-model="blog.categories"/>
      <label>Fantasy</label>
      <input type="checkbox" value="Fantasy" v-model="blog.categories"/>
    </div>
    <label> Author</label>
    <select v-model="blog.author">
      <option v-for="author in authors">{{author}}</option>
    </select>
    <button v-on:click.prevent="post">Add Blog</button>
  </form>
  <div v-if="submitted">
    <h3>Thank you</h3>
  </div>
  <div id="preview">
    <h3>Preview Blog</h3>
    <p>Blog Title:{{blog.title}}</p>
    <p>Blog Content:</p>
    <p>{{blog.content}}</p>
    <p>Blog categories:</p>
    <ul>
    <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <p>Author:{{blog.author}}</p>
  </div>
</div>

</template>

<script>

export default {

  components:{

  },
  data () {
    return {
      blog:{
        title:'',
      content:'',
      categories:[],
      author:''
      },
      authors:['Alex Shrestha', 'Rajendra Shrestha'],
      submitted: false
    }

  },
  methods: {
    post: function(){
      this.$http.post('https://vuejs-c1f9a.firebaseio.com/posts.json',this.blog).then(function(data){
        console.log(data);
        this.submitted= true;
      });
    }
    },
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}

#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],textarea{
  display: block;
  width: 100%;
  padding: 8px;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}


</style>
