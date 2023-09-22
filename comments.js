// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comments controller
const commentsController = require('../controllers/comments.js');

// Set up routes
router.get('/', commentsController.getAllComments);
router.get('/:id', commentsController.getCommentById);
router.post('/', commentsController.addComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

// Export router
module.exports = router;