const router = require('express').Router();

const { posts } = require('../data/posts.json');

router.get('/', (req, res) => {
  const sortedPosts = posts.sort((p1, p2) => p1.date < p2.date ? 1 : -1);

  res.status(200).json([
    { title: 'Podróże', value: posts.length },
    { title: 'Ostatnia', value: sortedPosts[0].location.city },
    { title: 'Przedostatnia', value: sortedPosts[1].location.city },
  ])
});

module.exports = router;
