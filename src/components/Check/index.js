import React from 'react'
import CheckItem from './CheckItem'
import { Switch } from 'antd';

class Check extends React.Component {

  handleViewSwitch = (checked, event) => {
    this.props.method.handleViewSwitch(checked, event)
  }

  render() {
    const newsCheckList = this.props.data.newsCheckList
    return (
      <div>
        <h5 align='center'>News Check</h5>
        <Switch 
          checkedChildren="全部" 
          unCheckedChildren="待审核" 
          defaultChecked 
          onChange = {this.handleViewSwitch}
        />
        {newsCheckList.map(
          (item, index) => {
            const checkItemInstance = 
              <CheckItem 
                key = {item.id}
                data = {{
                  newsInfo : item
                }}
                method = {{
                  handleCheck : this.props.method.handleCheck,
                  handleCancelCheck : this.props.method.handleCancelCheck,
                  handleDelete : this.props.method.handleDelete
                }}
              >
              </CheckItem>
            return this.props.data.viewSwitch ? 
              (checkItemInstance) :
              (item.publish_status?checkItemInstance:undefined)
          }
        )}
        <hr/>
      </div>
    )
  }
}
export default Check