var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')
var auth = require('../helpers/auth')

/* GET users listing. */
router.get('/', articleController.getAllArticle);
router.get('/:author', articleController.getByAuthor);
router.get('/cat', articleController.getByCategory);
router.get('/:slug', articleController.getOneArticle);
router.post('/', auth.isLogin, articleController.createNewArticle);
router.put('/:id', auth.isLogin, auth.isArticleCreatorAuth, articleController.editOne);
router.delete('/:id', auth.isLogin, auth.isArticleCreatorAuth, articleController.deleteOne);

module.exports = router;
