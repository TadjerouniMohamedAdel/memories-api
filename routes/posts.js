const express = require('express')
const postsController = require('../controllers/posts.js')
const router = express.Router()

router.get('/',postsController.getPost)
router.post('/',postsController.createPost)
router.patch('/:id',postsController.updatePost)
router.delete('/:id',postsController.deletePost)
router.patch('/:id/likePost',postsController.likePost)

module.exports = router