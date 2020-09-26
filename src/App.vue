<template>

  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header'
import axios from 'axios'
export default {
  name: 'App',
  components:{
    'app-header':Header
  },
  data(){
    return{

    }
  },
 
}
</script>

<style scope>
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
}
</style>
