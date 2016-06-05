import Router from 'koa-router'
import adminCtrl from '../controllers/adminCtrl'

const router = Router()

router.get('/login', adminCtrl.login)

export default router
