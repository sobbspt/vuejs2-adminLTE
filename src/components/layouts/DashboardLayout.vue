<template>
  <div class="skin-blue sidebar-mini">
    <MainHeader></MainHeader>
    <MainSidebar></MainSidebar>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainHeader from '@/components/partials/MainHeader'
  import MainSidebar from '@/components/partials/MainSidebar'

  export default {
    name: 'dashboardLayout',
    components: {
        MainHeader,
        MainSidebar
    },
    data () {
      return {

      }
    }
  }
</script>

<style>

</style>
