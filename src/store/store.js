import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = "http://localhost/todos/public/api"

export const store = new Vuex.Store({
    state:{
        token:localStorage.getItem('access_token') || null,
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
        loggedIn(state){
            return state.token !== null
        }
        
       

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
        login(state, token){
            state.token=token
        },
        logout(state){
            state.token=null
        }
        
    },
    actions:{
        logOut(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
            console.log(context.state.token)
            if (context.getters.loggedIn) {
                return new Promise((resolve, reject)=>{
                    axios.post('/logout')
                    .then(response => {
                        localStorage.removeItem('access_token')
                        context.commit('logout')
                        resolve(response)
                    })
                    .catch(err=>{
                        reject(err)
                        localStorage.removeItem('access_token')
                        context.commit('logout')
                    })
                })
            }
            
            
        },
        login(context, credentials){
            return new Promise((resolve, reject)=>{
                axios.post('/login',{
                    username: credentials.email,
                    password: credentials.password,
                    
                })
                .then(response => {
                    const token= response.data.access_token
                    localStorage.setItem('access_token', token)
                    context.commit('login', token)
                    console.log(token)
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
            })
            
        },
        registerUser(context, credentials){
            return new Promise((resolve, reject)=>{
                axios.post('/register',{
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password
                    
                })
                .then(response => {
                    // context.commit('registerUser', response.data)
                    console.log(response);
                    resolve(response)
                })
                .catch(err=>{
                    reject(err)
                })
            })
        },
        getTodos(context){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
            axios.get('/tasks')
            .then(response => {
                
                context.commit('getTodos', response.data)
            })
            .catch(err=>{

            })
        },
        addTodos(context, todo){
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
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
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
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
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.token
            axios.delete('/task/'+ todo.id)
            .then(response => {
                context.commit('deletetTodo', todo)
            })
            .catch(err=>{
    
            })  
        },
    },
    
})