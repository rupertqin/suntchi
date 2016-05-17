async function index (ctx, next) {
  const title = 'koa2 title'

  await ctx.render('index', {
    title
  })
}

async function about (ctx, next) {
  const title = 'koa2 title'

  await ctx.render('about', {
    title
  })
}


export {
  index, about
}
