const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/user', async (ctx, next) => {
  ctx.body = {
    nickName: 'tom',
    mobile: '17666111185',
    email: '17666111185@163.com'
  }
})

router.post('/user/nickName', async (ctx, next) => {
  ctx.body = {
    nickName: 'tom',
    mobile: '17666111185',
    email: '17666111185@163.com'
  }
})

module.exports = router
