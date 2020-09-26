<template>
    <div>
        <div class="hello">
            <form action="" @submit.prevent="register">
            <div>
                <input type="text" class="task" placeholder="Name" v-model="name">
            </div>
            <div>
                <input type="text" class="task" placeholder="Email" v-model="email">
            </div>
            <div>
                <input type="password" class="task" placeholder="Password" v-model="password" >
            </div>
            <div>
                <input type="submit" value="Register">
            </div>
            </form>
           
        </div>
    </div>
</template>
<script>
export default {
    name: 'register',
    
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        register(){
            this.$store.dispatch('registerUser', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(res=>{
             this.$router.push({name:"login"})
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