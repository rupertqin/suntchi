import Router from 'koa-router'

const router = Router()
const top = require('./top')
const users = require('./users')
const admin = require('./admin')

router.use('', top.routes(), top.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

export default router
