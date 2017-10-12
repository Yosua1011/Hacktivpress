<template lang="html">
  <div class="container">
    <h1 class="text-center">Welcome to HacktivPress <span v-if="loginstate">{{ head }}</span></h1>
    <div class="row menu">
      <div class="col-md-6">
        <router-link :to="'/'">
          <button type="button" name="button" class="btn btn-primary">Home</button>
        </router-link>
        <router-link :to="'/newArticle'">
          <button type="button" name="button" class="btn btn-primary" v-if="loginstate === true">New Article</button>
        </router-link>
        <button type="button" name="button" class="btn btn-primary" data-toggle="modal" data-target="#myAuthor">View by Author</button>
        <div class="modal fade" id="myAuthor">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Your Author Selection</h4>
              </div>
              <form class="">
              <div class="modal-body">
                  <label for="title">Author</label>
                  <input type="text" placeholder="title" v-model="author" style="color: black">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="" data-dismiss="modal">Search the Articles</button>
              </div>
              </form>
            </div>
          </div>
        </div>
        <router-link :to="'/login'"><a class="btn btn-default" v-if="loginstate === false">Login</a></router-link>
        <button type="button" name="button" class="btn btn-danger" @click="doLogout" v-if="loginstate === true">Logout</button>
      </div>
    </div>
    <div class="row">
      <!-- <questions-list></questions-list> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'container',
  data () {
    return {
      loginstate: false,
      head: null
    }
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    ...mapState([
      'author'
    ]),
    doLogout () {
      localStorage.clear()
      this.loginstate = false
      this.showAlert('Selamat anda sudah logout')
      this.checkLogin()
    },
    checkLogin () {
      console.log('check login')
      if (localStorage.getItem('token') === null) {
        this.loginstate = false
      } else {
        this.loginstate = true
      }
    },
    showAlert (msg) {
      // Use sweetalret2
      this.$swal(`${msg}`)
    }
  },
  computed: {
  },
  created () {
    // this.headline()
    this.checkLogin()
  }
}
</script>

<style lang="css">
.menu {
  padding: 16px 0;
}
</style>
