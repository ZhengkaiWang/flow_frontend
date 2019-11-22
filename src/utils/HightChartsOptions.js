import Highcharts from 'highcharts/highstock'

const axisOption = {
  gridLineWidth: 0,
  minorGridLineWidth: 0,
  opposite: false,
  lineWidth: 1,
  lineColor: '#bfbfbf',
  tickColor: '#bfbfbf',
  tickLength: 5,
  tickWidth: 1,
  title: {
    text: ""
  },
  endOnTick: false,
  startOnTick: false,
  labels: { x: -5, },
  visible: false,
};

const DefalutOptions = {
  
  global: {
    useUTC: false
  },
  colors: ['#1749AB', '#C54322', '#696969', '#B18358', '#333333', '#058DC7', '#EE6363', '#2E8B57', '#FAF0E6'],
  chart: {
    spacingLeft:0,
    // spacing: [5, 10, 1, 10],
    spacing: [5, 8, 0, 8],
    backgroundColor: 'rgba(255, 255, 255, 0)',
    resetZoomButton: {
      position: {
        y: 40,
      },
    },
    zoomType: 'xy',
  },
  title: {
    margin: 5,
    text: "",
  },
  subtitle: {
    align: 'left',
  },
  legend: {
    enabled: true,
    floating: false,
    padding: 0,
    margin: 0,
    itemDistance: 10,
    verticalAlign: 'top',
    align: 'left',
    width: '80%',
    x: 30,
  },
  rangeSelector: {
    inputEnabled: false,
    labelStyle: {
      display: 'none',
    },
    floating: true,
    selected: 1,
    buttonPosition: {
      align: 'right',
      x: -40,
    },
    buttons: [
      {
        type: 'ytd',
        text: 'YTD'
      }, {
        type: 'year',
        count: 1,
        text: '1年'
      }, {
        type: 'year',
        count: 3,
        text: '3年'
      }, {
        type: 'all',
        text: '全部'
      }
    ]
  },
  navigator: {
    xAxis: {
      labels: {
        enabled: false,
      }
    },
    height: 25,
    margin: 5,
    handles: {
      // borderColor: '#1749AB',
    },
    maskFill: 'rgba(23, 73, 171, 0.3)',
    outlineWidth: 0.5,
    series: {
      lineColor: '#1749AB',
      fillOpacity: 0.05,
    }
  },
  yAxis: [
    { ...axisOption, ...{ visible: true, labels: { x: -8, }, } },
    { ...axisOption, ...{ opposite: true, labels: { x: 8, }, } },
    { ...axisOption, ...{ opposite: true, labels: { x: 8, }, } },
    { ...axisOption, ...{ opposite: true, labels: { x: 8, }, } },
    { ...axisOption, ...{ opposite: true, labels: { x: 8, }, } },
    { ...axisOption, ...{ opposite: true, labels: { x: 8, }, } },
  ],
  xAxis: { ...axisOption, ...{ visible: true, dateTimeLabelFormats: { day: '%m-%d', week: '%m-%d', month: '%Y-%m', year: '%Y' }, } },
  plotOptions: {
    series: {
      turboThreshold: 10000,
      dataGrouping: {
        enabled: false
      },
      states: {
        hover: {
          lineWidth: 3
        }
      },
    },
    spline: {
      lineWidth: 2,
      marker: {
        enabled: false
      }
    },
    line: {
      lineWidth: 2,
      marker: {
        enabled: false
      }
    },
    areaspline: {
      lineWidth: 2,
      marker: {
        enabled: false
      },
      fillOpacity: 0.2,
    },
    scatter: {
      marker: {
        symbol: 'circle',
        radius: 3,
        states: {
          hover: {
            enabled: true,
          }
        }
      },
    }
  },
  tooltip: {
    xDateFormat: "%Y-%m-%d",
    valueDecimals: 2,
    split: false,
    shared: true,
    dateTimeLabelFormats: {
      day: "%Y-%m-%d"
    },
  },

  responsive: {
    rules: [{
      condition: { maxWidth: 576 },
      chartOptions: {
        chart:{
          height: "360px",
        },
        title: {
          margin: 5,
          style: { fontSize: '12px', },
        },
        legend: {
          floating: false,
          margin: 3,
          // symbolPadding: 3,
          itemDistance: 5,
          align: 'center',
          alignColumns: false,
          itemStyle: {
            fontSize: '10px',
          },
          itemWidth: undefined,
          width: undefined,
          layout: 'horizontal',
          x: 0,
        },
        yAxis: [
          {
            title: null,
            labels: {
              style: {
                fontSize: '10px',
              },
              x: -5,
              y: -1,
            },
            tickLength: 2,
          }, {
            title: null,
            labels: {
              style: {
                fontSize: '10px',
              },
              x: -5,
              y: -1,
            }, tickLength: 2,
          }, {
            title: null,
            labels: {
              style: {
                fontSize: '10px',
              }, tickLength: 2,
              x: -5,
              y: -1,
            },
          }

        ],

        // yAxis: [
        //   {
        //     title: {
        //       margin: 5,
        //       style: { fontSize: '20px', }
        //     },

        //     labels: {
        //       style: {
        //         fontSize: '8px',
        //       },
        //       x: -5,
        //       y: -1,
        //     },
        //     tickLength: 2,
        //   },
        //   {
        //     title: {
        //       margin: 5,
        //       style: { fontSize: '10px', }
        //     },
        //     labels: {
        //       style: {
        //         fontSize: '8px',
        //       },
        //       x: 3,
        //       y: -1,
        //     },
        //     tickLength: 2,
        //   },
        //   {
        //     title: {
        //       margin: 5,
        //       style: { fontSize: '10px', }
        //     },
        //     labels: {
        //       style: {
        //         fontSize: '8px',
        //       },
        //       x: 3,
        //       y: -1,
        //     },
        //     tickLength: 2,
        //   },
        //   {
        //     title: {
        //       margin: 5,
        //       style: { fontSize: '10px', }
        //     },
        //     labels: {
        //       style: {
        //         fontSize: '8px',
        //       },
        //       x: 3,
        //       y: -1,
        //     },
        //     tickLength: 2,
        //   },
        //   {
        //     title: {
        //       margin: 5,
        //       style: { fontSize: '10px', }
        //     },
        //     labels: {
        //       style: {
        //         fontSize: '8px',
        //       },
        //       x: 3,
        //       y: -1,
        //     },
        //     tickLength: 2,
        //   },
        // ],
        rangeSelector: { enabled: false, },
        xAxis: {
          title: {
            margin: 2,
            style: { fontSize: '10px', },
          },
          labels: {
            style: { fontSize: '10px', },
          },
          y: 2,
          tickLength: 2,
          step:2
        },

        navigator: {
          height: 18,
          margin: 3,
          handles: {
            width: 10,
            height: 18,
          }
        }
      }
    }, {
      condition: { maxHeight: 250 },
      chartOptions: {
        rangeSelector: { enabled: false, },
        navigator: { enabled: false, }
      }
    }, {
      condition: { maxHeight: 350 },
      chartOptions: {
        legend: {
          floating: false,
        }
      }
    }],
  },

  credits: {
    enabled: false,
  },
  scrollbar: {
    enabled: false,
  },
  exporting: {
    enabled: false,
    filename: '弘则数据图表',
    csv: {
      dateFormat: "%Y-%m-%d",
    }
  },
  navigation: {
    menuItemStyle: {
      fontSize: '10px'
    }
  },
}

Highcharts.setOptions(DefalutOptions)

export default Highcharts
