const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Create a comment
// withAuth make sures that the user is logged in before they can create a comment
router.post('/', withAuth, (req, res) => {
  // Expect req.body to have comment_text and post_id
  Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update a comment
// withAuth make sures that the user is logged in before they can update a comment
router.put('/:id', withAuth, (req, res) => {
  // Expect req.body to have comment_text
  Comment.update(
    {
      comment_text: req.body.comment_text
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



// Delete a comment by a specific id
// withAuth make sures that the user is logged in before they can delete a comment
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;