class Sess {
    constructor() {
        this.sessions = {}
        this.key = 'SID'
        this.EXPIRES = 10 * 60 * 1000
        return this.init.bind(this)
    }
    
    init(ctx, next) {
        ctx.req.cookies = this.parseCookie(ctx.req.headers.cookie)
        var id = ctx.cookies.get(this.key)
        if (!id) {
            ctx.req.session = this.generate()
        } else {
            var session = this.sessions[id]
            if (session) {
                if (session.cookie.expire > (new Date()).getTime()) {
                    session.cookie.expire = (new Date()).getTime() + this.EXPIRES
                    ctx.req.session = session
                } else {
                    delete this.sessions[id]
                    ctx.req.session = this.generate()
                }
            } else {
                ctx.req.session = this.generate()
            }
        }
        
        // var sessionStr = this.serialize('Set-Cookie',  this.key + '=' + ctx.req.session.id)
        // cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session]
        ctx.cookies.set(this.key, ctx.req.session.id, {path: '/admin'})
        ctx.response.set('Cache-Control', 'no-cache');
         
        return next().then(() => {
            // after 
        })
    }
    
    generate(data) {
        let session = {}
        session.id = (new Date()).getTime() + Math.random()
        session.cookie = {
            expire: (new Date()).getTime() + this.EXPIRES
        }
        if (data && typeof data === 'object') {
            Object.assign(session, data)
        }
        this.sessions[session.id] = session
        return session
    }
    
    parseCookie(cookie) {
        var cookies = {};
        if (!cookie) {
            return cookies
        }
        cookie.split(';').forEach((c)=> {
            var pair = c.split('=');
            cookies[pair[0].trim()] = pair[1]
        })
        return cookies
    }
    
    cookieObj2Arr(obj) {
        
    }
    
    decode(val) {
        var ret = ''
        
        if (typeof val !== 'object') {
            ret = val
        } else {
            var arr = []
            for (var prop in val) {
                if (val.hasOwnProperty(prop)) {
                    arr.push(prop + '=' + val[prop])
                }
            }
            ret = arr.join(';')
        } 
        
        return ret
    }
    
    serialize(name, val, opt) {
        var pairs = [name + '=' + this.decode(val)]
        opt = opt || {}
        
        if (opt.maxAge) pairs.push('Max-Age=' + opt.maxAge)
        if (opt.domain) pairs.push('Domain=' + opt.domain)
        if (opt.path) pairs.push('Path=' + opt.path)
        if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString())
        if (opt.httpOnly) pairs.push('Max-Age=' + opt.HttpOnly)
        if (opt.secure) pairs.push('Max-Age=' + opt.Secure)
        
        return pairs.join('; ')
    }
}

export default new Sess()