const express = require('express');
const cors = require('./middleware/cors');
const port = 3001;
const enforcedDelay = 0.35;

express()
  .use(cors)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => { setTimeout(next, enforcedDelay * 1000); })
  .use('/images', express.static(`${__dirname}/data/images`))
  .use('/', require('./controller'))
  .listen(port, () => console.log(`My journey blog API listening on port ${port}!`));
