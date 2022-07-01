const router = require('express').Router();

const { posts } = require('../data/posts.json');

const formatImageUrl = (url, req) => {
  if (!url.match(/^http/)) {
    url = `${req.protocol}://${req.get('host')}${url}`;
  }
  return url;
};

router.get('/:slug', (req, res) => {
  const filteredPosts = posts.filter(post => post.slug === req.params.slug);
  if (filteredPosts.length === 0) {
    return res.status(404).json({
      "error": "resource not found"
    });
  }

  return res.status(200).json({
    ...filteredPosts[0],
    imageUrl: formatImageUrl(filteredPosts[0].imageUrl, req),
  });
});

module.exports = router;
