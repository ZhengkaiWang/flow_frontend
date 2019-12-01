import React, { Component } from 'react'
import { Launcher } from 'react-chat-window'
import { UserContext } from '../../utils/User'

class Demo extends Component {
  static contextType = UserContext
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      newMessagesCount: 0,
      isOpen: true
    };
  }

  componentDidMount() {
    this.ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.context.userID}`)
    this.ws.onopen = () => this.handleInit()
    this.ws.onmessage = evt =>
      this.handleReceiveMsg(JSON.parse(evt.data))
  }

  handleInit = () => this.ws.send(JSON.stringify({
    status: 200,
    type: 'init',
    content: {
      userId: this.context.userID,
      userName: this.context.userName
    },
    from: 'user',
    to: 'server',
    messagePack: {
    }
  }))

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    const { messagePack } = transferData
    transferData.type === 'init'
      ? this.setState({
        messageList: [{
          receiver: this.context.userID,
          sender: 1,
          author: 'them',
          type: 'text',
          data: { text: transferData.content },
          key: this.state.messageList.length
        }]
      })
      : this.setState({
        messageList: [...this.state.messageList, {
          receiver: this.context.userID,
          sender: 1,
          author: 'them',
          type: messagePack.type,
          data: { text: messagePack.data.text }
        }],
        newMessagesCount: this.state.isOpen ? 0 : this.state.newMessagesCount + 1
      })
  }

  handleSendMsg = messageRaw => {
    const transferData = {
      status: 200,
      type: 'message',
      content: {},
      from: 'user',
      to: 'server',
      chatUserID: this.context.userID,
      chatUserName: this.context.userName,
      messagePack: {
        receiver: 1,
        sender: this.context.userID,
        ...messageRaw,
      }
    }
    const { messagePack } = transferData
    this.ws.send(JSON.stringify(transferData))
    this.setState({ messageList: [...this.state.messageList, messagePack] })
  }



  render() {
    return (<div>
      <Launcher
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
      />
    </div>)
  }
}

export default Demo