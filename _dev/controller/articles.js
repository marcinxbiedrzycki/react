const router = require('express').Router();

const { posts } = require('../data/posts.json');

const formatImageUrl = (url, req) => {
  if (!url.match(/^http/)) {
    url = `${req.protocol}://${req.get('host')}${url}`;
  }
  return url;
};

router.get('/:page', (req, res) => {
  // @todo: add pagination
  res.status(200).json(posts.sort((p1, p2) => p1.date < p2.date ? 1 : -1).map((post) => ({
    ...post,
    imageUrl: formatImageUrl(post.imageUrl, req),
  })));
});

module.exports = router;
