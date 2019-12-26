import React from 'react'
import { PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import { UserContext } from '../../utils/User'

class ContentHeader extends React.Component {
  static contextType = UserContext

  render() {
    return (
      <PageHeader
        style={{
          marginBottom: 24,
          padding: 0,
          paddingBottom: 12,
          borderBottom: '1px solid rgb(235, 237, 240)',
        }}
        title={<Link style={{ color: 'rgba(0, 0, 0, 0.85)' }} to={this.props.data.link}>{this.props.data.title}</Link>}
        subTitle={`Power by VMP@HZ`}
        //subTitle={`Hi, ${this.context.userName}`}
        extra={this.props.components && this.props.components.extra}
      >
      </PageHeader>
    )
  }
}


export default ContentHeader