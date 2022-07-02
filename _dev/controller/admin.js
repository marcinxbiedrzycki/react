const { readFileSync, writeFile } = require('fs');
const { randomUUID } = require('crypto');
const slugify = require('slug-generator');
const router = require('express').Router();

router.get('/', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  return res.status(200).json(data.posts.sort((p1, p2) => p1.date < p2.date ? 1 : -1));
});

router.post('/', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const id = randomUUID();
  const image = req.body.image;

  data.posts.push({
    id,
    ...req.body,
    slug: slugify(req.body.title),
    imageUrl: `/images/${id}.jpg`,
    image: undefined,
  });
  writeFile(filePath, JSON.stringify(data), () => {
    writeFile(`${__dirname}/../data/images/${id}.jpg`, image.replace(/^data:image\/jpeg;base64,/, ""), 'base64', () => {
      return res.status(201).json({ added: true });
    });
  });
});

router.get('/:id', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const postsToUpdate = data.posts.filter(({ id }) => id === req.params.id);
  if (postsToUpdate.length === 0) {
    return res.status(404).json({
      "error": "resource not found"
    });
  }

  return res.status(200).json(postsToUpdate[0]);
});

router.patch('/:id', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const postsToUpdate = data.posts.filter(({ id }) => id === req.params.id);
  if (postsToUpdate.length === 0) {
    return res.status(404).json({
      "error": "resource not found"
    });
  }

  const posts = data.posts.filter(({ id }) => id !== req.params.id);
  posts.push({
    id: postsToUpdate[0].id,
    ...req.body,
    slug: slugify(req.body.title),
    imageUrl: `/images/${postsToUpdate[0].id}.jpg`,
  });

  writeFile(filePath, JSON.stringify({
    ...data,
    posts,
  }), () => {
    return res.status(204);
  });
});

router.delete('/:id', (req, res) => {
  const filePath = `${__dirname}/../data/posts.json`;
  const file = readFileSync(filePath, 'utf8');
  const data = JSON.parse(file);

  const posts = data.posts.filter(({ id }) => id !== req.params.id);

  writeFile(filePath, JSON.stringify({
    ...data,
    posts,
  }), () => {
    return res.status(204);
  });
})

module.exports = router;
