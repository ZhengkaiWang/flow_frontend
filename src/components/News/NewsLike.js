import React from 'react'
import { Icon, Tooltip } from 'antd';
import { UserContext }  from '../../utils/User'

class NewsLike extends React.PureComponent {
  static contextType = UserContext
  onNewsLikeClick = () => {
    const index = this.props.data.like.findIndex(
      item => item.like_user_id===this.context.userID)
    index === -1 
    
      //ture means like with POST
      //false means dislike or relike with PATCH
      ? this.props.method.onNewsLikeClick(this.props.data.newsId, true)
      : this.props.method.onNewsLikeClick(this.props.data.like[index], false)
  }

  render() {
    const liked = this.props.data.like.findIndex(
      item => item.like_user_id===this.context.userID && item.status===1
      ) === -1
    ? false : true
    const likes = this.props.data.like.filter(item => item.status===1).length
    return (

      <span onClick = {this.onNewsLikeClick}>
        <Tooltip title="点赞">
        <Icon 
          type={'like'} 
          theme={liked?'filled':'outlined'} 
          style={{marginRight: 8,fontSize: '16px'}}
        />{`${likes}`}</Tooltip>
      </span>
    ) 
  }
}

export default NewsLike