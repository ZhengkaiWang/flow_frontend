import React from 'react'
import { Card, Input, Button, Tabs } from 'antd'
import { UserContext } from '../../utils/User'

class ChatBack extends React.Component {

  static contextType = UserContext

  constructor(props) {
    super(props)
    this.state = {
      messageSet: {},
      userList: [],
      inputValue: '',
      currentChat: 0,
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ inputValue:value });
  }

  

  componentDidMount() {
    this.adminWS = new WebSocket("ws://127.0.0.1:8000/ws/admin")
    this.adminWS.onmessage = evt =>
      this.handleReceiveMsg(JSON.parse(evt.data))
  }

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    const { messagePack } = transferData
    const tmpMessageSet = this.state.messageSet
    if (transferData.type === 'init') {
      tmpMessageSet[transferData.content.chat_group_name] = []
      this.setState({ messageSet: tmpMessageSet })
      console.log(`添加 ${transferData.content.chat_group_name} 成功`)
    }
    else {
      tmpMessageSet[transferData.chat_group_name] = 
        [...tmpMessageSet[transferData.chat_group_name], {
        receiver: this.context.userID,
        sender: 1,
        author: 'them',
        type: messagePack.type,
        data: { text: messagePack.data.text },
        key: tmpMessageSet[transferData.chat_group_name].length
      }]
      this.setState({ messageSet: tmpMessageSet })
    }
  }

  handleSendMsg = () => {
    const transferData = {
      status: 200,
      type: 'message',
      content: {},
      from: 'admin',
      to: 'server',
      senderId: 1,
      receiverId: this.state.currentChat,
      messagePack: {
        receiver: 1,
        sender: this.context.userID,
        author: 'me',
        type: 'text',
        data: { text: this.state.inputValue },
        key: this.state.messageSet[this.state.currentChat].length
      }
    }
    const { messagePack } = transferData
    const tmpMessageSet = this.state.messageSet
    this.adminWS.send(JSON.stringify(transferData))
    tmpMessageSet[this.state.currentChat] = 
      [...tmpMessageSet[this.state.currentChat],messagePack]
    this.setState({
      messageSet: tmpMessageSet,
      inputValue: ''
    })
  }

  changeChat = activeKey => {
    this.setState({currentChat: activeKey})
  }

  render() {
    return (
      <Tabs 
        tabPosition="left" 
        style={{ minHeight: 400 }}
        //type="card"
        onChange={this.changeChat}
      >
        <Tabs.TabPane tab="消息列表" key={0}>
          <h3>聊天区</h3>
        </Tabs.TabPane>
        {Object.keys(this.state.messageSet).map(item =>
          <Tabs.TabPane tab={item} key={item}>
            <h3>聊天区</h3>
            <Card
              bodyStyle={{ padding: 12 }}
            >
              {this.state.messageSet[this.state.currentChat] && this.state.messageSet[this.state.currentChat].map(item =>
                item.author === 'me'
                  ? <div key={item.key} style={{ textAlign: 'right' }}>{item.data.text}</div>
                  : <div key={item.key} style={{ textAlign: 'left' }}>{item.data.text}</div>
              )}
            </Card>
            <Input.TextArea
              onChange={this.onChange}
              placeholder="输入回复内容"
              autoSize={{ minRows: 3, maxRows: 20 }}
              value={this.state.inputValue}
              style={{ marginBottom: 12, marginTop: 12 }}
            >
            </Input.TextArea>
            <Button onClick={this.handleSendMsg}>回复</Button>
          </Tabs.TabPane>
        )}
      </Tabs>
    )
  }
}

export default ChatBack