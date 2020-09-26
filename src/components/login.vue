<template>
    <div>
        <div class="hello">
            <form action="" @submit.prevent="login">
                <div>
                    <input type="text" class="task" placeholder="Email" v-model="email">
                </div>
                <div>
                    <input type="password" class="task" placeholder="Password" v-model="password">
                </div>
                <div>
                    <input type="submit" value="Login">
                </div>
            </form>

            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    computed:{
      todos(){
        return this.$store.getters.setTodo
      },
      token(){
          return this.$store.state.token
      }
  },
    methods:{
        login(){
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
            .then(res=>{
                this.$router.push({name:'todo'})
            })
        }
    }
}
</script>
<style scope>
    .hello {
        width:50%;
        margin: auto;
        margin-top: 170px;
        text-align: center;

    }
    .task{
        width: 80%;
        height:30px;
        min-width: 150px;
        border-radius: 4px;
    }
    .hello div{
        margin: 10px;
    }

</style>