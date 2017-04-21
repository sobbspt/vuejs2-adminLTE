<template>
  <div class="home">
    <h1>Hello {{ getDisplayName() }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <p>{{ welcome }}</p>
    <div class="row">
      <div class="col-xs-4" ></div>
      <div class="col-xs-4" >
        <button type="button" @click="logOut" class="btn btn-primary btn-block btn-flat">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      welcome: 'Home',
      auth: {
        user: null,
        email: '',
        password: '',
        message: '',
        userName: '',
        hasErrors: false
      },
      loading: true
    }
  },
  methods: {
    logOut: function () {
      // Signout the user using firebase
      firebase.auth().signOut()
        .then(function(error) {
          this.auth.user = firebase.auth().currentUser;
          this.auth.message = 'User signed out Successfully';
        }.bind(this), function (error) {
          alert('Failed to signout user, try again later');
        });
    },
    getDisplayName: function () {
      return firebase.auth().currentUser.displayName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
