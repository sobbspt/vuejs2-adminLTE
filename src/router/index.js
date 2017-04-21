import Vue from 'vue'
import Router from 'vue-router'
import LoginLayout from '@/components/layouts/LoginLayout'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import EventList from '@/components/dashboards/event/EventList'
import EventCreate from '@/components/dashboards/event/EventCreate'

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
      component: DashboardLayout,
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
      },
      children: [
        {
          path: '/event-list',
          component: EventList
        },
        {
          path: '/event-create',
          component: EventCreate
        }
      ]
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
