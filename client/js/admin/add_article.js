import Vue from 'vue'
import request from 'superagent'
import config from '../../../src/config'

import 'semantic-ui/dist/semantic'
import 'froala-editor/js/froala_editor.min'
import 'froala-editor/js/plugins/align.min'
import 'froala-editor/js/plugins/file.min'
import 'froala-editor/js/plugins/image.min'
import 'froala-editor/js/plugins/save.min'
import 'froala-editor/js/plugins/url.min'
import 'froala-editor/js/plugins/quote.min'
import 'froala-editor/js/plugins/video.min'
import 'froala-editor/js/plugins/code_view.min'
import 'froala-editor/css/plugins/code_view.css'
import 'froala-editor/css/plugins/char_counter.css'
import 'froala-editor/css/plugins/colors.css'
import 'froala-editor/css/plugins/draggable.css'
import 'froala-editor/css/plugins/emoticons.css'
import 'froala-editor/css/plugins/file.css'
import 'froala-editor/css/plugins/fullscreen.css'
import 'froala-editor/css/plugins/image.css'
import 'froala-editor/css/plugins/image_manager.css'
import 'froala-editor/css/plugins/line_breaker.css'
import 'froala-editor/css/plugins/quick_insert.css'
import 'froala-editor/css/plugins/table.css'
import 'froala-editor/css/plugins/video.css'



import 'froala-editor/css/froala_editor.min.css'
import 'froala-editor/css/froala_style.css'
import 'font-awesome/css/font-awesome.css'

if ( $('#add-article-page').length ) main()

async function main() {
    const isEdit = window.feData && window.feData.id
    let articleData = {}
    if (isEdit) {
        let data = await request.get(location.origin + '/api/article/' + window.feData.id)
        articleData = data.body
    }
    

    var app = new Vue({
        el: '.ui.form',
        data: {
            title: articleData.title || '',
            content: articleData.content || '',
            category:  articleData.category || 'about'
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
                                    .send(params);

                if (isEdit) {
                    if (res.status === 200) alert(successTxt)

                } else {
                    location.href = `/admin/article/${res}`
                }
            }
        }
            
    })




    let editorOptions = {
        heightMax: 600,
        heightMin: 300,
        toolbarButtons: ['fullscreen', 'italic', 'bold',  'underline', 'strikeThrough', 
            'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 
            'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 
            'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 
            'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 
            'clearFormatting', 'selectAll', 'html']
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


    $('.ui.radio.checkbox') .checkbox()
}
