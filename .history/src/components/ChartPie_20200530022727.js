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
            // data: [this.props.plannedTask, this.props.completeTask, this.props.processTask],
            data: [1, 1, 1],
            backgroundColor: ["#ffc107", "#17a2b8", "#28a745"],
          },
        ],
      },
      chartDataBar:{}
    };
   
  }
  render() {
    return (
      <div className="chart">
         {this.props.name =="pie" ? (<Pie
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
                  var dataset1 = data.datasets[tooltipItem.datasetIndex];
                  var meta = dataset1._meta[Object.keys(dataset1._meta)[0]];
                  var total = meta.total;
                     var percent = Math.round(dataset/total * 100)
                  return '(' + percent + '%)';
                }
              },
            },
          }}
        />) : (<Bar
          data={{
            labels: [
              "Hải Đăng",
              "Nguyễn Hoàng",
              "Tiến Đạt",
              "Quang Tài",
              "Hữu Lộc"
            ],
            datasets: [
              {
                label: "Number of File",
                backgroundColor: [
                  "#3e95cd",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850"
                ],
                data: [40, 25, 29, 20, 15]
              }
            ]
          }}
          width={640}
          height={242}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            legend: { display: false },
            title: {
              display: true,
              text: "Sô lượng File Upload của mỗi thành viên"
            }
          }}
        />)}
      </div>
    );
  }
}

export default ChartPie;
