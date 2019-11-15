import React from 'react'
import { Typography, Divider } from 'antd';

const NewsText = props => (
    <Typography>

        <Typography.Title level={4}>{props.data.title}</Typography.Title>
        <Divider />
        <Typography.Paragraph>{props.data.content}</Typography.Paragraph>

    </Typography>
    
)

export default NewsText