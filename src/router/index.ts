import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Home from '../views/movies/Home.vue'
import Create from '../views/movies/Create.vue'
import Edit from '../views/movies/Edit.vue'
import auth from '../views/auth/Middleware.vue'

import { nextTick } from 'vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
                middleware: auth,
              }
      
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: {
        middleware: auth,
      }
    },
    {
      path: '/edit:id',
      name: 'create',
      component: Edit,
      meta: {
        middleware: auth,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
    

  ]
})

export default router

