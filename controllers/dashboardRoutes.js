const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts for current user and JOIN with user data
    const postData = await Post.findAll({
      include: [
        { model: User,
          where: {id: req.session.user_id,},
          attributes: ['name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render('editPost', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/addPost', withAuth, (req, res) => {
//   console.log("calling addpost as user=" + req.session.user_id);
//   // If the user is already logged in, redirect the request to another route
//     res.render('addPost', {
//       logged_in: req.session.logged_in      
//     })

// });


module.exports = router;
