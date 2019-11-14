import React from 'react'
import { editorApi } from '../../utils/api'
import Editor from '../../components/Editor'
import { message } from 'antd'


class EditorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authorList: [{ id: 'initId', author: 'initAuthor' }],
      categoryList: [{ id: 'initId', sub_category_name: 'initSub_category_name' }],
      imageList: [{ element: 'initElement', image: 'initImage' }],
      imageLoading: true,
      imagePage: 1,
      imagePageCount: 1,
      imageSearchKeywords: ''
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    this.listAuthors()
    this.listImages()
    this.listCategorys()
  }

  listImages = data => {
    editorApi.listImages(data,
    rspData => {
      let rspImageList = []
      rspData.results.forEach(element => {
        rspImageList = rspImageList.concat(element)
      })
      this.setState({
        imageList: rspImageList,
        imageLoading: false,
        imagePageCount: rspData.count
      })
    })
  }

  listAuthors = data => {
    editorApi.listAuthors(data, rspData => {
      this.setState({ authorList: [] })
      rspData.forEach(element => {
        this.setState({ authorList: this.state.authorList.concat(element) })
      })
    })
  }

  listCategorys = data => {
    editorApi.listCategorys(data, rspData => {
      this.setState({ categoryList: [] })
      rspData.forEach(element => {
        this.setState({ categoryList: this.state.categoryList.concat(element) })
      })
    })

  }

  handleEditorSubmit = data =>
    editorApi.postNews(data,
      (rspData, wrappedData) => {
        wrappedData.relatedNews.map(item =>
          editorApi.postRelatedArticles({
            article__id: item,
            news_id: rspData.id,
            status: 1
          }, () => { console.log(`${item}创建成功`) }
          )
        )
        message.info(`【${rspData.title}】新建成功，请通知审核`)
      }
    )

  handleImagePage = page => {
    this.setState({imageLoading: true, imagePage:page})
    this.listImages({page: page})
  }

  handleImageSearch = value => {
    this.setState({imageLoading: true, imageSearchKeywords: value })
    this.listImages({search_keywords: value})
  }

  render() {

    return (
      <Editor
        data={{
          authorList: this.state.authorList,
          categoryList: this.state.categoryList,
          imageList: this.state.imageList,
          imageLoading: this.state.imageLoading,
          id: this.props.match.params.id,
          imagePage: this.state.imagePage,
          imagePageCount: this.state.imagePageCount
        }}
        method={{
          handleEditorSubmit: this.handleEditorSubmit,
          handleImageSearch: this.handleImageSearch,
          handleImagePage: this.handleImagePage
        }}
      />
    )
  }
}

export default EditorContainer


