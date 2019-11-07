import React from 'react'
import { Form, Input, Button,  } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class NewsTreeCommentForm extends React.Component {
  
  componentDidMount() {
    // To disabled submit button at the beginning.
    //this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.form.resetFields()
        this.props.method.onNewsCommentClick(values)
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const commentError = isFieldTouched('comment_body') && getFieldError('comment_body');
    
    return (      
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={commentError ? 'error' : ''}>
          {getFieldDecorator('comment_body', {
            rules: [{ required: true, message: '请输入评论' }],
          })(
            <Input
              allowClear
              style={{ width: 600 }}
              //suffix={<Icon type="edit" />}
              addonBefore={`@${this.props.data.reply}:`}
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button loading={false} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            提交评论
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedNewsTreeCommentForm = Form.create({ name: 'horizontal_login' })(NewsTreeCommentForm);
export default WrappedNewsTreeCommentForm
 