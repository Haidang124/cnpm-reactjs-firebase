import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class ChartPie extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          datasets:[
              {
                  label:'Population',
                  data:[
                      30,
                      20,
                      50
                  ],
                  backgroundColor:[
                    '#ffc107',
                    '#17a2b8',
                    '#28a745',
                  ]
                  
              }
          ],
          // labels: ['Complete','Planned','In Proress'],
      }
    }
  }

//   static defaultProps = {
//     displayTitle:true,
//     displayLegend: true,
//     legendPosition:'right',
//     location:'City'
//   }

  render(){
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          
          options={{
            tooltips: {
              callbacks: {
                  labelColor: function(tooltipItem, chart) {
                      return {
                          borderColor: 'rgb(255, 0, 0)',
                          backgroundColor: 'rgb(255, 0, 0)'
                      };
                  },
                  labelTextColor: function(tooltipItem, chart) {
                      return '#543453';
                  }
              }
          }}
          
        />
      </div>
    )
  }
}

export default ChartPie
