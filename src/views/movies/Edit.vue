<template>

<form @submit="createMovie">
  <div class="form-group">
    <label for="exampleInputEmail1">name</label>
    <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">description</label>
    <textarea class="form-control" v-model="description" placeholder="Password" />
  </div>
   
<select class="form-select" aria-label="Default select example">
  <option selected>Category</option>
  <option v-for="cat in categories" value={{category.id}}>{{category.name}}</option>

</select>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import axios from 'axios'
export default{
    name:'Edit',
    data(){
        return {
          categories:[],
            name:'',
            category_id:'',
            image:'',
            description:''
        }
    },
    created(){
      this.getCategories()
    },
    methods:{
        async createMovie(e){
            e.preventDefault();
            const data = {
            name:this.name,
            category_id:this.category_id,
            image:this.image,
            description:this.description
            }
            await axios.post('https://test-api.storexweb.com/api/update',data,{
                  headers: {
            Authorization: "Bearer" + token,
            "x-access-token": token
          }
            });
            alert('success')
        },

        getCategories(){
          let token= localStorage.getItem('token')
    const response =  axios.get('https://test-api.storexweb.com/api/categories'+this.$route.params.id,{
    headers: {
            Authorization: "Bearer" + token,
            "x-access-token": token
          }
    

  }
  ).then(res => {this.categories=res.data});
        }
    }

}
</script>