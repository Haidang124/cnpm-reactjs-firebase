import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class ChartPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartDataPie: {
        datasets: [
          {
            label: "Population",
            data: [30, 20, 140],
            backgroundColor: ["#ffc107", "#17a2b8", "#28a745"],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartDataPie}
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
                  var dataset =data['datasets'][0]['data'][tooltipItem['index']];
                  // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
               
                  var dataset1 = data.datasets[tooltipItem.datasetIndex];
                  var meta = dataset1._meta[Object.keys(dataset1._meta)[0]];
                  var total = meta.total;
                  // alert(total)
                     var percent = Math.round(dataset/total * 100)
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
