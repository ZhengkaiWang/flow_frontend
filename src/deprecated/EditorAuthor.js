import React from 'react'
import MySelect from '../MySelect'
import { editorApi } from '../../utils/api'


class EditorAuthor extends React.Component {

  state = {
    authorList : [{id:'initId',author:'initAuthor'}],
  }

  componentDidMount(){
    editorApi.listAuthors(this.listAuthorsCallback,{})
  }

  listAuthorsCallback = (data) => {
    this.setState({authorList:[]})
    data.forEach(element => {
       this.setState({authorList:this.state.authorList.concat(element)})
    })
  }

  render() {
    return <MySelect
      data = {{ 
        defaultValue : '请选择作者',
        fieldName : 'author',
        valueName : 'id',
        option : this.state.authorList
      }}
      method = {{ onClick : this.props.handleAuthor }}
    />
  }
}

export default EditorAuthor