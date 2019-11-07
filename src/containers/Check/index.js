import React from 'react'
import {checkApi} from '../../utils/api'
import Check from '../../components/Check'

class CheckContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newsCheckList : [],
      viewSwitch : true
    }
  }

  componentDidMount() {
    checkApi.ListNews(this.getCheckNews,{})
  }

  componentWillUnmount(){
  }

  getCheckNews = (data) => {
    data.forEach(element => {
      const news = [{
        id : element.id,
        content : element.content,
        time : element.create_date,
        publish_status : !element.publish_status,
        title : element.title,
        category: element.category
      }]
      this.setState({newsCheckList:this.state.newsCheckList.concat(news)})
    })
  }
  
  handleCheck = id => {
    const data = {
      newsId : id,
      publish_status : '1'
    }
    checkApi.patchNews(()=>{},data)
    let tmpState = this.state.newsCheckList
    tmpState[tmpState.findIndex(item => item.id===id)].publish_status = 0
    this.setState({newsCheckList:tmpState})
    //var notification = new Notification("推送新的新闻",{
    //  body:tmpState[tmpState.findIndex(item => item.id===id)]['content']
    //})
  }

  handleCancelCheck = id => {
    const data = {
      newsId : id,
      publish_status : '0'
    }
    checkApi.patchNews({},data)
    let tmpState = this.state.newsCheckList.slice()
    tmpState[tmpState.findIndex(item => item.id===id)].publish_status = 1
    this.setState({newsCheckList:tmpState})
  }

  handleDelete = id => {
    const data = {
      newsId : id,
      delete : 1
    }
    checkApi.deleteNews({},data)
  }

  handleViewSwitch = (viewSwitch, event) => {
    this.setState({viewSwitch:viewSwitch})
  }

  render() {
    return (
      <Check 
        data = {{
          newsCheckList : this.state.newsCheckList,
          viewSwitch : this.state.viewSwitch
        }}
        method = {{
          handleCheck : this.handleCheck,
          handleCancelCheck : this.handleCancelCheck,
          handleViewSwitch : this.handleViewSwitch,
          handleDelete : this.handleDelete
        }}
      ></Check>
    )
  }
}
  export default CheckContainer
  
  
  