const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/pug', async (ctx, next) => {
  await ctx.render('pug', {
    title: 'Hello pug!'
  })
})

router.get('/ejs', async (ctx, next) => {
  await ctx.render('ejs', {
    title: 'Hello ejs!'
  })
})

router.get('/vue', async (ctx, next) => {
  await ctx.render('vue', {
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

router.post('/user', async (ctx, next) => {

  const { id } = ctx.request.body

  const tom = {
    nickName: 'tom',
    age: '3',
    mobile: '17666111185',
    email: '17666111185@163.com'
  }

  const jerry = {
    nickName: 'jerry',
    age: '2',
    mobile: '18777222296',
    email: '18777222296@163.com'
  }

  const ret = id === '1001' ? tom : jerry

  ctx.body = ret
})

module.exports = router
