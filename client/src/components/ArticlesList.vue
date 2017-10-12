<template>
  <div class="col-md-8">
    <article-summary></article-summary>

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
      'allarticlestate',
      'articlebyauthor'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
