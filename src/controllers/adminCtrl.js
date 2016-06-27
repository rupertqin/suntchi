import url from 'url'
import User from '../models/user'
import Article from '../models/article'

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
    
    addArticle: async function(ctx, next) {
        const title = 'koa2 title'

        var users = await User.find({})
        await ctx.render('admin/add_article', {
            title, users, 
            flag: 'add-article',
            isLogin: ctx.req.session.isAdmin
        })
    },

    editArticle: async function(ctx, next) {
        const title = 'koa2 title'

        var users = await User.find({})
        await ctx.render('admin/add_article', {
            title, users, 
            flag: 'add-article',
            isLogin: ctx.req.session.isAdmin,
            fe: {
                id: ctx.params.id
            }
        })
    },

    articles: async function(ctx, next) {
        const title = 'articles'

        var articles = await Article.find({})
        await ctx.render('admin/articles', {
            title, articles, 
            flag: 'articles',
            isLogin: ctx.req.session.isAdmin
        })
    },

    navigator: async function(ctx, next) {
        const title = 'navigator'
        const users = await User.find({})
        await ctx.render('admin/navigator', {
            title, 
            users,
            flag: 'navigator', 
            isLogin: ctx.req.session.isAdmin
        })
    }
    
}
