const mongoose = require('mongoose')
const Article = require('../models/Article')
var slug = require('achim-slug')
require('dotenv').config()

function createNewArticle (req, res) {
  Article.create({
    slug: slug(`${req.body.title}`),
    title:  req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.headers.id
  })
  .then(function(articleData) {
    res.send(articleData)
  })
  .catch(function(err) {
    res.send(err)
  })
}

function getAllArticle (req, res) {
  Article.find()
  .populate({
    path: 'author',
    select: 'username'
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

function getOneArticle (req, res) {
  Article.find({
    slug: req.params.slug
  })
  .populate({
    path: 'author',
    select: 'username'
  })
  .then(article => res.send(article))
  .catch(err => res.send(err))
}

function getByAuthor (req, res) {
  Article.find({
    author: req.params.author
  })
  .populate({
    path: 'author',
    select: 'username'
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

function getByCategory (req, res) {
  Article.find({
    category: req.params.category
  })
  .populate({
    path: 'author',
    select: 'username'
  })
  .then(articles => res.send(articles))
  .catch(err => res.send(err))
}

function editOne (req, res) {
  Article.findById(req.params.id)
  .then(editedArticle => {
    console.log('ini editedarticle ', editedArticle)
    console.log('ini headers ', req.headers)
    if (editedArticle.author.username == req.headers.username) {
      editedArticle.title = req.body.title || editedArticle.title
      editedArticle.content = req.body.content || editedArticle.content
      editedArticle.category = req.body.category || editedArticle.category

      editedArticle.save((err, data) => {
        if (err) {
          res.send('Maaf tidak bisa save editan anda')
        }
        res.send({
          message: `Update ${data.title} berhasil`
        })
      })
    } else {
      res.send('Gak bisa edit nih')
    }
  })
  .catch(err => res.send(err))
}

function deleteOne (req, res) {
  Article.remove({
    _id: req.params.id
  })
  .then(deletedArticle => {
    res.send({message: 'Article Terhapus'})
  })
  .catch(err => res.send(err))
}

module.exports = {
  createNewArticle,
  getAllArticle,
  getOneArticle,
  getByAuthor,
  getByCategory,
  editOne,
  deleteOne
}
