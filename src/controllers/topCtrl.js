export default {
    index: async function(ctx, next) {
        const title = 'koa2 title'
        await ctx.render('index', {
            title, flag: 'index'
        })
    }, 
    about: async function(ctx, next) {
        const title = 'koa2 title'
        await ctx.render('about', {
            title, flag: 'about'
        })
    }
}
