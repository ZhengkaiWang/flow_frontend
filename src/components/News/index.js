import React from 'react'
import NewsItem from './NewsItem'
import Category from './Category'
import ContentHeader from '../Common/ContentHeader'
import { Timeline, Icon, Input, Cascader } from 'antd'

class News extends React.Component {
  render() {
    const newsInfoList = this.props.data.newsInfoList
    return (
      <div>
        <ContentHeader
          data={{link:'/news/', title:'新闻信息流'}}
          components={{
            extra: [<Cascader
              changeOnSelect
              placeholder="请选择分类"
              options={Category}
              expandTrigger="hover"
              style={{ width: 140, marginBottom: 8, marginRight: 8 }}
              onChange={this.props.method.handleFilter}
            />,
            <Input.Search
              style={{ width: 140, marginLeft: 0 }}
              placeholder="搜索标题/内容/作者..."
              allowClear
              onSearch={this.props.method.handleSearch}
            />]
          }}
        />
        <Timeline pending >
          <Timeline.Item dot={<Icon type="fire" />}>热点追踪中...</Timeline.Item>
          {
            newsInfoList.map(
              item =>
                <Timeline.Item key={item.id}>
                  {`${item.time.slice(item.time.indexOf('-') + 1, item.time.indexOf('T'))}  ${item.time.substr(item.time.indexOf('T') + 1, 8)}`}
                  <NewsItem
                    key={item.id}
                    data={{
                      user: this.props.data.user,
                      newsInfo: item
                    }}
                    method={{
                      onNewsLikeClick: this.props.method.onNewsLikeClick,
                      onNewsCommentClick: this.props.method.onNewsCommentClick
                    }}
                  />
                </Timeline.Item>
            )}
        </Timeline>
      </div>
    )
  }
}

export default News


