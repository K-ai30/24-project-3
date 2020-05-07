import React, { Component } from 'react';
import './style.css';
import Chart from '../Charts';

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
                    <canvas id="myChart" width="300" height="300">
                        {/* <Chart/> */}
                    </canvas>
                </div>
            </form>
        )
    }
}

export default ReportPage;