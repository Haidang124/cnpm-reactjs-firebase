import React, { Component } from "react";
import {Bar,Line,Pie} from 'react-chartjs-2'
class ChartPie extends Component {
    render() {
        return (
            <div className="chart">
                <Bar data={da} />
            </div>
        )
    }
}

export default ChartPie
