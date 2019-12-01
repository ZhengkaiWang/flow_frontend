import React from 'react';
import { UserContext } from '../../utils/User'
import News from '../../components/News';
import { newsApi } from '../../utils/api'
import { message } from 'antd'
import { CategoryDict } from '../../utils/Category'

class NewsContainer extends React.Component {

  static contextType = UserContext

  constructor(props) {
    super(props)
    // const ws = new WebSocket("ws://127.0.0.1:8000/ws/news_backup/user1");
    this.state = {
      newsInfoList: [],
      //ws: ws,
      page:1,
      count:1
    }
  }

  handleListNews = data => {
    const tmpNewsInfoList = []
    data.results.forEach(
      item => tmpNewsInfoList.push({...item,time: item['create_date']})
    )
    this.setState({
      newsInfoList: [...tmpNewsInfoList],
      count: data.count,
    })
  }

  handleWS = (msgObj) => {
    const data = JSON.parse(msgObj.data)
    console.log(data)
    new Notification(data['title'], {
      body: data['content']
    })
    const newsItem = {
      id: data['id'],
      time: data['create_date'],
      content: data['content'],
      title: data['title'],
      like: data['like'],
      comment: data.comment,
      category: data['category'],
      relate: data['relate'],
      stock: data['stock'],
      source: data['source']
    }
    this.setState({
      newsInfoList: [newsItem, ...this.state.newsInfoList]
      //newsInfoList: newsItem.concat(this.state.newsInfoList)
    })
  }


  componentDidMount() {
    newsApi.listNews(this.handleListNews, { publish_status:1, page:this.state.page })
    //newsApi.websocket(this.handleWS, this.state.ws)
  }

  componentWillUnmount() {
    //this.state.ws.close()
  }

  onNewsCommentClick = (data) => {
    newsApi.postComment(() => { }, data)
    message.info('评论提交成功');
    newsApi.listNews(this.handleListNews, { publish_status: 1 })
  }
  //? delete or post
  onNewsLikeClick = (params, flag) => {
    flag
      ? newsApi.postLike(data => {
        const index = this.state.newsInfoList.findIndex(item => item.id === params)
        const tmpState = this.state.newsInfoList.slice()
        tmpState[index].like = [...tmpState[index].like, data]
        this.setState({ newsInfoList: tmpState })
      },
        {
          like_user_id: this.context.userID,
          like_news_id: params,
          status: 1
        })
      : newsApi.patchLike(data => {
        const index = this.state.newsInfoList.findIndex(item => item.id === params.like_news_id)
        const tmpState = this.state.newsInfoList.slice()
        const likeIndex = tmpState[index].like.findIndex(item => item.id === params.id)
        tmpState[index].like[likeIndex] = data
        this.setState({ newsInfoList: tmpState })
      }, {
        id: params.id,
        newsId: params.like_news_id,
        status: 1 - params.status
      })
  }

  handleSearch = value => {
    newsApi.listNews(
      this.handleListNews,
      {
        publish_status: 1,
        search_keywords: value
      }
    )
  }

  handleFilter = value => {
    const data = {
      search_category: value[0],
      search_sub_category: value.length === 2
        ? CategoryDict[value[1]].sub_category_name
        : ''
    }
    newsApi.listNews(
      this.handleListNews,
      {
        publish_status: 1,
        ...data
      }
    )
  }
  
  hanglePage = (page, pageSize) => {
    newsApi.listNews(
      this.handleListNews,
      {
        publish_status: 1,
        page : page,
        size: pageSize
      }
    )
    this.setState({page:page})
  }

  render() {

    return (
      <News
        data={{
          user: this.context.userID,
          newsInfoList: this.state.newsInfoList,
          page: this.state.page,
          count: this.state.count
        }}
        method={{
          hanglePage: this.hanglePage,
          handleSearch: this.handleSearch,
          handleFilter: this.handleFilter,
          onNewsLikeClick: this.onNewsLikeClick,
          onNewsCommentClick: this.onNewsCommentClick,
        }}
      />
    )
  }
}

export default NewsContainer


