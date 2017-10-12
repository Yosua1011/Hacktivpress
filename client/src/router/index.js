import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import ArticlesList from '@/components/ArticlesList'
import NewArticle from '@/components/NewArticle'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/newArticle',
      component: NewArticle
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: ArticlesList
        },
        {
          path: ':slug',
          component: ArticleDetail,
          props: true
        }
      ]
    }
  ]
})
