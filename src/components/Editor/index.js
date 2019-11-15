import React from 'react'
import urlSlug from 'url-slug'
import { Tooltip, Icon, Cascader, Form, Input, Button, Select, Row, Col, Card, Typography, Tag, Tabs} from 'antd'
import EditorText from './EditorText'
import { newsApi } from '../../utils/api'
import Category from '../News/Category'
import EditorImage from './EditorImage'
import EditorRelatedNews from './EditorRelatedNews'
import categoryStatic from './CategoryStatic'
import ContentHeader from '../Common/ContentHeader'
import generateArticleTitle from '../../utils/generateArticleTitle'

class Editor extends React.Component {

  componentDidMount() {
    this.props.data.newsId === undefined
      ? console.log(this.props.data.newsId)
      : this.RetriveNews(this.props.data.newsId)
  }

  RetriveNews = newsId =>
    newsApi.retrieveNews(rspData => {
      this.props.method.handlePvsRelate(rspData.relate)
      this.props.form.setFieldsValue({
        content: { model: rspData.content },
        title: rspData.title,
        request_principal: String(rspData.principal_id),
        request_category: [rspData.category.category_name, String(rspData.category.id)],
        source: rspData.source,
        stock: rspData.stock,
        relatedNews: {
          checkedList: rspData.relate.map(item =>
            `${item.relate_article_id}@${item.relate_article_title}#${item.relate_article_publish_date}&${item.article__update_frequency}^${item.article__show_category_in_title}`
          )
        }
      })
    }, { id: newsId })


  handleImageClick = item =>
    this.froalaInstance.html.insert(
      `<iframe 
        src=http://127.0.0.1:8000/element/${item.element_id}/${urlSlug(item.element__title_en, { separator: '_' })}/|||||/
        key=${item.element_id}
        width="100%"
        display="initial"
        position="relative"
        style="border-width:0px;height:400px;"
      />`
      , false)

  handleUpstream = froalaInstance =>
    this.froalaInstance = froalaInstance

  handleEditorSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.method.handleEditorSubmit(values)
        //this.props.form.resetFields()
      }
    })
  }

  render() {
    const formValue = this.props.form.getFieldsValue()
    return (

      <Form
        onSubmit={this.handleEditorSubmit}
        layout="horizontal"
        style={{ padding: 0, margin: 0 }}
      >
        <ContentHeader data={{ title: "编辑新闻", lind: "/editor/" }} />
        <Row>
          <Col span={24} lg={16}><div style={{ padding: 12 }}>
            <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12}}>新闻预览</div>
            <Card
              bordered={true}
              bodyStyle={{ padding: 0, paddingBottom: 12 }}
              headStyle={{ paddingLeft: 12 }}
              style={{ margin: 0, marginTop: 0, marginBottom: 24 }}
              hoverable={true}
              title={formValue.title}
            >

              <Row >
                <Col span={24} lg={24}>
                  <Card
                    style={{ margin: 0, borderRight: "1px solid #e8e8e8" }}
                    bodyStyle={{ padding: 12, paddingTop: 0 }}
                    bordered={false}
                  >
                    <div dangerouslySetInnerHTML={{ __html: (formValue.content || {}).model }}></div>
                  </Card>
                </Col>
                <Col span={24} lg={24} >
                  <Card
                    style={{ margin: 0 }}
                    bodyStyle={{ padding: 0, paddingLeft: 12 }}
                    bordered={false}
                  >
                    {formValue.request_category && <Tag color="#108ee9">{categoryStatic[formValue.request_category[1]].category_name}</Tag>}
                    {formValue.request_category && <Tag color="#108ee9">{categoryStatic[formValue.request_category[1]].sub_category_name}</Tag>}
                    {formValue.stock && <Tag >{`股票代码:${formValue.stock}`}</Tag>}
                    <br />
                    <br />
                    <Typography.Paragraph>
                      <ul style={{ fontSize: "14px" }}>
                        {formValue.relatedNews &&
                          formValue.relatedNews.checkedList.map(item =>
                            <div key={item}>
                              <a
                                key={item}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`http://vmp.hzinsights.com/article/${item.slice(0, item.indexOf('@'))}/`}
                              >{generateArticleTitle({
                                title: item.slice(item.indexOf('@') + 1, item.indexOf('#')),
                                publish_date: item.slice(item.indexOf('#') + 1, item.indexOf('&')),
                                update_frequency: item.slice(item.indexOf('&') + 1, item.indexOf('^')),
                                show_category_in_title: item.slice(item.indexOf('^') + 1)
                              }
                              )}
                              </a>
                              <br />
                            </div>
                          )
                        }
                      </ul>
                    </Typography.Paragraph>
                  </Card>
                </Col>
              </Row>
            
            <Row>
              <Col span={12} >
                <div style={{ textAlign: "left", marginLeft: 12 }}>
                  {formValue.source &&
                    <span style={{ fontSize: 14, fontWeight: "bold", fontStyle: "italic" }}>{`Source:${formValue.source}`}
                    </span>}
                </div>
              </Col>
              <Col span={12} >
                <div style={{ textAlign: "right" }} >
                  <span style={{ marginRight: 24, cursor: "pointer" }}>
                    <Tooltip title="点赞">
                      <Icon
                        type={'like'}
                        theme={'outlined'}
                        style={{ marginRight: 8, fontSize: '16px' }}
                      />0</Tooltip>
                  </span>
                  <span style={{ marginRight: 24, cursor: "pointer" }} onClick={this.onIconClick}>
                    <Tooltip title="评论">
                      <Icon type="message" key="comment" style={{ marginRight: 8 }} />
                      0</Tooltip>
                  </span>
                  <span style={{ marginRight: 24 }}>
                    <Tooltip title="分享"><Icon type="share-alt" key="share"/></Tooltip>
                  </span>
                </div></Col>
            </Row></Card>
            <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>正文编辑</div>
            <Form.Item >
              {this.props.form.getFieldDecorator('content', {
                rules: [{ required: true, message: '请输入文章正文!' }],
              })(
                <EditorText
                  method={{
                    handleUpstream: this.handleUpstream
                  }}
                ></EditorText>
              )}
            </Form.Item>
          </div>
          </Col>

          <Col span={24} lg={8}>
            <div style={{ padding: 12, paddingBottom: 0 }}>
              <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>信息设置</div>
              <Form.Item>
                <Button htmlType="submit" block>
                  确认信息并提交
              </Button>
              </Form.Item>
              <Tabs defaultActiveKey="0" >
                <Tabs.TabPane tab="基本信息设置" key="0">
                  <Form.Item hasFeedback >
                    {this.props.form.getFieldDecorator('title', {
                      rules: [{ whitespace: true, required: true, message: '请输入标题!' }],
                    })(
                      <Input placeholder='请输入文章标题' />
                    )}
                  </Form.Item>
                  <Form.Item >
                    {this.props.form.getFieldDecorator('request_principal', {
                      rules: [{ required: true, message: '请选择作者!' }],
                    })(
                      <Select placeholder={'请选择作者'}>
                        {
                          this.props.data.authorList.map(item =>
                            <Select.Option key={item.id}>
                              {item.author}
                            </Select.Option>
                          )
                        }
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item >
                    {this.props.form.getFieldDecorator('request_category', {
                      rules: [{ required: true, message: '请选择类别!' }],
                    })(
                      <Cascader
                        placeholder="请选择分类"
                        options={Category}
                        expandTrigger="hover"
                      />
                    )}
                  </Form.Item>
                  <Form.Item hasFeedback >
                    {this.props.form.getFieldDecorator('source', {
                      rules: [{ required: false, message: '请输入数据来源:' }],
                    })(
                      <Input placeholder="请输入数据来源" addonBefore="Source:" />
                    )}
                  </Form.Item>
                </Tabs.TabPane>
                <Tabs.TabPane tab="关联信息设置" key="1">
                  <Form.Item hasFeedback >
                    {this.props.form.getFieldDecorator('stock', {
                      rules: [{ required: false, message: '请输入股票代码!' }],
                    })(
                      <Input placeholder='请输入股票代码' />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {this.props.form.getFieldDecorator('relatedNews', {
                      rules: [{ required: false, message: '请选择关联文章!' }],
                    })(
                      <EditorRelatedNews></EditorRelatedNews>)}
                  </Form.Item>
                </Tabs.TabPane>

              </Tabs></div>
            <div style={{ padding: 12, paddingTop: 0 }}>
              <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>图表插入</div>
              <EditorImage
                data={{
                  imageLoading: this.props.data.imageLoading,
                  imageList: this.props.data.imageList,
                  imagePage: this.props.data.imagePage,
                  imagePageCount: this.props.data.imagePageCount,
                }}
                method={{
                  handleImageClick: this.handleImageClick,
                  handleImageSearch: this.props.method.handleImageSearch,
                  handleImagePage: this.props.method.handleImagePage,
                }}
              ></EditorImage></div>

          </Col>

        </Row>
      </Form>
    )
  }
}
const WrappedEditor = Form.create({ name: 'horizontal_login' })(Editor);
export default WrappedEditor