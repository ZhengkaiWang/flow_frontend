import React from 'react'
import { Form, Icon, Input, Button } from 'antd';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class InputForm extends React.Component {
  
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.props.form.resetFields()
      this.props.method.onFormSubmit(values)
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const formError = isFieldTouched('comment_body') && getFieldError('comment_body');
    
    return (
      <Form layout="inline" onSubmit={this.onFormSubmit}>
        <Form.Item validateStatus={formError ? 'error' : ''}>
          {getFieldDecorator(this.props.data.fieldName, {
            rules: [{ required: true, message: this.props.data.errMsg}],
          })(
            <Input
              prefix={<Icon type={this.props.data.iconType} />}
              placeholder={this.props.data.inputPlaceholder}
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            {this.props.data.btnText}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedInputForm = Form.create({ name: 'horizontal_login' })(InputForm);
export default WrappedInputForm
 