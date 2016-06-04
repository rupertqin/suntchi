import Router from 'koa-router'
import {index, about} from '../controllers/indexCtrl'

const router = Router()

router.get('/', index)
router.get('/about', about)




export default router


