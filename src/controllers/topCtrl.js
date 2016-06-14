import Info from '../models/info'

// let navs = []
// let data = Info.findOne({key: 'navigator'}, function(err, info) {
//     navs = info.data
// 
// })

export default {
    index: async function(ctx, next) {
        const title = 'koa2 title'
        const navs = await Info.findOne({key: 'navigator'}) 
        await ctx.render('index', {
            title, flag: 'index',
            navs: navs.data
        })
    }, 
    about: async function(ctx, next) {
        const title = 'koa2 title'
        const navs = await Info.findOne({key: 'navigator'}) 
        await ctx.render('about', {
            title, flag: 'about',
            navs: navs.data
        })
    }
}
