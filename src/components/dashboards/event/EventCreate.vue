<template>
  <div>
    <section class="content-header">
      <h1>Event Create</h1>
    </section>
    <section class="content">
      <div class="col-sm-6">
        <div class="box box-info">
          <div class="box-header with-border">
            <h3 class="box-title">Create event</h3>
          </div>
          <!-- /.box-header -->
          <!-- form start -->
          <form class="form-horizontal">
            <div class="box-body">

              <div class="form-group">
                <label for="inputName" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10">
                  <input v-model="name" type="text" class="form-control" id="inputName" placeholder="Name">
                </div>
              </div>

              <div class="form-group">
                <label for="inputDescription" class="col-sm-2 control-label">Description</label>

                <div class="col-sm-10">
                  <input v-model="description" type="text" class="form-control" id="inputDescription" placeholder="Description">
                </div>
              </div>
            </div>

            <div class="overlay-dukdik" v-if="isLoading">
              <div class="loading-dukdik">
                <pacman-loader></pacman-loader>
              </div>
            </div>

            <!-- /.box-body -->
            <div class="box-footer">
              <button type="button" @click="clearInput()" class="btn btn-default">Cancel</button>
              <button type="button" @click="addEvent()" class="btn btn-info pull-right">Create</button>
            </div>
            <!-- /.box-footer -->
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
  export default {
    name: 'eventCreate',
    components: {
      PacmanLoader
    },
    data () {
      return {
        name: '',
        description: '',
        saveSuccess: '',
        isLoading: false
      }
    },
    firebase: {

    },
    methods: {
      addEvent: function () {
        var vm = this;
        vm.isLoading = true;
        db.ref('/events/' + this.name).set({
          name: this.name,
          description: this.description
        }).then(function () {
          vm.isLoading = false;
        })
      },
      clearInput: function () {
        var vm = this;
        vm.name = "";
        vm.description = "";
      }
    }
  }
</script>

<style>
  .overlay-dukdik {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9999;
    opacity: 0.7;
    top: 0;
    left: 0;
    background-color: #000000;
  }

  .loading-dukdik {
    position: absolute;
    top: 50%;
    left: 50%
  }
</style>
