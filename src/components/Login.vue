<template>
  <div class="login-box-body">
    <p class="login-box-msg">Sign in to start your session</p>
    <form>
      <div class="form-group has-feedback">
        <input v-model:email="auth.email" type="email" class="form-control" placeholder="Email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input v-model:password="auth.password" type="password" class="form-control" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div v-if="auth.message !== ''" class="alert" role="alert"
           :class="{'alert-danger': auth.hasErrors, 'alert-success': !auth.hasErrors}">
        <button @click="dismissAlert" type="button" class="close"><span aria-hidden="true">×</span></button>
        <p><strong>{{auth.message}}</strong></p>
      </div>
      <div class="row">
        <div class="col-xs-4"></div>
        <div class="col-xs-4" >
          <button type="button" @click="logIn" class="btn btn-primary btn-block btn-flat">Login</button>
        </div>
        <div class="col-xs-4" >
          <button type="button" @click="logOut" class="btn btn-primary btn-block btn-flat">Logout</button>
        </div>
        <!-- /.col -->
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        welcome: 'Hi!!!',
        auth: {
          user: null,
          email: '',
          password: '',
          message: '',
          userName: '',
          hasErrors: false
        }
      }
    },
    methods: {
      logIn: function (event) {
        var vm = this;
        vm.auth.message = '';
        vm.auth.hasErrors = false;

        if (vm.auth.email === '' || vm.auth.password === '') {
          alert('Please provide the email and password');
          return;
        }
        // Sign-in the user with the email and password
        firebase.auth().signInWithEmailAndPassword(vm.auth.email, vm.auth.password)
          .then(function (data) {
            vm.auth.user = firebase.auth().currentUser;
            console.log('user = ' + JSON.stringify(vm.auth.user))
          }).catch(function(error) {
          vm.auth.message = error.message;
          vm.auth.hasErrors = true;
        });
      },
      logOut: function () {
        // Signout the user using firebase
        console.log(JSON.stringify(firebase.auth().currentUser))
        firebase.auth().signOut()
          .then(function(error) {
            this.auth.user = firebase.auth().currentUser;
            this.auth.message = 'User signed out Successfully';
          }.bind(this), function (error) {
            alert('Failed to signout user, try again later');
          });
      },
      dismissAlert: function () {
        this.auth.message = '';
        this.auth.hasErrors = false;
      },
    }
  }
</script>

<style>

</style>
