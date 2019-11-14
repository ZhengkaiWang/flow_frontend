import React from 'react'
import WrappedNewsTreeCommentForm from './NewsTreeCommentForm'
import { UserContext } from '../../utils/User'
import { Icon, Comment, Tooltip, Button, Row } from 'antd';
import moment from 'moment'

class NewsTreeComment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showAll: false,
      commentFlag: true,
      commentKey: this.props.data.comment[0].root,
      reply: this.props.data.comment[0].comment_news_title
    }
  }

  static contextType = UserContext;

  renderTreeNode = (data, level, parent_id) => {
    const currentData = data.filter(item => item.level === level && item.parent_id === parent_id)
    const showLevel = this.state.showAll?Infinity:3
    return currentData.length !== 0 
      ? level<showLevel ?
      currentData.map(item =>
        <Comment 
          key={item.id}
          comment_user_name={item.comment_user_name}
          author={item.comment_user_name}
          content={`${item.comment_body}`}
          actions={[<span id={item.id} title={item.comment_user_name} onClick={this.onNodeClick}>回复</span>]}
          datetime={<Tooltip
            title={moment(`${item.create_date.slice(0,item.create_date.indexOf('T'))} ${item.create_date.substr(item.create_date.indexOf('T')+1,8)}`)
              .format('YYYY-MM-DD HH:mm:ss')}
          >
            <span>
              {moment(`${item.create_date.slice(0,item.create_date.indexOf('T'))} ${item.create_date.substr(item.create_date.indexOf('T')+1,8)}`)
                .fromNow()}
            </span>
          </Tooltip>}
          avatar={<Icon type="user" />}
        >
          {this.renderTreeNode(data, item.level + 1, item.id)}
        </Comment>
      )
      : '......' 
      : undefined
  }

  onNodeClick = evt => {
    this.setState({
      commentFlag: true,
      commentKey: evt.target.id,
      //reply: evt.target.title
      reply: "评论"
    })
  }

  onNewsCommentClick = value => {
    const data = {
      ...value,
      comment_user_id: this.context.id,
      comment_news_id: this.props.data.newsId,
      parent_id: this.state.commentKey
    }
    console.log(data)
    this.setState({
      commentFlag: false,
      commentKey: '',
      reply: ''
    })
    this.props.method.onNewsCommentClick(data)
  }

  render() {
    const inputArea = this.state.commentFlag
      ? <WrappedNewsTreeCommentForm
        data={{ reply: this.state.reply }}
        method={{ onNewsCommentClick: this.onNewsCommentClick }}
      />
      : null
    return (
      <span>
        {this.props.data.comment.length !== 0 ? this.renderTreeNode(this.props.data.comment, 1, this.props.data.comment[0].root) : null}
        <Row type="flex" justify="center">
          {this.props.data.comment.length > 3?
            this.state.showAll
          ?<Button style={{alien:'center'}} type="link" onClick={()=>this.setState({showAll:false})}>收起</Button>
          :<Button style={{alien:'center'}} type="link" onClick={()=>this.setState({showAll:true})}>加载更多</Button>
          :undefined}
        </Row>
        {inputArea}
      </span>
    )
  }
}

export default NewsTreeComment