import Router from 'koa-router'
import navigator from './navigator'

const router = Router()

router.use('', navigator.routes(), navigator.allowedMethods())

export default router
