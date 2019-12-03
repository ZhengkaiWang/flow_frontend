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
      isOpen: false,
      status: 'disconnect',
      receiver: {id: undefined, name: undefined }
    };
  }

  componentWillUnmount() {
    return this.ws===undefined?null:this.ws.close()
  }

  handleClick = () => {
    
  }

  handleInit = () => {
    if (this.state.status === 'disconnect') {
      this.setState({ status: 'connecting' })
      this.ws = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.context.userID}`)
      this.ws.onmessage = evt => {
        this.handleReceiveMsg(JSON.parse(evt.data))
      }
      this.ws.onopen = () => {
        this.ws.send(JSON.stringify({
          status: 200,
          type: 'init',
          other: '',
          groupName: this.context.userID,
          messagePack: {
            receiver: { id: "receiverUserID", name: "receiverUserName" },
            sender: { id: this.context.userID, name: this.context.userName },
            message: 'Init chat channel',
            date: "date",
            index: 0
          },
        }))
        this.setState({ status: 'connected' })
      }
    }
    this.setState({isOpen: !this.state.isOpen})
  }

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    transferData.type === 'init'
      ? this.setState({
        messageList: [],
        receiver: {
          id: transferData.messagePack.sender.id,
          name: transferData.messagePack.sender.name,
        }
      })
      : this.setState({
        messageList: [...this.state.messageList, [transferData.messagePack]],
        newMessagesCount: this.state.isOpen ? 0 : this.state.newMessagesCount + 1
      })
    addResponseMessage(
      String(transferData.messagePack.message))
    return transferData.type === 'init'
      ? null
      : new Notification("VMP@HZ团队", {
        body: transferData.messagePack.message
      })
  }

  handleSendMsg = message => {
    if (this.state.status === 'connected') {
      const transferData = {
        status: 200,
        type: 'message',
        groupName: this.context.userID,
        other: '',
        messagePack: {
          receiver: { id: this.state.receiver.id, name: this.state.receiver.name },
          sender: { id: this.context.userID, name: this.context.userName },
          message: message,
          date: "date",
          index: this.state.messageList.length
        }
      }
      this.ws.send(JSON.stringify(transferData))
      this.setState({ messageList: [...this.state.messageList, transferData.messagePack] })
    }
    else {
      alert('正在连接...')
    }
  }



  render() {
    return (
      <div onClick={this.handleInit}>
        <Widget
          handleNewUserMessage={this.handleSendMsg}
          //badge={this.state.newMessagesCount}
          title="Chat with VMP@hzinsights"
          subtitle="潘老师"
        />
      </div>
    )
  }
}

export default Demo