import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from '../../utils/HightChartsOptions'
import fetchData from "./fetchData";

class Chart_16 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: "loading..."
    };
  }

  componentDidMount() {
    let series0 = [];
    let series1 = [];

    fetchData("http://vmp.hzinsights.com/api/dailydata/16/run_query/?format=json", rspData => {
      rspData.data[0].table.forEach(item =>
        series0.push({
          x: item.x,
          y: item.y
        })
      );
      rspData.data[1].table.forEach(item =>
        series1.push({
          x: item.x,
          y: item.y
        })
      );
      this.setState({ data: [series0, series1] });
      this.setState({ status: "complete" });
      component.chart.reflow();
    });
    const component = this.refs.chartComponent;

    // component.container.current.style.height = "100%";
    // component.container.current.style.width = "100%";
    // component.chart.reflow();
  }

  render() {
    const options = {
      chart: {
        type: "spline"
      },
      xAxis: {
        ordinal: false
      },
      yAxis: [
        {
          endOnTick: false,
          max: 1,
          min: 0,
          labels: {
            formatter: function() {
              return Math.round(this.value * 100) + "%";
            }
          },
          startOnTick: false
        },
        {
          endOnTick: false,
          startOnTick: false,
          visible: true
        }
      ],
      tooltip: {
        split: false,
        shared: true,
        dateTimeLabelFormats: {
          day: "%Y-%m-%d"
        }
      },
      plotOptions: {
        spline: {
          tooltip: {
            pointFormatter: function() {
              var res;
              if (
                this.series.name.match(/[\u4E00-\u9FCC]*([\分位]+|[\情绪]+)/)
              ) {
                res = [
                  '<span style="color:',
                  this.color,
                  '">\u25CF</span> ',
                  this.series.name,
                  ": <b>",
                  Math.round(this.y * 10000) / 100,
                  "%</b><br/>"
                ].join("");
              } else {
                res = [
                  '<span style="color:',
                  this.color,
                  '">\u25CF</span> ',
                  this.series.name,
                  ": <b>",
                  Math.round(this.y * 10) / 10,
                  "</b><br/>"
                ].join("");
              }
              return res;
            },
            shared: true
          }
        }
      },
      rangeSelector: {
        selected: 1
      },
      legend: {
        enabled: true,
        itemWidth: 150,
        width: 300
      },
      series: [
        {
          data: this.state.data[0],
          name: "弘则情绪指标",
          zIndex: 1,
          className: "plot-line-decimal-3"
        },
        {
          data: this.state.data[1],
          name: "弘则综指",
          zIndex: 0,
          yAxis: 1,
          className: "plot-line-decimal-sm-0"
        }
      ]
    };
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
          ref="chartComponent"
        />
        {console.log(`Chart 16 ${this.state.status}`)}
      </div>
    );
  }
}

export default Chart_16;
