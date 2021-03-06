import Vue from 'vue'
import request from 'superagent'
import config from '../../../src/config'

const url = config.hostname + '/api/info'

async function init() {
    var res = await request(url + '/navigator')
    new Vue({
        el: '.ui.form',
        data: {
            navs: res.body
        },
        methods: {
            addItem: function() {
                console.log(this)
                this.navs.push({
                    name: '',
                    usr: ''
                })
            },

            delItem: function(idx) {
                this.navs.splice(idx, 1)
                
            },

            save: async function() {
                const res = await request.post(url + '/navigator')
                                    .set('Content-Type', 'application/json')
                                    .send(this.navs)
                if (res.status === 200) alert(res.statusText)
            }
        }
            
    })

    
}


if ( $('#navigator-page').length ) init()
