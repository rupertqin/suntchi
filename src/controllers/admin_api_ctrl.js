const mongoose = require('mongoose');
// const User = mongoose.model('User');


export default {
    login: async function login(ctx, next) {
        const title = 'koa2 title'

        await ctx.render('admin/login', {
            title
        })
    },
    
    about: async function about(ctx, next) {
        const title = 'koa2 title'

        await ctx.render('about', {
            title
        })
    }
}
