import Router from 'koa-router'
import adminCtrl from '../controllers/adminCtrl'

const router = Router()

// check login
router.use((ctx, next)=> {
    if (ctx.request.url !== '/admin/login') {
        var sid = ctx.cookies.get('SID')
        var session = Session.get(sid)
        if ( !(session && session.isAdmin) ) {
            ctx.response.redirect('/admin/login')
        }
    }
    return next().then(() => {
        // after 
    })
})
router.get('/login', adminCtrl.login)
router.get('/dashboard', adminCtrl.dashboard)

export default router
