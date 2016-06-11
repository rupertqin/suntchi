async function index (ctx, next) {
  const title = 'koa2 title'

  await ctx.render('index', {
    title, flag: 'index'
  })
}

async function about (ctx, next) {
  const title = 'koa2 title'

  await ctx.render('about', {
    title, flag: 'about'
  })
}


export default {
  index, about
}
