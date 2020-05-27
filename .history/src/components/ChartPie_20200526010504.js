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
                  // var dataset =data['datasets'][0]['data'][tooltipItem['index']];
                  // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                  // var percent = Math.round(dataset/(30+20+10) * 100)
                  // return '(' + percent + '%)';
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                  var total = meta.total;
                  alert(total)
                  return
                  // var currentValue = dataset.data[tooltipItem.index];
                  // var percentage = parseFloat((currentValue/total*100).toFixed(1));
                  // return currentValue + ' (' + percentage + '%)';
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
