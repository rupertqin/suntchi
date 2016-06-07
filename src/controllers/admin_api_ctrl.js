const mongoose = require('mongoose');
const User = mongoose.model('User');


export default {
    login: async function login(ctx, next) {
        console.log('======== ctx: ', ctx.request.body, Object.keys(ctx) )
        const title = 'koa2 title'
        const body = ctx.request.body
        var user = await User.find({name: body.name})
        if (body.password !== user.password) {
            ctx.cookies.set('SID', 'pass')
            Util.resJson(400, ctx.response, 'error!')
            
        } else {
            ctx.cookies.set('SID', user.id)
            Util.resJson(410, ctx.response, ctx.request.body)
        }
        // ctx.req.session.user = user
        
        // ctx.sent(ctx.params)
    },
    
    about: async function about(ctx, next) {
        const title = 'koa2 title'

        await ctx.render('about', {
            title
        })
    }
}
