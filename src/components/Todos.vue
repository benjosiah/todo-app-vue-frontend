<template>
    <div class="hello">
        <form action="" @submit.prevent="add" > 
            <input type="text" v-model="task" class="task">
            <input type="submit" name="submit" id="submit" >
        </form>
    
        <div class="todos">
            <todolist v-for="todo in todos" :key="todo.id" :todo="todo" />
        </div>
    </div>
</template>

<script>
import todolist from './todo-list.vue'
import axios from 'axios'
export default {
    components: {
        todolist
    },
  name: 'todo',
  data(){
    return{
        task:"",
        id:'',
        data:[],
        beforeChache:'',
        error:'',
    }
  },
  created(){
      this.$store.dispatch('getTodos')
     
  },
  computed:{
      todos(){
        return this.$store.getters.setTodo
      },
      token(){
          return this.$store.state.token
      }
  },
  methods: {
    add(){
        if(this.task==''){
           return
        }
         this.$store.dispatch('addTodos', {
                task: this.task,
            })
        this.task=''
    },
    
    editingTodo(todo){
        todo.updating = true
        this.beforeChache=todo.task
    },
    doneEdit(todo){
        if(todo.task==''){
           todo.task=this.beforeChache 
        }
        todo.updating=false
        
        
    }
  },
 


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>  
    .hello {
        width:50%;
        margin: auto;
        margin-top: 100px;
        text-align: center;

    }
    .task{
        max-width: 300px;
        width: 80%;
        height:30px;
        min-width: 200px;
        border-radius: 4px;
    }
    #submit{
        width: 10%;
        min-width: 60px;
        height: 37px;
        border-radius: 4px;
    }
    .todos{
        margin: auto;
        width: 90%;
        min-width: 200px;
        padding:10px;
        text-align: justify;

    }
    .todo{
        width: 100%;
        margin: 3px;
        padding: 10px;
        position: relative;
    }
    .clear{
        width: 15px;
        height: 15px;
        position: absolute;
        top: 0px;
        right: 0px;
    }
    .clear img{
        width: 100%;
        height: 100%;
    }


</style>
