import React from 'react'
import { Card, Pagination, Input } from 'antd'

class EditorImage extends React.Component {

  render() {

    const { imageLoading } = this.props.data
    return (
      <div>
        <Input.Search placeholder="搜索图片" onSearch={this.props.method.handleImageSearch} enterButton />
        <br />
        <br />
        {
          this.props.data.imageList.map(item =>
            <Card
              loading={imageLoading}
              key={item.element_id}
              style={{ margin: 0, padding: 0 }}
              bodyStyle={{textAlign:"center", fontWeight:"bold"}}
              cover={
                imageLoading
                  ? ''
                  : item.image.includes('<img')
                    ? <img alt='base64Img' src={item.image.slice(10, item.image.indexOf('class="') - 2)} id={item.element_id}></img>
                    : <img alt="urlImg" src={item.image} id={item.element_id} />}
              hoverable
              onClick={evt => this.props.method.handleImageClick(item)}>
              {item.element__title}
              </Card>
          )
        }
      <Pagination 
        style={{marginTop:"12px", textAlign:"center"}}
        defaultCurrent={this.props.data.imagePage} 
        total={this.props.data.imagePageCount}
        hideOnSinglePage={true}
        pageSize={10}
        simple
        onChange={this.props.method.handleImagePage}
      />
      </div>
    )
  }
}

export default EditorImage


