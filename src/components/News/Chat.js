import React, { Component } from 'react'
import { UserContext } from '../../utils/User'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

class Demo extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      newMessagesCount: 0,
      isOpen: false
    };
  }

  componentDidMount() {
    this.ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.context.userID}`)
    this.ws.onopen = () => this.handleInit()
    this.ws.onmessage = evt =>{
      this.handleReceiveMsg(JSON.parse(evt.data))
    }
  }


  handleInit = () => this.ws.send(JSON.stringify({
    status: 200,
    type: 'init',
    other:'',
    groupName: this.context.userID,
    messagePack:{
      receiver: {id: "receiverUserID", name: "receiverUserName"},
      sender: {id: this.context.userID, name: this.context.userName},
      message: 'Init chat channel',
      date: "date",
      index:0
    },
  }))

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    transferData.type === 'init'
      ? this.setState({
        messageList: [transferData.messagePack]
      })
      : this.setState({
        messageList: [...this.state.messageList, [transferData.messagePack]],
        newMessagesCount: this.state.isOpen ? 0 : this.state.newMessagesCount + 1
      })
      addResponseMessage(
        String(transferData.messagePack.message))
  }

  handleSendMsg = message => {
    const transferData = {
      status: 200,
      type: 'message',
      groupName: this.context.userID,
      other: '',
      messagePack: {
        receiver: {id: "receiverUserID", name: "receiverUserName"},
        sender: { id: this.context.userID, name: this.context.userName },
        message: message,
        date: "date",
      }
    }
    this.ws.send(JSON.stringify(transferData))
    this.setState({ messageList: [...this.state.messageList, transferData.messagePack] })
  }



  render() {
    return (<div>
      <Widget
        handleNewUserMessage={this.handleSendMsg}
        badge={this.state.newMessagesCount}
        title="Chat with VMP@hzinsights"
        subtitle="潘老师"
      />
      {/* <Launcher
        agentProfile={{
          teamName: 'HZ chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this.handleSendMsg}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        isOpen={this.state.isOpen}
        handleClick={() => this.setState({ isOpen: !this.state.isOpen, newMessagesCount: 0 })}
        showEmoji
      /> */}
    </div>)
  }
}

export default Demo