import Vue from 'vue'
import request from 'superagent'

const hostname = 'http://192.168.0.101:3000'
const url = hostname + '/api/info'
let users = []

async function init() {
    var res = await request(url + '/navigator')
    new Vue({
        el: '.ui.table',
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
                
            }
        }
            
    })

    
}


init()
