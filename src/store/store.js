import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = "http://localhost:8000/api"

export const store = new Vuex.Store({
    state:{

        todos:[
            // {
            // id:1,
            // task: "sleep",
            // done: 1,
            // updating: false
            // },
            // {
            // id:2,
            // task: "eat",
            // done: 0,
            // updating: false
            // },
            // {
            // id:3,
            // task: "rest",
            // done: 0,
            // updating: false
            // },
        ],
    },
    getters:{
        setTodo(state){
            return state.todos   
        },
       

    },
    mutations:{
        getTodos(state, todos){
            state.todos = todos
        },
        addTodos(state, todo){
            state.todos.push({
                id: todo.id,
                task: todo.task,
                done: todo.done
            })
        },
        updateTodos(state, todo){
            const index = state.todos.findIndex(item=> item.id == todo.id)
            state.todos.splice(index ,1 ,{
                'id': todo.id,
                'task': todo.task,
                'done': todo.done
            })
        },
        deletetTodo(state, todo){
            const index = state.todos.findIndex(item=> item.id == todo.id)
            state.todos.splice(index,1)
        },
    },
    actions:{
        getTodos(context){
            axios.get('/tasks')
            .then(response => {
                context.commit('getTodos', response.data)
            })
            .catch(err=>{

            })
        },
        addTodos(context, todo){
            axios.post('/task', {
                task: todo.task,
                done: false
            })
            .then(response => {
                context.commit('addTodos', response.data)
            })
            .catch(err=>{
    
            })  
        },
        updateTodos(context, todo){
            axios.patch('/task/'+todo.id, {
                task: todo.task,
                done: todo.done
            })
            .then(response => {
                context.commit('updateTodos', response.data)
            })
            .catch(err=>{
    
            })  
        },
        deletetTodo(context, todo){
            axios.delete('/task/'+ todo.id)
            .then(response => {
                context.commit('deletetTodo', todo)
            })
            .catch(err=>{
    
            })  
        },
    },
    
})