import React from 'react'
import CheckItem from './ImgItem'
import { Row, Col, Pagination, Input } from 'antd';
import ContentHeader from '../Common/ContentHeader'

class Img extends React.Component {

  render() {
    const imgList = this.props.data.imgList
    return (
      <>
        <ContentHeader
          data={{ title: "图表概览" }}
          components={{
            extra: [
              <Input.Search
                style={{ width: 200, marginLeft: 0 }}
                placeholder="搜索标题/作者/ID"
                allowClear
                onSearch={this.props.method.handleSearch}
              />
            ]
          }}
        />
        <Row gutter={16}>
          {imgList.map(
            (item, index) =>
                <Col span={24} md={8}>
                  <CheckItem
                    key={item.id}
                    data={{
                      img: item
                    }}
                    method={{
                      handleCheck: this.props.method.handleCheck,
                      handleCancelCheck: this.props.method.handleCancelCheck,
                      handleDelete: this.props.method.handleDelete
                    }}
                  >
                  </CheckItem>
                </Col>
          )}
        </Row>
        <Pagination
          style={{ textAlign: "center", marginTop: 12 }}
          // size="small"
          //simple
          current={this.props.data.page}
          total={this.props.data.count}
          showSizeChanger
          showQuickJumper
          defaultPageSize={10}
          onShowSizeChange={this.props.method.hanglePage}
          onChange={this.props.method.hanglePage}
        />
        <hr />
      </>
    )
  }
}
export default Img