<template>
  <div>
    <div class="panel panel-primary" v-for="article in showArticles">
      <div class="panel-heading">
        <h3 class="panel-title">Title: {{ article.title }}</h3>
        <h3 class="panel-title">Author: {{ article.author.username }}</h3>
      </div>
      <div class="panel-body">
        <p>Content: {{ article.content }} </p>
        <p>Category: {{ article.category }}</p>
        <div class="" style="text-align: right">
          <router-link :to="'/' + article.slug">
            <button type="button" name="button"class="btn btn-warning" >
              <span class="glyphicon glyphicon-eye-open"></span> View Detail
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    showArticles () {
      return this.articlesdata()
    }
  },
  methods: {
    ...mapActions([
      'deleteQuestion'
    ]),
    ...mapState([
      'articlesdata'
    ])
  },
  created () {
    this.articlesdata()
  }
}
</script>

<style lang="css">
</style>
