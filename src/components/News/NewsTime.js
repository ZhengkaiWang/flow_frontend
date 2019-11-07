import React from 'react'

const NewsTime = React.memo(props => (
    <p>{props.data.time}</p>
))

export default NewsTime