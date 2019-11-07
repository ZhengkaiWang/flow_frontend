import React from 'react'
import styles from './NewsComments.module.css'
import Button from 'react-bootstrap/Button'
//{[...commentBody.entries()].map(([k,v])=>String(k)+':'+String(v)+'|   ')}
class NewsComments extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			inputFlag: false,
			value: '12'
		}
	}

	//handleChange = (event) => {
//		this.setState({ value: event.target.value });
//	}

	handleInput = () => {
	  if (this.state.inputFlag) {
      let commentText = this.state.value
      this.setState({ value: '' });
      if (this.state.value!==''){this.props.method.onNewsCommentClick(commentText)}
		}
		this.setState({ inputFlag: !this.state.inputFlag })
	}

	render() {
    let comment = this.props.data.comment
		const inputFlag = this.state.inputFlag
		let inputArea = (inputFlag) ? <textarea value={this.state.value} onChange={ (event) => {this.setState({ value: event.target.value })}}></textarea> : null

		return <div className={styles.commentBg}>
			<p className={styles.comment}>
		
		{[...comment.entries()].map(([k,v])=>String(v)+' | ')}
			</p>
			<Button className={styles.commntBtn} variant="secondary" size="sm" onClick={this.handleInput}>
				评论
			</Button>
			{inputArea}
		</div>;
	}
}

export default NewsComments