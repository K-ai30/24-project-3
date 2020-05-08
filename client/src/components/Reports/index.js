import React, { Component } from 'react';
import './style.css';
import Chart from '../Charts';

const testData = {
    labels: [
      "Red",
      "Green",
      "Yellow"
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      }
    ]
}
// write download pdf code into class component

class ReportPage extends Component {
    render () {
        return(
            <form className="wrapper mx-auto align-middle"> 
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Community</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>All Communities</option>
                        <option>Community 1</option>
                        <option>Community 2</option>
                        <option>Community 3</option>
                        <option>Community 4</option>
                        <option>Community 5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Category</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Age Bracket</option>
                        <option>Gender</option>
                        <option>Community Size</option>
                        <option>Participation</option>
                    </select>
                </div>
                <button className="generate">Generate Report</button>

                <div className="wrapperTwo">
                    <h2>Report</h2>
                    <Chart type="pie" data={testData}/>
                    {/* <canvas id="myChart" width="300" height="300"> */}
                        {/* <Chart/> */}
                    {/* </canvas> */}
                </div>
            </form>
        )
    }
}

export default ReportPage;

// how to get our data into this chart
// make a call to database to get info we need
// make data look like out testData
