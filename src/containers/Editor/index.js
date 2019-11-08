import React from 'react'
import {editorApi} from '../../utils/api'
import Editor from '../../components/Editor'
import { message } from 'antd'


class EditorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authorList : [{id:'initId', author:'initAuthor'}],
      categoryList : [{id:'initId', sub_category_name:'initSub_category_name'}],
      imageList : [{element:'initElement',image:'initImage' }],
      imageLoading : true
    }
  }

  componentDidMount() {
    editorApi.listAuthors(this.listAuthorsCallback,{})
    editorApi.listCategorys(this.listCategorysCallback,{})
    editorApi.listImages(this.listImagesCallback,{})
  }

  componentWillUnmount(){
  }

  listImagesCallback = rspData => {
    this.setState({imageList:[]})
    let rspImageList = []
    rspData.forEach(element => {
      rspImageList = rspImageList.concat(element) 
    })
    this.setState({imageList:rspImageList, imageLoading:false})
  }

  listAuthorsCallback = rspData => {
    this.setState({authorList:[]})
    rspData.forEach(element => {
       this.setState({authorList:this.state.authorList.concat(element)})
    })
  }

  listCategorysCallback = rspData => {
    this.setState({categoryList:[]})
    rspData.forEach(element => {
       this.setState({categoryList:this.state.categoryList.concat(element)})
    })
  }

  handleEditorSubmit = data => 
    editorApi.postNews(
      rspData => message.info(`[${rspData.title}]新建成功，请通知审核`),data)
  
  handleSearch = (value) => 
    console.log(value.target.value)

  handleImageSearch = value => {
      editorApi.listImages(rspData => this.listImagesCallback(rspData) ,  {search_keywords:value})
    }

  render() {
    
    return (
      <Editor 
        data={{
          authorList: this.state.authorList,
          categoryList: this.state.categoryList,
          imageList: this.state.imageList,
          imageLoading : this.state.imageLoading
        }} 
        method={{
          handleEditorSubmit : this.handleEditorSubmit,
          handleImageSearch : this.handleImageSearch,
          handleSearch: this.handleSearch
        }}
      />
    )
  }
}
  
  export default EditorContainer
  
  
  