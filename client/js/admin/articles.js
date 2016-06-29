import Vue from 'vue'
import request from 'superagent'
import config from '../../../src/config'
import { CATEGORIES } from '../../../src/data'

if ( $('#articles-page').length ) main()

async function main() {
    var app = new Vue({
        el: '.ui.form',
        data: {
            category: window.feData.category || '',
            CATEGORIES: CATEGORIES  
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
                const params = {
                    title: this.title,
                    content: $('#editor').val(),
                    category: this.category
                }
                let url = location.origin + '/api/article'
                let method = 'post'
                let successTxt = 'add post is ok'
                if (isEdit) {
                    url += '/' + window.feData.id   
                    method = 'put'
                    successTxt = 'modified is ok'
                }
                const res = await request[method](url)
                                    .set('Content-Type', 'application/json')
                                    .send(params)
                if (res.status === 200) alert(successTxt)
            }
        },
        watch: {
            'category': (val, oldVal) => {
                location.href = `/admin/articles?category=${val}`
            }
        }
            
    })




    let editorOptions = {
        heightMax: 600,
        heightMin: 300,
        toolbarButtons: ['fullscreen', 'italic', 'bold',  'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html']
        ,toolbarInline: false,
    }

    const imageUploadOpt = {
        imageUploadURL: '/api/upload',
    }

    Object.assign(editorOptions, imageUploadOpt)

    var froalaEditor = $('#editor').froalaEditor(editorOptions)


    froalaEditor
        .on('froalaEditor.image.beforeUpload', function (e, editor, images) {
            // Return false if you want to stop the image upload.
        })
        .on('froalaEditor.image.uploaded', function (e, editor, response) {
            // Image was uploaded to the server.
        })
        .on('froalaEditor.image.inserted', function (e, editor, $img, response) {
            // Image was inserted in the editor.
        })
        .on('froalaEditor.image.replaced', function (e, editor, $img, response) {
            // Image was replaced in the editor.
        })
        .on('froalaEditor.image.error', function (e, editor, error, response) {
            // Bad link.
            if (error.code == 1) { }

            // No link in upload response.
            else if (error.code == 2) { }

            // Error during image upload.
            else if (error.code == 3) { }

            // Parsing response failed.
            else if (error.code == 4) { }

            // Image too text-large.
            else if (error.code == 5) { }

            // Invalid image type.
            else if (error.code == 6) { }

            // Image can be uploaded only to same domain in IE 8 and IE 9.
            else if (error.code == 7) { }

            // Response contains the original server response to the request if available.
        });


    $('.ui.radio.checkbox').checkbox()
    $('select.dropdown').dropdown({
        placeholder: false
    })
}
