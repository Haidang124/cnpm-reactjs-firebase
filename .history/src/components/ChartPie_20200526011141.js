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
         {this.props.n}
      </div>
    );
  }
}

export default ChartPie;
