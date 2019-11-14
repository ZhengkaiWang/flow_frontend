import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const NewsImg = React.memo(props => (
    <iframe src="http://127.0.0.1:8000/element/138/10y_treasury/2019-10-31,2019-11-01|||||/"
    width="100%"
    title="myId"
    className="myClassname"
    display="initial"
    position="relative"
    style={{ borderWidth:'0px' }}
    />
    
  ))

  const options = {
    title: {
        text: 'My chart'
    },
    series: [{
        type: 'line',
        data: [1, 2, 3]
    }]
}

const NewsCharts = () => 
  <HighchartsReact 
  highcharts={Highcharts}
  options={options}
/>

export default NewsImg

