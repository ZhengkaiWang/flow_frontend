import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import FroalaEditor from 'react-froala-wysiwyg'
import 'font-awesome/css/font-awesome.css';
import Cookies from 'js-cookie'
import $ from 'jquery'
import jQuery from 'jquery'
window.$ = $
window.jQuery = jQuery

class EditorText extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...({
          model:nextProps.value||'',
        })
      }
    }
    return null
  }

  config = {
    language: 'zh_cn',
    placeholderText: '文章正文编辑',
    attribution: false,
    heightMin: 600,
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
      'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertTable', '|', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting',
      '|', 'html', '|', 'undo', 'redo'],
    quickInsertButtons: [],
    quickInsertTags: [],

    imageUploadURL: '/article/upload/image/',
    imageUploadMethod: 'POST',
    imageUploadParam: 'article_image',
    imageUploadParams: {
      csrfmiddlewaretoken:  Cookies.get('csrftoken'),
    },
    imageManagerDeleteURL: '/article/delete/image/',
    imageMaxSize: 10 * 1024 * 1024,
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],

    events: {
      'froalaEditor.initialized': (e, editor) => {
        this.props.method.handleUpstream(editor)
        this.froalaInstance = editor;
      }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      model: props.value || '',
    }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      onChange(changedValue)
    }
  }

  handleModelChange = model =>
    this.triggerChange(model)


  render() {
    return (

      <FroalaEditor
        model={this.state.model}
        onModelChange={this.handleModelChange}
        config={this.config}
      />
    )
  }
}

export default EditorText