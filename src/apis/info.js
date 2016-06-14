import Router from 'koa-router'
import mongoose from 'mongoose'
import Info from '../models/info'

const router = Router()

router.get('/info/navigator', async (ctx, next)=> {
    const navigator = await Info.findOne({key: 'navigator'})
    Util.resJson(ctx.response, navigator.data)
})

router.post('/info/navigator', async (ctx, next)=> {
    let navigator = await Info.find({key: 'navigator'})
    const sentData = ctx.request.body
    if (!Array.isArray(sentData)) {
        Util.resJson(ctx.response, 'error')
    } else {
        const savedData = await Info.update({key: 'navigator'}, {$set: {data: sentData}})
        Util.resJson(ctx.response, savedData)
    }
})

export default router

