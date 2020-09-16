<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return
  },
     created(){
        let vm=this

    axios.get('/tasks')
      .then(response => {
        vm.todos=response.data
        // console.log(response.data)
        vm.todos.forEach(element => {
            element.updating=false
        });
        // console.log(this.todos)
      })
  }
}
</script>

<style>
body{
  margin: 0%;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
