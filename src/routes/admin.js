import Router from 'koa-router'
import {login, about} from '../controllers/adminCtrl'

const router = Router()

router.get('/', login)

export default router
