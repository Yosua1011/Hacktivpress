<template>
  <div class="col-md-8">
    <article-summary/>
  </div>
</template>

<script>
import ArticleSummary from '@/components/ArticleSummary'
import { mapActions } from 'vuex'
// import NewQuestion from '@/components/NewQuestion'
export default {
  components: {
    // NewQuestion,
    ArticleSummary
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
