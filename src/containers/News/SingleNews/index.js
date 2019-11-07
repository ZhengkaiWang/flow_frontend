import React from 'react';
import SingleNews from '../../../components/News/SingleNews'
import { newsApi } from '../../../utils/api'
import { message, Skeleton } from 'antd'

class SingleNewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : true,
      newsInfo: {},
      other: 'other',
      user: { id: 6074 }
    }
  }

  handleRetrieveNews = (data) => {
    console.log(data)
    this.setState({ newsInfo: [] })
    const newsInfo = {
      id: data['id'],
      time: data['create_date'],
      content: data['content'],
      title: data['title'],
      /*fimgSrc : "http://vmp.hzinsights.com/element/138/10y_treasury/2019-09-12,2019-09-13|||||/",*/
      like: data['like'],
      comment: data.comment,
      avatar: 'https://i.loli.net/2019/10/24/mMZX3ic1RqHnzsj.png',
      category: data['category']
    }
    this.setState({ newsInfo: newsInfo, loading: false })
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    newsApi.retrieveNews(this.handleRetrieveNews, { id: this.props.match.params.id, publish_status: 1 })
  }

  componentWillUnmount() {
  }

  onNewsCommentClick = (data) => {
    newsApi.postComment(() => { }, data)
    message.info('评论提交成功');
    newsApi.retrieveNews(this.handleRetrieveNews, { id: this.props.match.params.id, publish_status: 1 })
  }
  //? delete or post
  onNewsLikeClick = (params, flag) => {

    flag
      ? newsApi.postLike(data => {
        const index = this.state.newsInfoList.findIndex(item => item.id === params)
        const tmpState = this.state.newsInfoList.slice()
        tmpState[index].like = [...tmpState[index].like, ...data]
        this.setState({ newsInfoList: tmpState })
      },
        {
          like_user_id: this.state.user.id,
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

  render() {

    return (
      <Skeleton active loading={this.state.loading}>
      <SingleNews
        data={{
          user: this.state.user,
          newsInfo: this.state.newsInfo,
        }}
        method={{
          onNewsLikeClick: this.onNewsLikeClick,
          onNewsCommentClick: this.onNewsCommentClick,
        }}

      /></Skeleton>

    )
  }
}

export default SingleNewsContainer


