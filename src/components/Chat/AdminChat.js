import React from 'react'
import { Card, Input, Button, Tabs, notification } from 'antd'
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
    // this.adminWS.onopen = () => 
    //   this.adminWS.send(JSON.stringify({
    //     status: 200,
    //     type: 'init',
    //     other: '',
    //     groupName: this.context.userID,
    //     messagePack: {
    //       receiver: { id: "receiverUserID", name: "receiverUserName" },
    //       sender: { id: this.context.userID, name: this.context.userName },
    //       message: 'Init admin channel',
    //       date: "date",
    //       index: 0
    //     },
    //   }))
    this.adminWS.onmessage = evt =>
      this.handleReceiveMsg(JSON.parse(evt.data))
  }

  handleReceiveMsg = transferData => {
    //处理收到信息的逻辑
    const tmpMessageSet = this.state.messageSet
    const tmpNameMap = this.state.nameMap
    if (transferData.type === 'init') {
      tmpNameMap[transferData.groupName] = transferData.chatName
      // eslint-disable-next-line no-eval
      tmpMessageSet[transferData.groupName] = eval(transferData.other.history)
      this.setState({
        messageSet: tmpMessageSet,
        nameMap: tmpNameMap
      })
      notification['info']({
        message: transferData.messagePack.groupName,
        description: `${transferData.chatName}加入连接`
      });
    }
    else if(transferData.type === 'conn') {
      tmpNameMap[transferData.groupName] = transferData.chatName
      // eslint-disable-next-line no-eval
      tmpMessageSet[transferData.groupName] = []
      this.setState({
        messageSet: tmpMessageSet,
        nameMap: tmpNameMap
      })
      notification['info']({
        message: transferData.messagePack.groupName,
        description: `${transferData.chatName}加入连接`
      });
    }
    else if(transferData.type === 'del') {
      notification['info']({
        message: this.state.nameMap[transferData.groupName],
        description: transferData.messagePack.message
      });
      delete tmpNameMap[transferData.groupName]
      delete tmpMessageSet[transferData.groupName]
      this.setState({
        messageSet: tmpMessageSet,
        nameMap: tmpNameMap
      })
    }
    else {
      tmpMessageSet[transferData.groupName] =
        [...tmpMessageSet[transferData.groupName], transferData.messagePack]
      this.setState({ messageSet: tmpMessageSet })
      new Notification(transferData.messagePack.sender.name, {
        body: transferData.messagePack.message
      })
    }

  }

  handleSendMsg = () => {
    const transferData = {
      status: 200,
      type: 'message',
      groupName: this.state.currentChat,
      other: '',
      messagePack: {
        receiver: { id: this.state.currentChat, name: this.state.nameMap[this.state.currentChat] },
        sender: { id: this.context.userID, name: this.context.userName },
        message: this.state.inputValue,
        date: "date",
        index: this.state.messageSet[this.state.currentChat].length
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
          <Tabs.TabPane tab={this.state.nameMap[item]} key={item}>
            <h3>聊天区</h3>
            <Card
              bodyStyle={{ padding: 12 }}
            >
              {this.state.messageSet[this.state.currentChat] && this.state.messageSet[this.state.currentChat].map(item =>
                item.sender.id === this.context.userID
                  ? <div key={item.index}>
                    <div key={0} style={{ textAlign: 'right', fontWeight: "bold", fontSize: 12, fontStyle: "italic" }}>
                      {`${item.sender.name}`}
                    </div>
                    <div key={1} style={{ textAlign: 'right', fontSize: 16, fontStyle: "italic" }}>
                      {`${item.message}`}
                    </div>
                  </div>
                  : <div key={item.index}>
                    <div key={0} style={{ textAlign: 'left', fontWeight: "bold", fontSize: 12 }}>
                      {`${item.sender.name}`}
                    </div>
                    <div key={1} style={{ textAlign: 'left', fontSize: 16 }}>
                      {`${item.message}`}
                    </div>
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