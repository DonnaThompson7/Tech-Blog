const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     console.log("inside put route, post id is " + req.params.id);

//     const updatedPost = await Post.update(
//       {
//       name: req.body.name,
//       description: req.body.description,
//       },
//       {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id!' });
//       return;
//     }
//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
