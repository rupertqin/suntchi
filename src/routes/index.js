import Router from 'koa-router'

const router = Router()
const top = require('./top')
const users = require('./users')
const admin = require('./admin')
const adminAPI = require('./admin_api')

router.use('', top.routes(), top.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())
router.use('/admin', adminAPI.routes(), adminAPI.allowedMethods())

export default router
