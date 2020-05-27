import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class ChartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [
          {
            label: "Population",
            data: [30, 20, 10],
            backgroundColor: ["#ffc107", "#17a2b8", "#28a745"],
          },
        ],
        // labels: ['Complete','Planned','In Proress'],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        <Pie
          data={this.state.chartData}
          options={{
            tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                  return " "+data['datasets'][0]['data'][tooltipItem['index']] + " Tasks";
                },
                afterLabel: function(tooltipItem, data) {
                  var dataset = data['datasets'][0];
                  var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                  return '(' + percent + '%)';
                }
              },
            },
          }}
        />
      </div>
    );
  }
}

export default ChartPie;
