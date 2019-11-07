import React from 'react'
import MySelect from '../MySelect'
import { editorApi } from '../../utils/api'


class EditorCategory extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props){
    super(props)
    const value = props.value || {}
    this.state = {
      value : value,
      categoryList : [{id:'initId',sub_category_name:'initSub_category_name'}],
    }
  }

  componentDidMount(){
    editorApi.listCategorys(this.listCategorysCallback,{})
  }
  
  listCategorysCallback = (data) => {
    this.setState({categoryList:[]})
    data.forEach(element => {
       this.setState({categoryList:this.state.categoryList.concat(element)})
    })
  }

  render() {
    return <MySelect
      data = {{ 
        defaultValue : '请选择分类',
        fieldName : 'sub_category_name',
        valueName : 'id',
        option : this.state.categoryList
      }}
      method = {{
        onClick : value => this.setState({value:value})
      }}
    />
  }
}

export default EditorCategory