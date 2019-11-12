import React from 'react'
import { Form, Input, Button, Select, Row, Col, Card, Typography, Tag, Tabs, PageHeader } from 'antd'
import EditorText from './EditorText'
import EditorImage from './EditorImage'
import EditorRelatedNews from './EditorRelatedNews'
import categoryStatic from './CategoryStatic'

class Editor extends React.Component {

  componentDidMount() {
    //this.props.form.validateFields()
  }

  handleImageClick = evt =>
    this.froalaInstance.html.insert(
      `<img alt="example" src=${evt.target.src} id=${evt.target.id} width=100% height=100% />`
      , false)

  handleUpstream = froalaInstance =>
    this.froalaInstance = froalaInstance

  handleEditorSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.method.handleEditorSubmit(values, this.state.post)
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
        <PageHeader
          style={{
            marginBottom: 12,
            padding: 0,
            paddingBottom: 18,
            borderBottom: '1px solid rgb(235, 237, 240)',
          }}
          title="编辑新闻"
          subTitle="Power by VMP@HZ"
          extra={[]}
        >
        </PageHeader>
        <Row>
          <Col span={24} lg={16}><div style={{ padding: 12 }}>
            <div style={{ fontSize: 16, fontWeight: "bold", marginBottom: 12 }}>新闻预览</div>
            <Card
              bordered={true}
              bodyStyle={{ padding: 0 }}
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
                    {formValue.request_category && <Tag color="#108ee9">{categoryStatic[formValue.request_category].category_name}</Tag>}
                    {formValue.request_category && <Tag color="#108ee9">{categoryStatic[formValue.request_category].sub_category_name}</Tag>}
                    {formValue.source&&<Tag color="#108ee9">{`Source:${formValue.source}`}</Tag>}
                    {formValue.stock&&<Tag color="#108ee9">{`股票代码:${formValue.stock}`}</Tag>}
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
                              >{`【弘则策略】${item.slice(item.indexOf('@') + 1)}`}
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
            </Card>
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
                      <Select placeholder={'请选择分类'}>
                        {
                          this.props.data.categoryList.map(item =>
                            <Select.Option key={item.id}>
                              {item.sub_category_name}
                            </Select.Option>
                          )
                        }
                      </Select>
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
                  <Form.Item hasFeedback >
                    {this.props.form.getFieldDecorator('source', {
                      rules: [{ required: false, message: '请输入数据来源:' }],
                    })(
                      <Input placeholder="请输入数据来源" addonBefore="Source:" />
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
                  imageList: this.props.data.imageList
                }}
                method={{
                  handleImageClick: this.handleImageClick,
                  handleImageSearch: this.props.method.handleImageSearch,
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