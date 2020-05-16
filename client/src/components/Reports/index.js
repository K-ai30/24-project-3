import React, { Component } from "react";
import "./style.css";
import Chart from "../Charts";
import API from "../../utils/API";

class ReportPage extends Component {
  state = {
    chartData: {
      labels: [],
      datasets: [
        {
          label: [],
          data: [],
          backgroundColor: [
            "#36A2EB",
            "#FF6384",
            "#FFCE56",
            "#6610f2",
            "#fd7e14",
            "#28a745",
            "#6f42c1",
          ],
        },
      ],
    },
    formData: [],
  };

  componentDidMount() {
    // this.GetChartByID();
    // this.GetAllUsers();
    this.GetDataForInputForm();
  }

  //getting Community Id from User Table
  GetDataForInputForm() {
    API.AllCommunity()
      .then((res) => {
        const newFormData = res.data.map(function (community) {
          return {
            community: {
              name: community.name,
              id: community._id,
            },
          };
        });

        this.setState({ formData: newFormData });
      })
      .catch((err) => console.log("This is the ERR", err));
  }

  GetChartByID = (id) => {
    API.Chart(id)
      .then((res) => {
        // console.log('This is Chart result from Database', res.data);
        // console.log('This is DATA from Database:', res.data.data);
        // this.setState(
        //   {chartData: {
        //     labels: [res.data.category],
        //     datasets: [
        //       {
        //         label: res.data.category,
        //         data: res.data.data,
        //         backgroundColor:this.state.chartData.datasets[0].backgroundColor
        //         // ["#FF6384", "#36A2EB", "#FFCE56", "#6610f2", "#fd7e14", "#28a745", "#6f42c1"]
        //       }
        //     ]
        //   }
        //   });
      })
      .catch((err) => console.log("This is the ERR", err));
  };

  RenderChartByAgeBracket(res, communityID) {
    let seniorCount = 0;
    let youthCount = 0;
    let adultCount = 0;
    let parentCount = 0;
    res.data.forEach((user) => {
      if (user.communityID._id === communityID) {
        if (user.ageBracket === "Senior") {
          seniorCount += 1;
        } else if (user.ageBracket === "Adult") {
          adultCount += 1;
        } else if (user.ageBracket === "Youth") {
          youthCount += 1;
        } else {
          parentCount += 1;
        }
      }
    });
    this.setState({
      chartData: {
        labels: ["Senior", "Youth", "Adult", "Parent"],
        datasets: [
          {
            label: ["AgeBracket"],
            data: [seniorCount, youthCount, adultCount, parentCount],
            backgroundColor: this.state.chartData.datasets[0].backgroundColor,
          },
        ],
      },
    });
  }

  GetChartByGender(res, communityID) {
    let Male = 0;
    let Female = 0;
    res.data.forEach((user) => {
      if (user.communityID._id === communityID) {
        if (user.gender === "Male") {
          Male += 1;
        } else if (user.gender === "Female") {
          Female += 1;
        }
      }
    });
    this.setState({
      chartData: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: ["Gender"],
            data: [Male, Female],
            backgroundColor: this.state.chartData.datasets[0].backgroundColor,
          },
        ],
      },
    });
  }

  // getting all users from database
  GetAllUsers = (communityID, category) => {
    API.AllUsers()
      .then((res) => {
        if (category === "ageBracket") {
          this.RenderChartByAgeBracket(res, communityID);
        } else if (category === "gender") {
          this.GetChartByGender(res, communityID);
        }
      })
      .catch((err) => console.log("This is the ERR", err));
  };

  HandleReportBtn(e) {
    e.preventDefault();
    let communityID = e.target[0].value;
    let category = e.target[1].value;

    this.GetAllUsers(communityID, category);
    console.log("STATE", this.state);
  }

  render() {
    return (
      <form
        onSubmit={(e) => this.HandleReportBtn(e)}
        className="wrapper mx-auto align-middle"
      >
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Community</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>All Communities</option>
            {this.state.formData.map((community, index) => {
              return (
                <option
                  key={index}
                  name={community.community.name}
                  value={community.community.id}
                >
                  {community.community.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option
              selected
              disabled
              key="1"
              name="category"
              value="ageBracket"
            >
              Choose ...
            </option>
            <option key="2" name="category" value="ageBracket">
              AgeBracket
            </option>
            <option key="3" name="gender" value="gender">
              Gender
            </option>
          </select>
        </div>
        <button className="generate">Generate Report</button>
        <button className="save">Save Data</button>
        <button className="download">Download</button>

        <div className="wrapperTwo">
          <h2>Report</h2>
          <Chart
            type="pie"
            label={this.state.chartData.datasets.label}
            data={this.state.chartData}
          />
          {/* <canvas id="myChart" width="300" height="300"> */}
          {/* <Chart/> */}
          {/* </canvas> */}
        </div>
      </form>
    );
  }
}

export default ReportPage;

// how to get our data into this chart
// make a call to database to get info we need
// make data look like out testData
