import Router from 'koa-router'
import adminCtrl from '../controllers/adminCtrl'

const router = Router()

// check login
router.use((ctx, next)=> {
    // if (ctx.request.url !== '/admin/login') {
    //     var sid = ctx.cookies.get('SID')
    //     var session = Session.get(sid)
    //     if ( !(session && session.isAdmin) ) {
    //         ctx.response.redirect('/admin/login')
    //     }
    // }
    return next().then(() => {
        // after 
    })
})


router.get('/login', adminCtrl.login)
router.get('/logout', adminCtrl.logout)
router.get('/dashboard', adminCtrl.dashboard)
router.get('/add-article', adminCtrl.addArticle)
router.get('/article/:id', adminCtrl.editArticle)
router.get('/article/:id/del', adminCtrl.delArticle)
router.get('/articles', adminCtrl.articles)
router.get('/navigator', adminCtrl.navigator)

export default router
