import React from 'react'
import WrappedNewsTreeCommentForm from './NewsTreeCommentForm'
import {UserContext} from '../../utils/User'
import { Tree, Icon } from 'antd';

const { TreeNode } = Tree;

class NewsTreeComment extends React.Component{
  
  constructor(props) {
		super(props)
		this.state = {
      commentFlag: false,
      commentKey: '',
      reply: ''
		}
  }
  
  static contextType = UserContext;

  renderTreeNode = (data, level, parent_id) => {
    const currentData = data.filter( item => item.level===level && item.parent_id===parent_id)
    return currentData.length !== 0
      ?
    currentData.map(item => 
      <TreeNode 
        key={item.id} 
        comment_user_name={item.comment_user_name}
        title={`${item.comment_user_name}:${item.comment_body}`}
        icon={<Icon type="user" />}
        >
        {this.renderTreeNode(data, item.level+1, item.id)}
      </TreeNode>
    )
      :undefined
  }

  onTreeNodeClick = (key, evt) => { 
    this.setState({
      commentFlag : evt.selected, 
      commentKey : [...key].shift(),
      reply : evt.selected?evt.selectedNodes[0].props.comment_user_name:''
    })
  }

  onNewsCommentClick = value => {
    const data = {
      ...value,
      comment_user_id : this.context.id,
      comment_news_id : this.props.data.newsId,
      parent_id : this.state.commentKey
    }
    console.log(data)
    this.setState({
        commentFlag: false,
        commentKey: '',
        reply: ''
      })
    this.props.method.onNewsCommentClick(data)
  }

  render(){
    const inputArea = this.state.commentFlag
    ? <WrappedNewsTreeCommentForm 
    data = {{reply : this.state.reply}}
    method = {{onNewsCommentClick:this.onNewsCommentClick}}
      />
    : null
    return(
      <div>
        <Tree 
          defaultExpandAll={true} 
          onSelect={this.onTreeNodeClick}
          showIcon
          selectedKeys={[this.state.commentKey]}
        >
          <TreeNode 
            title='点击评论' 
            key={this.props.data.comment[0].comment_news_title}
            comment_user_name={this.props.data.comment[0].comment_news_title}
          >
            {this.props.data.comment.length!==0?this.renderTreeNode(this.props.data.comment, 1, this.props.data.comment[0].root):null}
          </TreeNode>
        </Tree>
        {inputArea}
      </div>
    )
  }
}

export default NewsTreeComment