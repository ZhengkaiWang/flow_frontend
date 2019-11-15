import React from 'react'
import CheckItem from './CheckItem'
import { Switch, Row, Col } from 'antd';
import ContentHeader from '../Common/ContentHeader'

class Check extends React.Component {

  handleViewSwitch = (checked, event) => {
    this.props.method.handleViewSwitch(checked, event)
  }

  render() {
    const newsCheckList = this.props.data.newsCheckList
    return (
      <div>
        <ContentHeader
          data={{title:"审核新闻",Link:"/check"}}
          components={{
            extra: [
              <Switch
                checkedChildren="全部"
                unCheckedChildren="待审核"
                defaultChecked
                onChange={this.handleViewSwitch}
              />
            ]
          }}
        />
        <Row gutter={16}>
        {newsCheckList.map(
          (item, index) => {
            const checkItemInstance =
            <Col span={12}>
              <CheckItem
                key={item.id}
                data={{
                  newsInfo: item
                }}
                method={{
                  handleCheck: this.props.method.handleCheck,
                  handleCancelCheck: this.props.method.handleCancelCheck,
                  handleDelete: this.props.method.handleDelete
                }}
              >
              </CheckItem></Col>
            return this.props.data.viewSwitch ?
              (checkItemInstance) :
              (item.publish_status ? checkItemInstance : undefined)
          }
        )}
        </Row>
        <hr />
      </div>
    )
  }
}
export default Check