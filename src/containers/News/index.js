import React from 'react';
import { UserContext }  from '../../utils/User'
import News from '../../components/News';
import { newsApi } from '../../utils/api'
import { message } from 'antd'
import { CategoryDict } from '../../utils/Category'

class NewsContainer extends React.Component {

  static contextType = UserContext

  constructor(props) {
    super(props)
    const ws = new WebSocket("ws://127.0.0.1:8000/ws/news/");
    this.state = {
      newsInfoList: [],
      other: 'other',
      ws: ws
    }
  }

  handleListNews = (data) => {
    this.setState({ newsInfoList: [] })
    data.forEach(
      item => {
        const newsItem = {
          id: item['id'],
          time: item['create_date'],
          content: item['content'],
          title: item['title'],
          like: item['like'],
          comment: item.comment,
          category: item['category'],
          relate: item['relate'],
          stock: item['stock'],
          source: item['source']
        }
        this.setState({
          newsInfoList: [...this.state.newsInfoList, newsItem]
        })
      }
    )
  }

  handleWS = (msgObj) => {
    const data = JSON.parse(msgObj.data)
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
    newsApi.listNews(this.handleListNews, { publish_status: 1 })
    console.log('componentDidMount')
    newsApi.websocket(this.handleWS, this.state.ws)
  }

  componentWillUnmount() {
    this.state.ws.close()
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
        tmpState[index].like = [...tmpState[index].like,data]
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
        publish_status : 1,
        search_keywords: value
      }
    )
  }

  handleFilter = value => {
    const data = {
      search_category : value[0],
      search_sub_category : value.length===2
        ?CategoryDict[value[1]].sub_category_name
        :''
    }
    newsApi.listNews(
      this.handleListNews,
      {
        publish_status : 1,
        ...data
      }
    )

  }

  render() {
    
    return (

        <News
          data={{
            user: this.context.userID,
            newsInfoList: this.state.newsInfoList,
          }}
          method={{
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


