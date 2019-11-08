import React from 'react'
import { Card } from 'antd'
import { Input } from 'antd';

class EditorImage extends React.Component {

  render() {  
    const { imageLoading } = this.props.data 
    return (
      <div>
      <Input.Search placeholder="搜索图片" onSearch={this.props.method.handleImageSearch} enterButton />
      <br />
      <br />
      {
        this.props.data.imageList.map( item =>
          <Card 
            loading={imageLoading} 
            key={item.element}
            style={{margin:0, padding:0}}
            cover={
              imageLoading
              ? ''
              : item.image.includes('<img')
                ?<img alt='base64Img' src={item.image.slice(10, item.image.indexOf('class="')-2)} id={item.element}></img>  
                :<img alt="urlImg" src={item.image} id={item.element}/>} 
            hoverable
            onClick = {this.props.method.handleImageClick}
          />                   
        )
      }

    </div>
    )
  }
}

export default EditorImage


