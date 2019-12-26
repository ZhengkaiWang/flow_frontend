import React from 'react'
import urlSlug from 'url-slug'
import { Card } from 'antd'

class ImgItem extends React.Component {

  render() {

    const item = this.props.data.img
      console.log(item)
      return (
      <a
          target="_black"
          href={`http://vmp.hzinsights.com/element/${item.id}/${urlSlug(item.element__title_en, { separator: '_' })}/|||||/`}>
        <Card
          bordered={true}
          bodyStyle={{ padding: 12 }}
          style={{ margin: 0, marginTop: 12 }}
          hoverable
          size="small"
          title={`${item.element__title}`}
          cover={
            item.image.includes('<img')
                ? <img alt='base64Img' height="300px" src={item.image.slice(10, item.image.indexOf('class="') - 2)} id={item.element_id}></img>
                : <img alt="urlImg" height="300px" src={item.image} id={item.element_id} />}
        >
        </Card>
      </a>
    )
  }
}

export default ImgItem