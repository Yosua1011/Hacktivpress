import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  articlesdata: [],
  loginstate: false,
  user: '',
  head: null
}

const mutations = {
  allContent (state, payload) {
    console.log('All articles ', payload)
    state.articlesdata = payload
  },
  newArticleContent (state, payload) {
    console.log('new article unshift data ', payload)
    state.articlesdata.unshift(payload)
  },
  spliceArticle (state, id) {
    let idx = state.articlesdata.findIndex((article) => article._id === id)
    state.articlesdata.splice(idx, 1)
  },
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  getAllArticles ({commit}) {
    http.get('/articles')
    .then(({data}) => {
      console.log('all articles ', data)
      commit('allContent', data)
    })
    .catch(err => console.log(err))
  },
  postNewArticle ({commit}, newArticle) {
    console.log(`ini data di postNewArticle sebelum http ${JSON.stringify(newArticle)}`)
    http.post('/articles', {
      title: newArticle.title,
      content: newArticle.content,
      category: newArticle.category
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({data}) => {
      console.log(`ini data di postNewArticle ${data}`)
      router.push('/')
    })
    .catch(err => console.log(err))
  },
  deleteArticle ({commit}, id) {
    console.log('article yang akan di delete memiliki id ', id)
    http.delete(`/articles/${id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({data}) => {
      console.log(data)
      if (data.message !== null) {
        console.log(`${JSON.stringify(data)} ini kedelete`)
        commit('spliceArticle', id)
        router.push('/')
      } else {
        console.log('Mohon maaf anda tidak dapat menghapus artikel ini')
      }
    })
    .catch(err => console.log(err))
  },
  getUser ({commit}, token) {
    http.post(`/pemecahtoken`, {
      token: token
    })
    .then(({data}) => {
      console.log(`ini data dari getUser ${data.username}`)
      localStorage.setItem('username', data.username)
      commit('setUser', {user: data, token: token})
    })
    .catch(err => console.log(err))
  },
  editArticle ({commit}, article) {
    http.put(`articles/${article.id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({data}) => {
      console.log('Sukses keedit')
    })
    .catch(err => console.log(err))
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
