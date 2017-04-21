import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginLayout from '@/components/layouts/LoginLayout'
import Login from '@/components/Login'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: LoginLayout,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            if (!user.hasOwnProperty("displayName")) {
              // User is set displayName.
              next('/profile')
            }
            next('/')
          } else {
            // No user is signed in.
            next()
          }
        });
      },
      children: [
        {
          path: '',
          component: Login
        }
      ],
    },
    {
      path: '/',
      name: 'Hello',
      component: Home,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            if (!user.hasOwnProperty("displayName")) {
              // User is set displayName.
              next('/profile')
            }
            next()
          } else {
            // No user is signed in.
            next('/login')
          }
        });
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            next()
          } else {
            // No user is signed in.
            next('/login')
          }
        });
      }
    }
  ]
})
