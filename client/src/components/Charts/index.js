import React, { Component } from "react";
import { Pie, Bar } from "react-chartjs-2";

class Chart extends Component {
    // componentDidMount() {
    //     this.renderChart();
       
    //   }

    renderChart(chartType, data) {
        console.log("data inside the chart",data)
        switch(chartType) {
            case "pie": 
                return <Pie data={data} />;
            case "bar": 
                return <Bar data={data}/>;
            default: 
                return <div></div>;

        }
    }

    render() {
        return this.renderChart(this.props.type, this.props.data);
        }
    }
    
    export default Chart;
        // myChart = new Chart(ctx, {
        //     type: 'pie',
        //     data: {
        //         labels: ['Red', 'Blue', 'Green', 'Purple'],
        //         datasets: [{
        //             label: 'Age Bracket',
        //             data: ["Seniors", "Parents", "Adults", "Youth"],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        // })