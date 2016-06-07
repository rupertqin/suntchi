import url from 'url'
import User from '../models/user'

export default {
    login: async function (ctx, next) {
        const title = 'koa2 title'
        var users = await User.find({})
        console.log('====== ctx: ', ctx.req.session)
        await ctx.render('admin/login', {
            title, users
        })
    },

    about: async function about(ctx, next) {
        const title = 'koa2 title'

        await ctx.render('about', {
            title
        })
    }
}
