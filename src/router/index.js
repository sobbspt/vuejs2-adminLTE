import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginLayout from '@/components/layouts/LoginLayout'
import Login from '@/components/Login'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          component: Login
        }
      ]
    },
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
