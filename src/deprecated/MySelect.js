import React from 'react'
import { Select } from 'antd'

const MySelect = React.memo(props =>

  <Select defaultValue={props.data.defaultValue} onClick={this.props.method.onClick}>
    {
      props.data.option.map(item => 
        <Select.Option key={item[props.data.valueName]}>
          {item[props.data.fieldName]}
        </Select.Option>
      )
    }
  </Select>
)

export default MySelect
