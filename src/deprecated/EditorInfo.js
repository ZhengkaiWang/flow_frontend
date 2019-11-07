import React from 'react'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Select } from 'antd'
import {editorApi} from '../../utils/api'

class EditorInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      categoryList : [{}],
      authorList : [{}],
    }
  }

  componentDidMount(){
    editorApi.listCategorys(this.listCategorysCallback,{})
    editorApi.listAuthors(this.listAuthorsCallback,{})
  }

  listCategorysCallback = (data) => {
    data.forEach(element => {
       this.setState({categoryList:this.state.categoryList.concat(element)})
    })
  }

  listAuthorsCallback = (data) => {
    data.forEach(element => {
       this.setState({authorList:this.state.authorList.concat(element)})
    })
  }

  render(){
    return (
      <div>
        <Select defaultValue={this.props.data.author} onChange={this.props.method.handleAuthor}>
          {
            this.state.authorList.map(
              item => <Select.Option value = {item['author']}>
                {item['author']}
              </Select.Option>
            )
          }
        </Select>
        <Card style={{ width: '18rem', height: '18rem' }}>
        <DropdownButton title={this.props.data.author}>
          {
            this.state.authorList.map(
              (item, index) => (
                <Dropdown.Item 
                key={index} 
                onClick = {()=> this.props.method.handleAuthor(item)}
                >
                {item['author']}
                </Dropdown.Item>
              )
            )
          }
        </DropdownButton>
        <DropdownButton title={this.props.data.category}>
        {
            this.state.categoryList.map(
              (item, index) => (
                <Dropdown.Item 
                key={index} 
                onClick = {()=> this.props.method.handleCategory(item)}
                >
                {item['sub_category_name']}
                </Dropdown.Item>
              )
            )
          }
        </DropdownButton>
        </Card>
     </div>
    )
  }
}


export default EditorInfo