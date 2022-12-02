<template>
<form @submit="login">
    <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password">
  </div>
  <div >
        <router-link to="/register">Go to Register</router-link>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import axios from 'axios'
export default{
    name:'Login',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
         async login(e){
            e.preventDefault();
            const data = {
            email:this.email,
            password:this.password
            }
            console.log(data)
            const response =await axios.post('https://test-api.storexweb.com/api/login',data)
            localStorage.setItem('token',response.data.authorisation.token)
            console.log(response.data.authorisation.token)
            this.$router.push('/')
        }
    }

}
</script>
