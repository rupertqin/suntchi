import Router from 'koa-router'
import info from './info'

const router = Router()

router.use('', info.routes(), info.allowedMethods())

export default router
