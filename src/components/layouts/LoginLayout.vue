<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginLayout',
    data () {
      return {

      }
    }
  }
</script>


<style>
  .login-page {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #d2d6de;
  }
</style>
