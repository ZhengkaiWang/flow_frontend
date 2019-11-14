import React from 'react';
import SingleNews from '../../../components/News/SingleNews'
import { newsApi } from '../../../utils/api'
import { message, Skeleton } from 'antd'

class SingleNewsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      newsInfo: {},
      other: 'other',
      user: { id: 6074 }
    }
  }

  handleRetrieveNews = (data) => {
    const newsInfo = {
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


