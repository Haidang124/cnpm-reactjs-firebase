import React, { Component } from "react";
import "./../css/anlysis.css";
import "./../css/nav.css";
import Menu from "./Menu";
import Nav from "./Nav";
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ProjectAnalysis extends Component {
  render() {
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Website Traffic Sources"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
  // render() {
  //   return (
  //     <div className="project-anlysis">
  //       <Menu />
  //       <div className="my-navbar">
  //         <Nav />
  //         <div className="row">
  //         <div class="col-xl-3 col-md-6 mb-4">
  //             <div class="card border-left-primary shadow h-100 py-2">
  //               <div class="card-body-task">
  //                 <div class="row no-gutters align-items-center">
  //                   <div class="col mr-2">
  //                     <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
  //                       Files Upload
  //                     </div>
  //                     <div class="h5 mb-0 font-weight-bold text-gray-800">
  //                       30 File
  //                     </div>
  //                   </div>
  //                   <div class="col-auto">
  //                     <i class="fas fa-file fa-2x text-gray-300 ml-5 icon-task"></i>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="col-xl-3 col-md-6 mb-4">
  //             <div class="card border-left-success shadow h-100 py-2">
  //               <div class="card-body-task">
  //                 <div class="row no-gutters align-items-center">
  //                   <div class="col mr-2">
  //                     <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
  //                      Number Members
  //                     </div>
  //                     <div class="h5 mb-0 font-weight-bold text-gray-800">
  //                       5 Members
  //                     </div>
  //                   </div>
  //                   <div class="col-auto">
  //                     <i class="fas fa-users fa-2x text-gray-300 ml-4 icon-task"></i>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="col-xl-3 col-md-6 mb-4">
  //             <div class="card border-left-info shadow h-100 py-2">
  //               <div class="card-body-task">
  //                 <div class="row no-gutters align-items-center">
  //                   <div class="col mr-2">
  //                     <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
  //                       Tasks
  //                     </div>
  //                     <div class="h5 mb-0 font-weight-bold text-gray-800">
  //                       30/50
  //                     </div>
  //                   </div>
  //                   <div class="col-auto">
  //                   <i class="fa fa-list fa-2x text-gray-300 ml-5 icon-task" ></i>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //            <div class="col-xl-3 col-md-6 mb-4">
  //             <div class="card border-left-warning shadow h-100 py-2">
  //               <div class="card-body-task">
  //                 <div class="row no-gutters align-items-center">
  //                   <div class="col mr-2">
  //                     <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
  //                     Over The Deadline
  //                     </div>
  //                     <div class="h5 mb-0 font-weight-bold text-gray-800">
  //                       2
  //                     </div>
  //                   </div>
  //                   <div class="col-auto">
  //                     <i class="fas fa-comments fa-2x text-gray-300 ml-5 icon-task"></i>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="row">
  //           <div class="col-xl-8 col-lg-7">
  //             <div class="card shadow mb-4">
  //               <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
  //                 <h6 class="m-0 font-weight-bold text-primary">
  //                   Earnings Overview
  //                 </h6>
  //                 <div class="dropdown no-arrow">
  //                   <a
  //                     class="dropdown-toggle"
  //                     href="#"
  //                     role="button"
  //                     id="dropdownMenuLink"
  //                     data-toggle="dropdown"
  //                     aria-haspopup="true"
  //                     aria-expanded="false"
  //                   >
  //                     <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
  //                   </a>
  //                   <div
  //                     class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
  //                     aria-labelledby="dropdownMenuLink"
  //                   >
  //                     <div class="dropdown-header">Dropdown Header:</div>
  //                     <a class="dropdown-item" href="#">
  //                       Action
  //                     </a>
  //                     <a class="dropdown-item" href="#">
  //                       Another action
  //                     </a>
  //                     <div class="dropdown-divider"></div>
  //                     <a class="dropdown-item" href="#">
  //                       Something else here
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div class="card-body-task">
  //                 <div class="chart-area">
  //                   <canvas id="myAreaChart"></canvas>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div class="col-xl-4 col-lg-5">
  //             <div class="card shadow mb-4">
  //               <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
  //                 <h6 class="m-0 font-weight-bold text-primary">
  //                   Revenue Sources
  //                 </h6>
  //                 <div class="dropdown no-arrow">
  //                   <a
  //                     class="dropdown-toggle"
  //                     href="#"
  //                     role="button"
  //                     id="dropdownMenuLink"
  //                     data-toggle="dropdown"
  //                     aria-haspopup="true"
  //                     aria-expanded="false"
  //                   >
  //                     <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
  //                   </a>
  //                   <div
  //                     class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
  //                     aria-labelledby="dropdownMenuLink"
  //                   >
  //                     <div class="dropdown-header">Dropdown Header:</div>
  //                     <a class="dropdown-item" href="#">
  //                       Action
  //                     </a>
  //                     <a class="dropdown-item" href="#">
  //                       Another action
  //                     </a>
  //                     <div class="dropdown-divider"></div>
  //                     <a class="dropdown-item" href="#">
  //                       Something else here
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>

  //               <div class="card-body">
  //                 <div class="chart-pie pt-4 pb-2">
  //                   <canvas id="myPieChart"></canvas>
  //                 </div>
  //                 <div class="mt-4 text-center small">
  //                   <span class="mr-2">
  //                     <i class="fas fa-circle text-warning"></i> Planned
  //                   </span>
  //                   <span class="mr-2">
  //                     <i class="fas fa-circle text-success"></i> Complete
  //                   </span>
  //                   <span class="mr-2">
  //                     <i class="fas fa-circle text-info"></i> Planned
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default ProjectAnalysis;
