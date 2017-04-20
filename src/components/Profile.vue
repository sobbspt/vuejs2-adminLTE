<template>
  <div class="profile">
    <h1>{{ welcome }}</h1>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Display Name">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return {
        welcome: 'Profile'
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
          vm.auth.message = 'Successfully udpated user profile.';
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

  .form-control {
    width: 50%;
    margin: auto;
  }
</style>
