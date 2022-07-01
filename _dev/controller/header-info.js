const router = require('express').Router();

const { posts } = require('../data/posts.json');

router.get('/', (req, res) => res.status(200).json([
  { title: 'Podróże', value: posts.length },
  { title: 'Ostatnia', value: posts[0].location.city },
  { title: 'Przedostatnia', value: posts[1].location.city },
]));

module.exports = router;
