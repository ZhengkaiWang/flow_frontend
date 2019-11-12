import React from 'react'
import NewsTreeComment from './NewsComment'
import NewsLike from './NewsLike'
import NewsImg from './NewsImg'
import { Link } from 'react-router-dom'
import { Icon, Card, Row, Col, message, Typography, Tag, Tooltip } from 'antd'

class NewsItem extends React.Component {

  state = { commentVisible: false }
  //onNewsLikeClick = () => {this.props.method.onNewsLikeClick(this.props.data.newsInfo.like)} 
  //onNewsCommentClick = (params) => this.props.method.onNewsCommentClick(params,this.props.data.newsInfo.id)

  onIconClick = evt => {
    this.setState({ commentVisible: !this.state.commentVisible })
  }

  render() {
    const newsInfo = this.props.data.newsInfo
    return (
      <div >
        <Card

          bordered={false}
          bodyStyle={{ padding: 0 }}
          headStyle={{ paddingLeft: 12 }}
          style={{ margin: 0, marginTop: 0 }}
          hoverable={false}
          title={<Link style={{ color: 'rgba(0, 0, 0, 0.85)' }} to={`/news/${newsInfo.id}`}>{newsInfo.title}</Link>}
        >

          <Row type="flex" justify="center" >
            <Col span={24} lg={16}>
              <Card
                style={{ margin: 0, borderRight: "1px solid #e8e8e8" }}
                bodyStyle={{ padding: 12, paddingTop: 0 }}
                bordered={false}
              >
                <div dangerouslySetInnerHTML={{ __html: newsInfo.content }}></div>
              </Card>
            </Col>
            <Col span={24} lg={8} >
              <Card
                style={{ margin: 0 }}
                bodyStyle={{ padding: 0, paddingLeft: 12 }}
                bordered={false}
              >
                <Tag color="#108ee9">{newsInfo.category.category_name}</Tag>
                <Tag color="#108ee9">{newsInfo.category.sub_category_name}</Tag>
                {newsInfo.source && <Tag color="#108ee9">{`Source:${newsInfo.source}`}</Tag>}
                {newsInfo.stock && <Tag color="#108ee9">{`股票代码:${newsInfo.stock}`}</Tag>}
                <br />
                <br />
                <Typography.Paragraph>
                  <ul style={{ fontSize: "14px" }}>
                    {
                      newsInfo.relate.map(item =>
                        <div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.id}
                            href={`http://vmp.hzinsights.com/article/${item.relate_article_id}/`}
                          >
                            {`【弘则策略】${item.relate_article_title}【${item.relate_article_publish_date.slice(0, item.relate_article_publish_date.indexOf('T'))}】`}
                          </a>
                          <br />
                        </div>
                      )}
                  </ul>
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>

        <div style={{ textAlign: "right" }} >
          <span style={{ marginRight: 24 }}>
            <NewsLike
              data={{ like: newsInfo.like, user: this.props.data.user, newsId: newsInfo.id }}
              method={{ onNewsLikeClick: this.props.method.onNewsLikeClick }}
            />
          </span>
          <span style={{ marginRight: 24 }} onClick={this.onIconClick}>
            <Tooltip title="评论">
              <Icon type="message" key="comment" style={{ marginRight: 8 }} />
              {`${newsInfo.comment.length - 1}`}</Tooltip>
          </span>
          <span style={{ marginRight: 24 }}>
            <Tooltip title="分享"><Icon type="share-alt" key="share" onClick={() => message.success('分享成功')} /></Tooltip>
          </span>
        </div>
        {this.state.commentVisible
          ? <Card style={{ margin: 20, marginTop: 0, padding: 0 }} bordered={false} >
            <NewsTreeComment
              data={{ comment: newsInfo.comment, user: this.props.data.user, newsId: newsInfo.id }}
              method={{ onNewsCommentClick: this.props.method.onNewsCommentClick }}
            />
          </Card>
          : null}
        <hr />
      </div>
    )
  }
}

export default NewsItem