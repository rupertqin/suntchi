import Router from 'koa-router'
import mongoose from 'mongoose'
import Navigator from '../models/navigator'

const User = mongoose.model('User');
const router = Router()

router.get('/navigator', async (ctx, next)=> {
    const navigators = await Navigator.find({})
    Util.resJson(ctx.response, 200, navigators )
})

router.post('/navigator', async (ctx, next)=> {
    const users = await User.find({})
    const params = ctx.request.body
    if (!params.name || !params.url) {
        Util.resJson(ctx.response, 400,  data)
    } else {
        const navigator = new Navigator(ctx.request.body)
        const data = await navigator.save()
        Util.resJson(ctx.response, 200, data)
    }
})

export default router

