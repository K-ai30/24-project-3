import React, { Component } from "react";
import "./style.css";

import API from "../../utils/API";

class UpdateAttendance extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    this.GetAllEvents();
  }

  GetAllEvents = () => {
    API.Events()
      .then((res) => {
        console.log("This is result from Database", res.data);
        this.setState({ results: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log("This is the ERR", err));
  };

  render() {
    return (
      <div className="container">
        <div className="updateAttendance">
          <h1>Update Attendance</h1>
        </div>
        <table className="table table-striped table-dark tableContent">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Event Name</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Attended</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((event, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.name}</td>
                  <td>{event.name}</td>
                  <td>{event.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UpdateAttendance;
