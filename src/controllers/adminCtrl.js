import url from 'url'
import User from '../models/user'

export default {
    login: async (ctx, next)=> {
        const title = 'koa2 title'
        var users = await User.find({})
        console.log('====== ctx: ', ctx.req.session)
        await ctx.render('admin/login', {
            title, users
        })
    },

    dashboard: async (ctx, next)=> {
        const title = 'koa2 title'

        var users = await User.find({})
        await ctx.render('admin/dashboard', {
            title, users
        })
    },
    
    checkLogin: async function about(ctx, next) {
        const title = 'koa2 title'

        var users = await User.find({})
        await ctx.render('admin/dashboard', {
            title, users
        })
    }
}
