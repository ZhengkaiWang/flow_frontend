import React from 'react'
import { editorApi } from '../../utils/api'
import generateArticleTitle from '../../utils/generateArticleTitle'
import { Checkbox, Pagination, Input, Spin,Icon, Button, Row, Col } from 'antd'

class EditorRelatedNews extends React.Component {
  
  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...({
          relatedNewsList:prevState.relatedNewsList,
          articleLoading: prevState.articleLoading,
          articlePage: prevState.articlePage,
          checkedList:nextProps.value || []
        })
      }
    }
    return null
  }
  
  constructor(props) {
    super(props)
    this.state = {
      relatedNewsList: {results:[]},
      articleLoading: true,
      articlePage: 1,
      articlePageCount: 1,
      checkedList : props.value || []
    }
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    if (this.props.onChange) {
      this.props.onChange(changedValue)
    }
  }


  handleArticlePage = page => {
    this.setState({articleLoading: true})
    editorApi.listArticles(
      rspData => 
        this.setState({relatedNewsList:rspData, articleLoading:false}),
        {page:page})
  }

  handleSearch = value => {
    this.setState({articleLoading:true})
    editorApi.listArticles(
      rspData => 
        this.setState({relatedNewsList:rspData, articleLoading:false, articlePageCount:rspData.count}),
        {search_keywords:value})
    }

  handleCheck = checkedList => {
    this.setState({checkedList})
    this.triggerChange(checkedList)
  }

  handleCancel = () => {
    this.setState({checkedList:[]})
    this.triggerChange([])
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
        <Spin indicator={<Icon type="Loading" style={{ fontSize: 24 }} spin />} spinning={this.state.articleLoading}>
        <Checkbox.Group 
          style={{ marginTop: 12 }} 
          onChange={this.handleCheck}
          value={this.state.checkedList}
          >
          {this.state.relatedNewsList.results.map(item=>
            <Checkbox 
              style={{ marginLeft: 8, width:"100%" }} 
              value={`${item.id}@${item.title}#${item.publish_date}&${item.update_frequency}^${item.show_category_in_title}`} 
              key={item.id} >
              {generateArticleTitle(item)}
            </Checkbox>
            )}
          <Pagination 
            style={{textAlign:"center", marginTop:12}} 
            simple 
            defaultCurrent={1} 
            pageSize={20}
            hideOnSinglePage={true}
            total={this.state.articlePageCount} 
            onChange={this.handleArticlePage}
          />

        </Checkbox.Group>
        </Spin>
        </div>
      

    )
  }

}

export default EditorRelatedNews