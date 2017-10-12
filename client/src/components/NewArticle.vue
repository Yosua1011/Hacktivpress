<template>
  <div class="">
    <form @submit.prevent='postQuestionNew ()'>
      <div class="modal-dialog" id="question-form" role="document">
         <div class="modal-content">
            <div class="modal-header">
               <router-link :to="'/home'"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></router-link>
               <h4 class="modal-title" id="myModalLabel">Article Form</h4>
            </div>
            <div class="modal-body">
               <label id="title">Title :</label><br>
               <input type="text"  name="userRegister" value="" class="form-control" v-model="newPost.title"><br>
               <label id="content">Content :</label><br>
               <textarea type="text"  name="passRegister" value="" class="form-control" v-model="newPost.content"></textarea><br>
               <label id="category">Category :</label><br>
               <input type="text"  name="passRegister" value="" class="form-control" v-model="newPost.category"><br>
            </div>
            <div class="modal-footer">
               <router-link :to="'/'"><a class="btn btn-default">Cancel</a></router-link>
               <a type="submit" class="btn btn-primary" @click="postNewArticle(newPost)">Submit</a>
            </div>
         </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      newPost: {
        title: '',
        content: '',
        category: ''
      },
      pesan: ''
    }
  },
  methods: {
    ...mapActions([
      'postNewArticle'
    ]),
    clearMe () {
      this.pesan = 'Question posted'
    }
  }
}
</script>

<style lang="css">
#question-form: {
  width: 100%;
}
</style>
