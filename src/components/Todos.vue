<template>
    <div class="hello">
        <form action="" @submit.prevent="create" v-if="! updating"> 
            <input type="text" v-model="data.task" class="task">
            <input type="submit" name="submit" id="submit" >
        </form>
    
        <div class="todos">
            <div class="todo" v-for="todo in todos" :key="todo.id">
                <div class="clear" @click="deletet(todo.id)">
                    <img src="../assets/delete-sign.png" alt="">
                </div>
                <input type="checkbox" name="" id="" v-model="todo.done" v-on:click="update(todo.id)">
                <div v-if="!todo.updating" @click="editingTodo(todo)">
                    {{todo.task}}
                </div>
                <div v-else>
                    <input type="text" v-model="todo.task" @keyup.enter="doneEdit(todo)" @blur="doneEdit(todo)">
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
  name: 'todo',
  data(){
    return{
        task:"",
        id:'',
        data:[],
        beforeChache:'',
        error:'',
        todos:[
            {
            id:1,
            task: "sleep",
            done: 1,
            updating: false
            },
            {
            id:2,
            task: "eat",
            done: 0,
            updating: false
            },
            {
            id:3,
            task: "rest",
            done: 0,
            updating: false
            },
        ],
       
        
        

    }
  },
  methods: {
    create: function(){
        //   validate form
        // if (this.data.task=='') {
        //     this.error[task]='task should not be empty';
        // }
        //  check if form is valiated 
        // if (this.error=='') {
        //   create a new todo
            axios.post('/task', {
                task:this.data.task
            })
                .then(res=>{
                    console.log(res)
                })
                
        // }
    },

    update(id){
        //   validate form
        // if (this.data.task=='') {
        //     this.error[task]='task should not be empty';
        // }
        // //  check if form is valiated 
        // if (this.error=='') {
        // //   create a new todo
        // }
         axios.patch('/task/'+id, {
                task:this.task
            })
                .then(res=>{
                    console.log(res)
                })



    },
    deletet(id){
         axios.delete('/task/'+id, {
                task:this.data.task
            })
                .then(res=>{
                    console.log(res)
                })

    },
    check(id){
        axios.update('/task/'+id, {
                done:1
            })
                .then(res=>{
                    console.log(res)
                })

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
<style scoped>  
    .hello {
        width:50%;
        margin: auto;
        margin-top: 100px;
        text-align: center;

    }
    .task{
        width: 300px;
        height:30px;
        border-radius: 4px;
    }
    #submit{
        width: 100px;
        height: 37px;
        border-radius: 4px;
    }
    .todos{
        margin: auto;
        width: 90%;
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
