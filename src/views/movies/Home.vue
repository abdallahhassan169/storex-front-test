<template>
<div class="row">
<div v-for="movie in movies" class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="'https://test-api.storexweb.com/api/movies${movie.image}.jpg'" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.name}}</h5>
    <p class="card-text">{{movie.description}}</p>
    <a @click="deleteMovie" class="btn btn-danger">Delete</a>
    <router-link v-bind:to="{ name: 'edit', params: {id : movie.id} }"><a class="btn btn-primary" ><i class="fa fa-link"></i></a></router-link>

  </div>
</div>

</div>



</template>
<script>
import axios from 'axios'

export default{
  data(){
        return {
          movies:[]
        }
      },


async created() {
  let token= localStorage.getItem('token')
  const response = await axios.get('https://test-api.storexweb.com/api/movies',{
    headers: {
            Authorization: "Bearer" + token,
            "x-access-token": token
          }
    

  }
  ).then(res => {this.movies=res.data});
},

methods:{
 
   deleteMovie (movie, id) {
      axios.delete('https://test-api.storexweb.com/api/movies/delete' + movie.id,    {headers: {
            Authorization: "Bearer" + token,
            "x-access-token": token
          }
   })
      .then(response => {
        this.result.splice(id, 1)
        console.log(this.result);
      });
    }
}

}
</script>