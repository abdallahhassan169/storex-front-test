<template>
<form @submit="register">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" v-model="name" aria-describedby="emailHelp" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="password" placeholder="Password">
  </div>

  <div >
        <router-link to="/login">Go to Login</router-link>
  </div>
  <input type="submit" class="btn btn-primary" value="Submit">
</form>
</template>

<script>
import axios from 'axios'
export default{
    name:'Register',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async register(e){
            e.preventDefault();
            const data = {
            name:this.name,
            email:this.email,
            password:this.password
            }
            await axios.post('https://test-api.storexweb.com/api/register',data);
            this.$router.push('/login')
        }
    }

}
</script>
