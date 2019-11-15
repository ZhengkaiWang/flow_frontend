import React from 'react'
import { Link } from "react-router-dom";
import { Card, Popconfirm, message, Button } from 'antd'

class CheckItem extends React.Component {

  handleCheck = () => {
    message.success('发布成功');
    this.props.method.handleCheck(this.props.data.newsInfo.id)
  }

  handleCancelCheck = () => {
    message.success('撤销成功');
    this.props.method.handleCancelCheck(this.props.data.newsInfo.id)
  }
  handleDelete = () => {
    this.props.method.handleDelete(this.props.data.newsInfo.id)
  }

  render() {
    const newsInfo = this.props.data.newsInfo
    const publish = newsInfo.publish_status ?
      (
        <Popconfirm
          title="确认审核通过此条新闻？"
          onConfirm={this.handleCheck}
          onCancel={undefined}
          okText="是"
          cancelText="否"
        >
          <Button >
            发布
          </Button>
        </Popconfirm>
      ) : (
        <Popconfirm
          title="确认撤销发布此条新闻？"
          onConfirm={this.handleCancelCheck}
          onCancel={undefined}
          okText="是"
          cancelText="否"
        >
          <Button >
            撤销
          </Button>
        </Popconfirm>
      )

    return (

      <Card
        bordered={true}
        bodyStyle={{ padding: 12 }}
        style={{ margin: 0, marginTop: 12 }}
        hoverable
        size="small"
        title={`${newsInfo.title}   ${newsInfo.time.slice(newsInfo.time.indexOf('-') + 1, newsInfo.time.indexOf('T'))}  ${newsInfo.time.substr(newsInfo.time.indexOf('T') + 1, 8)}`}
        actions={[
          publish,
          <Link to={`/editor/${newsInfo.id}/`}><Button>编辑</Button></Link>
          ,
          <Popconfirm
            title="确认删除此条新闻？"
            onConfirm={this.handleDelete}
            onCancel={undefined}
            okText="是"
            cancelText="否"
          >
            <Button>删除</Button>
          </Popconfirm>
        ]}
      >
          <div dangerouslySetInnerHTML={{ __html: newsInfo.content }}></div>


      </Card>

    )
  }
}

export default CheckItem