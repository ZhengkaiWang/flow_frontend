import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from '../../utils/HightChartsOptions'
import data from '../../utils/testData'

// const NewsImg = React.memo(props => (
//     <iframe src="http://127.0.0.1:8000/element/138/10y_treasury/2019-10-31,2019-11-01|||||/"
//     width="100%"
//     title="myId"
//     className="myClassname"
//     display="initial"
//     position="relative"
//     style={{ borderWidth:'0px' }}
//     />

//   ))


let series1 = []
let series3 = []

data.forEach(item => {
  series1.push({
    x: Date.parse(item.DateTime),
    y: parseFloat(item.dg)
  })
  series3.push({
    x: Date.parse(item.DateTime),
    y: parseFloat(item.tb)
  })
}
)

// Highcharts.setOptions(Defaultoptions)

const options = {
  chart: {
    type: 'spline',
    zoomType: 'xy',
  },
  xAxis: {
    ordinal: false
  },
  yAxis: [{
    visible: true,
    plotLines: [{
      color: '#C0C0C0',
      width: 2,
      value: 0
    }]
  }, {
    labels: {
      format: "{value}"
    },
    visible: true,
  },
  {
    visible: true,
    plotLines: [{
      color: 'green',
      dashStyle: 'dot',
      value: 1.5,
      width: 2,
      //     zIndex: 3,
    }],
  }
  ],
  rangeSelector: {
    selected: 2,
  },
  legend: {
    enabled: true,
  },
  series: [{
    data: series1,
    name: "德国:批发价格指数",
    zIndex: 1,
    yAxis: 0,
    tooltip: {
      valueDecimals: 2,
      valueSuffix: '%'
    },
    visible: true,
    color: '#B18358'
    // },{
    //     data: series2,
    //     name: '英国制造业PMI:3MMA', 
    //     zIndex: 1, 
    //     yAxis: 0, 
    //     tooltip: {
    //         valueDecimals: 2,
    //         valueSuffix: '%'
    //     },
    //     visible: true,
    //     color: '#1749AB'
  }, {
    data: series3,
    name: "同比",
    zIndex: 1,
    yAxis: 2,
    tooltip: {
      valueDecimals: 2,
      valueSuffix: ''
    },
    visible: true,
    color: '#C54322'
    // }, {
    //     data: series4,
    //     name:  '英国服务业PMI:3MMA', 
    //     zIndex: 1, 
    //     yAxis: 1, 
    //     tooltip: {
    //         valueDecimals: 2,
    //         valueSuffix: ''
    //     },
    //     visible: true,
    //     color: '#058DC7'
  }],

}

class NewsCharts extends React.Component {
  componentDidMount() {
    const component = this.refs.chartComponent;

    // component.container.current.style.height = "100%";
    // component.container.current.style.width = "100%";
    component.chart.reflow();
  }

  render() {
    return (

    <div >
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        ref="chartComponent"
      /></div>

    )
  }
}

export default NewsCharts

