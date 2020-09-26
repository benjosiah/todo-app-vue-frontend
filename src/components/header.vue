<template>
    <header>
        <ul>
            <li>
               <router-link to="/"> Home</router-link>
            </li>
            <li>
             <router-link to=""> About</router-link> 
            </li>
            <li>
               <router-link to=""> Contact</router-link> 
            </li>
            <li v-if="!loggedIn">
                <router-link to="/login"> Login</router-link>
            </li>
            <li  v-if="!loggedIn">
               <router-link to="/register"> Register</router-link>
            </li>
             <li  v-if="loggedIn" class="logout" @click="logOut">
                Logout
            </li>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'Login',
    computed:{
        loggedIn(){
            return this.$store.getters.loggedIn
        }
    },
    data(){
        return{
            

        }
    },
    methods:{
        logOut(){
            this.$store.dispatch('logOut')
            .then(res=>{
                this.$router.push({name: 'login'})
            })
        }
    }
}
</script>
<style scoped>
header{
    width:100%;
    background-color: rgb(189, 199, 207);
    margin: 0%;
    padding: 0%;
    overflow: hidden;

}
a:active{
    color: rgb(95, 95, 95);
}
a{
    color: black;
    text-decoration: none;
}
ul{
    
    width: 80%;

}
li{
    display: inline;
    padding: 5%;
}
.logout{
    cursor: pointer;
}

</style>l