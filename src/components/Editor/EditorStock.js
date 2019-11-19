import React from 'react'
import { editorApi } from '../../utils/api'
import {AutoComplete, Input} from 'antd'

class EditorStock extends React.Component {
  
  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...({
          stockList:prevState.stockList,
          stock:nextProps.value||'',
        })
      }
    }
    return null
  }
  
  constructor(props) {
    super(props)
    this.state = {
      relatedNewsList: [],
      stock : props.value || ''
    }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    if (this.props.onChange) {
      this.props.onChange(changedValue)
    }
  }

  handleSearch = value => {
    editorApi.listStock({search_keywords:value},rspData =>
      this.setState({
        stockList:rspData.map(item=>{return {value:item.TRADE_CODE,text:`${item.SEC_NAME} ${item.TRADE_CODE}`}})
      })
    )
  }

    
  render() {
    return (
      <AutoComplete 
      placeholder='请输入股票代码'
      onSelect={this.triggerChange}
      dataSource={this.state.stockList}>
      <Input.Search
       onSearch={this.handleSearch}
      />
      </AutoComplete>   
    )
  }
}

export default EditorStock