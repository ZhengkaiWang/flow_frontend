import React from 'react'
import NewsTreeComment from './NewsComment'
import NewsLike from './NewsLike'
import generateArticleTitle from '../../utils/generateArticleTitle'
//import NewsImg from './NewsImg'
import { ScreenContext } from '../../utils/Screen'
import { Link } from 'react-router-dom'
import { Icon, Card, Row, Col, message, Typography, Tag, Tooltip } from 'antd'

class NewsItem extends React.Component {

  static contextType = ScreenContext

  state = { commentVisible: false }
  //onNewsLikeClick = () => {this.props.method.onNewsLikeClick(this.props.data.newsInfo.like)} 
  //onNewsCommentClick = (params) => this.props.method.onNewsCommentClick(params,this.props.data.newsInfo.id)

  onIconClick = evt => {
    this.setState({ commentVisible: !this.state.commentVisible })
  }

  render() {
    const fontSize = this.context.device==="mobile"?"12px":"14px"
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
            <Col span={24} lg={18}>
              <Card
                style={this.context.device==="mobile"
                ?{ margin: 0, borderRight: "0px solid #e8e8e8" }
                :{ margin: 0, borderRight: "1px solid #e8e8e8" }}
                bodyStyle={{ padding: 12, paddingTop: 0 }}
                bordered={false}
              >
                <div dangerouslySetInnerHTML={{ __html: newsInfo.content }}></div>
              </Card>
            </Col>
            <Col span={24} lg={6} >
              <Card
                style={{ margin: 0 }}
                bodyStyle={{ padding: 0, paddingLeft: 12 }}
                bordered={false}
              >
                <Tag color="#108ee9" style={{marginBottom:8}}>{newsInfo.category.category_name}</Tag>
                <Tag color="#108ee9" style={{marginBottom:8}}>{newsInfo.category.sub_category_name}</Tag>
                {newsInfo.stock && <Tag >{`股票代码:${newsInfo.stock}`}</Tag>}
                <br />
                <br />
                <Typography.Paragraph>
                  <ul style={{fontSize:fontSize}}>
                    {
                      newsInfo.relate.map(item =>
                        <div>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.id}
                            href={`http://vmp.hzinsights.com/article/${item.relate_article_id}/`}
                          >
                            {generateArticleTitle({
                              publish_date: item.relate_article_publish_date,
                              show_category_in_title: item.article__show_category_in_title,
                              update_frequency: item.article__update_frequency,
                              title: item.relate_article_title
                            })}
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
        <Row>
          <Col span={12} >
            <div style={{ textAlign: "left", marginLeft: 12 }}>
              {newsInfo.source && 
                <span style={{fontSize:fontSize, fontWeight: "bold", fontStyle: "italic" }}>{`Source:${newsInfo.source}`}
                </span>}
            </div>
          </Col>
          <Col span={12} >
            <div style={{ textAlign: "right" }} >
              <span style={{ marginRight: 24 , cursor:"pointer"}}>
                <NewsLike
                  data={{ like: newsInfo.like, user: this.props.data.user, newsId: newsInfo.id }}
                  method={{ onNewsLikeClick: this.props.method.onNewsLikeClick }}
                />
              </span>
              <span style={{ marginRight:24, cursor:"pointer"}} onClick={this.onIconClick}>
                <Tooltip title="评论">
                  <Icon type="message" key="comment" style={{ marginRight: 8 }} />
                  {`${newsInfo.comment.length - 1}`}</Tooltip>
              </span>
              <span style={{ marginRight: 24 }}>
                <Tooltip title="分享"><Icon type="share-alt" key="share" onClick={() => message.success('分享成功')} /></Tooltip>
              </span>
            </div></Col>

        </Row>
        {this.state.commentVisible
          ? <Card 
              style={{ margin: 12, marginTop: 0, padding: 0 }} 
              bordered={false} 
              bodyStyle={{padding:0 }}
              >
            <NewsTreeComment
              data={{ comment: newsInfo.comment, user: this.props.data.user, newsId: newsInfo.id }}
              method={{ onNewsCommentClick: this.props.method.onNewsCommentClick }}
            />
          </Card>
          : null}
        <hr style={{border:"none",borderTop:"2px #e8e8e8 solid"}}/>
      </div>
    )
  }
}

export default NewsItem