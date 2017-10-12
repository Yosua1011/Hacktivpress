<template>
  <div class="col-md-8">
    <article-summary></article-summary>
    <!-- <article-summary v-if="allarticlestate === true"></article-summary>
    <article-author v-if="allarticlestate === false"></article-author> -->
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
import ArticleAuthor from '@/components/ArticleAuthor'
import { mapActions, mapState } from 'vuex'
// import NewQuestion from '@/components/NewQuestion'
export default {
  components: {
    // NewQuestion,
    ArticleSummary,
    ArticleAuthor
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ]),
    ...mapState([
      'allarticlestate'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
