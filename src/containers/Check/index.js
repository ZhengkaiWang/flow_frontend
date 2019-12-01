import React from 'react'
import { checkApi } from '../../utils/api'
import Check from '../../components/Check'

class CheckContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsCheckList: [],
      viewSwitch: true,
      page: 1,
      count: 1
    }
  }

  componentDidMount() {
    checkApi.listNews(this.handleListCheckNews, {})
  }

  componentWillUnmount() {
  }

  handleListCheckNews = (data) => {
    const tmpNewsCheckList = []
    data.results.forEach(item => tmpNewsCheckList.push({
      id: item.id,
      content: item.content,
      time: item.create_date,
      publish_status: !item.publish_status,
      title: item.title,
      category: item.category
    }))
    this.setState({
      newsCheckList: tmpNewsCheckList,
      count: data.count
    })
  }


  handleCheck = id => {
    const data = {
      newsId: id,
      publish_status: '1'
    }
    checkApi.patchNews(() => { }, data)
    let tmpState = this.state.newsCheckList
    tmpState[tmpState.findIndex(item => item.id === id)].publish_status = 0
    this.setState({ newsCheckList: tmpState })
    //var notification = new Notification("推送新的新闻",{
    //  body:tmpState[tmpState.findIndex(item => item.id===id)]['content']
    //})
  }

  handleCancelCheck = id => {
    const data = {
      newsId: id,
      publish_status: '0'
    }
    checkApi.patchNews({}, data)
    let tmpState = this.state.newsCheckList.slice()
    tmpState[tmpState.findIndex(item => item.id === id)].publish_status = 1
    this.setState({ newsCheckList: tmpState })
  }

  handleDelete = id => {
    const data = {
      newsId: id,
      delete: 1
    }
    checkApi.deleteNews({}, data)
  }

  handleViewSwitch = (viewSwitch, event) => {
    this.setState({ viewSwitch: viewSwitch })
  }

  hanglePage = (page, pageSize) => {
    checkApi.listNews(
      this.handleListCheckNews,
      {
        publish_status: 1,
        page: page,
        size: pageSize
      }
    )
    this.setState({page:page})
  }


  render() {
    return (
      <Check
        data={{
          newsCheckList: this.state.newsCheckList,
          viewSwitch: this.state.viewSwitch,
          page: this.state.page,
          count: this.state.count
        }}
        method={{
          hanglePage: this.hanglePage,
          handleCheck: this.handleCheck,
          handleCancelCheck: this.handleCancelCheck,
          handleViewSwitch: this.handleViewSwitch,
          handleDelete: this.handleDelete
        }}
      ></Check>
    )
  }
}
export default CheckContainer


