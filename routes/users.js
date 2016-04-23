var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response，hello!';
});

module.exports = router;
