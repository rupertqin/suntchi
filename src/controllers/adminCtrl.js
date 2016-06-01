async function login (ctx, next) {
  const title = 'koa2 title'

  await ctx.render('admin/login', {
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
  login, about
}
