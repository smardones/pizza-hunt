const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');
const { post } = require('./pizza-routes');

router
    .route('/:pizzaId')
    .post(addComment);

router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;