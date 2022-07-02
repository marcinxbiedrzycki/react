const router = require('express').Router();

const { version } = require('../../package.json');

router.get('/', (req, res) => res.status(200).json({
  name: 'My journey blog API',
  version,
  status: 'ok',
}));

router.use('/header-info', require('./header-info'));
router.use('/articles', require('./articles'))
router.use('/article', require('./article'))
router.use('/admin/articles', require('./admin'))

module.exports = router;
