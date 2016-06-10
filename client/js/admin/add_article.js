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



import 'froala-editor/css/froala_editor.min.css'
import 'font-awesome/css/font-awesome.css'

$('#editor').froalaEditor({
    heightMax: 600,
    heightMin: 300,
    imageUploadURL: 'http://i.froala.com/upload',
    toolbarButtons: ['fullscreen', 'italic', 'bold',  'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html']
    ,toolbarInline: false,
})