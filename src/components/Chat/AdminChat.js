import React from 'react'
import { Card, Input, Button, Tabs } from 'antd'
import { UserContext } from '../../utils/User'

class ChatBack extends React.Component {

  static contextType = UserContext

  constructor(props) {
    super(props)
    this.state = {
      messageSet: {},
      inputValue: '',
      nameMap: {},
      currentChat: 0,
    }
  }

  onChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  }


  componentDidMount() {
    this.adminWS = new WebSocket(`ws://127.0.0.1:8000/ws/admin/${this.context.userID}`)
    this.adminWS.onmessage = evt =>
      this.handleReceiveMsg(JSON.parse(evt.data))
  }

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    const tmpMessageSet = this.state.messageSet
    if (transferData.type === 'init') {
      tmpMessageSet[transferData.groupName] = []
      this.setState({ messageSet: tmpMessageSet })
      console.log(`添加 ${transferData.groupName} 成功`)
    }
    else {
      tmpMessageSet[transferData.groupName] =
        [...tmpMessageSet[transferData.groupName], transferData.messagePack]
      this.setState({ messageSet: tmpMessageSet })
    }
  }

  handleSendMsg = () => {
    const transferData = {
      status: 200,
      type: 'message',
      groupName: this.state.currentChat,
      other: '',
      messagePack: {
        receiver: {id: this.state.currentChat, name: "receiverUserName"},
        sender: { id: this.context.userID, name: this.context.userName },
        message: this.state.inputValue,
        date: "date",
        index: 0
      },
    }

    const tmpMessageSet = this.state.messageSet
    this.adminWS.send(JSON.stringify(transferData))
    tmpMessageSet[this.state.currentChat] =
      [...tmpMessageSet[this.state.currentChat], transferData.messagePack]
    this.setState({
      messageSet: tmpMessageSet,
      inputValue: ''
    })
  }

  changeChat = activeKey => {
    this.setState({ currentChat: activeKey })
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
                item.sender.id === this.context.userID
                  ? <div key={item.key} style={{ textAlign: 'right' }}>
                    {`${item.sender.name}:${item.message}`}
                  </div>
                  : <div key={item.key} style={{ textAlign: 'left' }}>
                    {`${item.sender.name}:${item.message}`}
                  </div>
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