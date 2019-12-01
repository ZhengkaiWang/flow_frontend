import React from 'react'
import NewsItem from './NewsItem'
import { CategoryCascade } from '../../utils/Category'
import ContentHeader from '../Common/ContentHeader'
import { Timeline, Icon, Input, Cascader, Pagination } from 'antd'
import Chat from './Chat'

const News = props =>
  <div>
    <ContentHeader
      data={{ link: '/news/', title: '新闻信息流' }}
      components={{
        extra: [<Cascader
          changeOnSelect
          placeholder="请选择分类"
          options={CategoryCascade}
          expandTrigger="hover"
          style={{ width: 140, marginBottom: 8, marginRight: 8 }}
          onChange={props.method.handleFilter}
        />,
        <Input.Search
          style={{ width: 140, marginLeft: 0 }}
          placeholder="搜索标题/内容/作者..."
          allowClear
          onSearch={props.method.handleSearch}
        />]
      }}
    />
    <Timeline pending >
      <Timeline.Item dot={<Icon type="fire" />}>热点追踪中...</Timeline.Item>
      {
        props.data.newsInfoList.map(
          item =>
            <Timeline.Item key={item.id}>
              {`${item.time.slice(item.time.indexOf('-') + 1, item.time.indexOf('T'))}  ${item.time.substr(item.time.indexOf('T') + 1, 8)}`}
              <NewsItem
                key={item.id}
                data={{
                  user: props.data.user,
                  newsInfo: item
                }}
                method={{
                  onNewsLikeClick: props.method.onNewsLikeClick,
                  onNewsCommentClick: props.method.onNewsCommentClick
                }}
              />
            </Timeline.Item>
        )}
    </Timeline>
    <Pagination
      style={{ textAlign: "center", marginTop: 12 }}
      // size="small"
      //simple
      current={props.data.page}
      total={props.data.count}
      showSizeChanger
      showQuickJumper
      onShowSizeChange={props.method.hanglePage}
      onChange={props.method.hanglePage}
    />
    <Chat></Chat>
  </div>


export default News


