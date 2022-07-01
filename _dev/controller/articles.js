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
  res.status(200).json(posts.map((post) => ({
    ...post,
    imageUrl: formatImageUrl(post.imageUrl, req),
  })));
});

module.exports = router;
