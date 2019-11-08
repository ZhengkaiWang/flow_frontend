import React from 'react'
import { editorApi } from '../../utils/api'
import { Checkbox, Pagination, Input, Spin,Icon, Button, Row, Col } from 'antd'

class EditorRelatedNews extends React.Component {
  
  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...({
          relatedNewsList:prevState.relatedNewsList,
          loading: prevState.loading,
          paged: prevState.paged,
          ...(nextProps.value || {})
        })
      }
    }
    return null
  }
  
  constructor(props) {
    super(props)
    const value = props.value || {}
    this.state = {
      relatedNewsList: [],
      loading: false,
      paged: false,
      checkedList : value.checkedList || []
    }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    if (this.props.onChange) {
      this.props.onChange({
        ...{checkedList:this.state.checkedList},
        ...changedValue,
      })
    }
  }

  handleSearch = value => {
    this.setState({loading:true})
    editorApi.listArticles(
      rspData => 
        this.setState({relatedNewsList:rspData, loading:false})
      ,{ search_keywords : value })
    }

  handleCheck = checkedList => {
    this.setState({checkedList})
    this.triggerChange({checkedList:checkedList})
  }

  handleCancel = () => {
    this.setState({checkedList:[]})
    this.triggerChange({checkedList:[]})
  }
    
  render() {
    return (
      <div>
      <Row  type="flex" gutter={28}>
        <Col span={18}>
        <Input.Search
          placeholder="搜索标题/内容/作者..."
          onSearch={this.handleSearch}
        />
        </Col> 
        <Col span={6}>
          <Button onClick={this.handleCancel}>清空</Button>
        </Col></Row>
        <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} spinning={this.state.loading}>
        <Checkbox.Group 
          style={{ marginTop: 12 }} 
          onChange={this.handleCheck}
          value={this.state.checkedList}
          >
          {this.state.relatedNewsList.map(item=>
            <Checkbox 
              style={{ marginLeft: 8, width:"100%" }} 
              value={`${item.id}@${item.title}#${item.publish_date.slice(0, item.publish_date.indexOf('T'))}`} 
              key={item.id} >
                
              {`${item.title}【${item.publish_date.slice(0, item.publish_date.indexOf('T'))}】`}
            </Checkbox>
            )}
          {this.state.paged
            ?<Pagination style={{ textAlign: "center", marginTop: 12 }} size="small" defaultCurrent={2} total={50} />
            :undefined}
        </Checkbox.Group>
        </Spin>
        </div>
      

    )
  }

}

export default EditorRelatedNews