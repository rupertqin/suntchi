import url from 'url'
import User from '../models/user'

export default {
    login: async (ctx, next)=> {
        const title = 'koa2 title'
        var users = await User.find({})
        console.log('====== ctx: ', ctx.req.session)
        await ctx.render('admin/login', {
            title, users, isLogin: ctx.req.session.isAdmin
        })
    },

    logout: async function login(ctx, next) {
        const title = 'koa2 title'
        const body = ctx.request.body
        const sid = ctx.req.session.id
        var session = Session.get(sid)
        session.isAdmin = false
        ctx.redirect('/admin/login')
    },
    
    dashboard: async (ctx, next)=> {
        const title = 'koa2 title'

        var users = await User.find({})
        await ctx.render('admin/dashboard', {
            title, users, isLogin: ctx.req.session.isAdmin
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
