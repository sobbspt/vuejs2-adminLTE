<template>
  <div>
    <section class="content-header">
      Event List
    </section>
    <section class="content">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Hover Data Table</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap"><div class="row"><div class="col-sm-6"></div><div class="col-sm-6"></div></div><div class="row"><div class="col-sm-12">
            <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
              <thead>
              <tr role="row">
                <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Name</th>
                <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Description</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="event in events" role="row" class="odd">
                  <td class="sorting_1">{{ event.name }}</td>
                  <td>{{ event.description }}</td>
                </tr>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
          </div>
            <div class="row">
              <div class="col-sm-5">
                <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Total events: {{ events.length }}
                </div>
              </div>
              <div class="col-sm-7">
                <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                  <ul class="pagination">
                    <li class="paginate_button active">
                      <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">
                        1</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.box-body -->
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'eventList',
    data () {
      return {

      }
    },
    firebase: {
      events: db.ref('events')
    }
  }
</script>

<style>

</style>
