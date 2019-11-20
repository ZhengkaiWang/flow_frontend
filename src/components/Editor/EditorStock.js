import React from 'react'
import { editorApi } from '../../utils/api'
import { AutoComplete, Input, Tag } from 'antd'

class EditorStock extends React.Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...({
          stockList: prevState.stockList,
          stock: nextProps.value || '',
        })
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      stockList: [],
      stock: props.value || ''
    }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    if (this.props.onChange) {
      this.props.onChange(changedValue)
    }
  }

  handleSelect = value => {
    const changedValue = `${this.state.stock}${this.state.stock===''?'':','}${value}`
    console.log(changedValue)
    this.setState({ stock: changedValue })
    this.triggerChange(changedValue)
  }

  handleSearch = value => {
    editorApi.listStock({ search_keywords: value }, rspData =>
      this.setState({
        stockList: rspData.map(item => { return { value: item.TRADE_CODE, text: `${item.SEC_NAME} ${item.TRADE_CODE}` } })
      })
    )
  }

  handleClose = value => {
    console.log(this.state.stock)
    let tmpState = this.state.stock.split(',')
    tmpState.splice(tmpState.findIndex(item=>item===value),1)
    const changedValue = String(tmpState)
    console.log(changedValue)
    this.setState({ stock: changedValue })
    this.triggerChange(changedValue)
  }

  handleInputChange = e => {
    const value = e.currentTarget.value
    this.setState({stock:value})
    this.triggerChange(value)
  }


  render() {
    return (
      <div>
        <AutoComplete
          placeholder='股票代码搜索添加'
          onSelect={this.handleSelect}
          dataSource={this.state.stockList}>
          <Input.Search
            onSearch={this.handleSearch}
          />
        </AutoComplete>
        <Input 
          placeholder="自定义添加" 
          value={this.state.stock} 
          addonBefore="股票代码"
          onChange={this.handleInputChange}/>
      </div>
    )
  }
}

export default EditorStock