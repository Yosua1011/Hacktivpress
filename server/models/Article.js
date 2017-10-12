const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  slug: {type: String},
  title: {type: String, required: true},
  content: {type: String, required: true},
  category: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "User"}
}, {
  timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article
