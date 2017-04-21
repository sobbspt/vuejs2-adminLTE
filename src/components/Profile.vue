<template>
  <div class="profile">
    <div class="row">
      <div class="col-xs-4"></div>
      <div class="col-xs-4">
        <h1 style="text-align: center">{{ welcome }}</h1>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-xs-4" ></div>
        <div class="col-xs-4" >
          <div class="form-group has-feedback">
            <input v-model:displayName="auth.userName" type="text" class="form-control" placeholder="Display name">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4" ></div>
        <div class="col-xs-4" >
          <button type="button" @click="updateProfile" class="btn btn-primary btn-block btn-flat">Confirm</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        welcome: 'Profile',
        displayName: '',
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
      updateProfile: function () {
        if (this.auth.userName === '') {
          alert('Please provide a username to update.');
          return;
        }

        var user = firebase.auth().currentUser,
          vm = this;

        user.updateProfile({
          displayName: vm.auth.userName
        }).then(function() {
          vm.auth.message = 'Successfully updated user profile.';
          vm.$router.push('/')
        }, function(error) {
          vm.auth.message = 'Failed to update user profile.';
          vm.auth.hasErrors = true;
        });
      },
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
