import React from 'react'
import { editorApi } from '../../utils/api'
import Img from '../../components/Img'

class ImgContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [],
      page: 1,
      count: 1
    }
  }

  componentDidMount() {
    editorApi.listImages({}, this.handleListImg)
  }

  componentWillUnmount() {
  }

  handleListImg = (data) => {
    const tmpImgList = []
    data.results.forEach(item => tmpImgList.push({
      id: item.element_id,
      image: item.image,
      element__title_en: item.element__title_en,
      element__title: item.element__title,
    }))
    this.setState({
      imgList: tmpImgList,
      count: data.count
    })
  }


  hanglePage = (page, pageSize) => {
    editorApi.listImages(
      {
        page: page,
        size: pageSize
      },
      this.handleListImg
    )
    this.setState({ page: page })
  }

  handleSearch = keywords => {
    editorApi.listImages(
      {
        search_keywords: keywords
      },
      this.handleListImg
    )
  }

  render() {
    return (
      <Img
        data={{
          imgList: this.state.imgList,
          page: this.state.page,
          count: this.state.count
        }}
        method={{
          hanglePage: this.hanglePage,
          handleSearch: this.handleSearch
        }}
      ></Img>
    )
  }
}
export default ImgContainer


