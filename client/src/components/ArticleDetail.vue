<template>
  <div class="col-md-9">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{detail.title}}
          <div style="text-align: right" v-if="loginstate === true && buttonstate === true">
            <button type="button" name="button"class="btn btn-warning" data-toggle="modal" data-target="#myEdit" @click="masukinData(detail)">
              <span class=""></span> Edit
            </button>
            <div class="modal fade" id="myEdit">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Edit Article</h4>
                  </div>
                  <form class="">
                  <div class="modal-body">
                      <label for="title" style="color: black">Title</label>
                      <input type="text" placeholder="title" v-model="editData.title" style="color: black"><br />
                      <label for="question" style="color: black">Content</label>
                      <textarea type="text" placeholder="question" v-model="editData.content  " style="color: black"></textarea><br />
                      <label for="question" style="color: black">Category</label>
                      <input type="text" placeholder="question" v-model="editData.category  " style="color: black">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="editArticle(editData)" data-dismiss="modal">Save changes</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <button type="button" name="button"class="btn btn-warning" @click="deleteArticle(detail._id)">
              <span class=""></span> Delete
            </button>
          </div>
        </h3>
      </div>
      <div class="panel-body">
        <div class="" style="text-align: left">
          <p>Author: {{detail.author.username}}</p>
          <p>
            Question: {{detail.content}}
          </p>
          <p>
            Category: {{detail.category}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['slug'],
  data () {
    return {
      detail: '',
      editData: {id: null, title: '', content: '', category: ''},
      loginstate: false,
      buttonstate: false
    }
  },
  methods: {
    ...mapActions([
      'deleteArticle',
      'editArticle'
    ]),
    ...mapState([
    ]),
    getDetail (slug) {
      // console.log(slug)
      this.$http.get(`/articles/slug/${slug}`)
      .then(({data}) => {
        this.detail = data[0]
        this.checkButton()
        this.checkLogin()
      })
      .catch(err => console.log(err))
    },
    checkLogin () {
      // console.log('detail.author.username = ' + this.detail.author.username)
      // console.log('user.username = ' + localStorage.getItem('username'))
      if (localStorage.getItem('token') === null) {
        // console.log(`login state false`)
        this.loginstate = false
      } else {
        // console.log(`login state true`)
        this.loginstate = true
      }
    },
    checkButton () {
      if (this.detail.author.username === localStorage.getItem('username')) {
        // console.log(`button state true`)
        this.buttonstate = true
      } else {
        // console.log(`button state false`)
        this.buttonstate = false
      }
    },
    masukinData (input) {
      // console.log(input)
      this.editData = input
    }
  },
  created () {
    this.getDetail(this.slug)
  },
  watch: {
    slug () {
      this.getDetail(this.slug)
    }
  }
}
</script>

<style lang="css">
</style>
