import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class AllEvents extends Component {
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
        <div className="alleventform">
          <h1>ALL EVENTS</h1>
        </div>

        <table className="table table-striped table-dark tableContent">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Event Name</th>
              <th scope="col">Details</th>
              <th scope="col">Community Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((event, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.name}</td>
                  <td>{event.details}</td>
                  <td>{event.communityID.name}</td>
                  <td>
                    {" "}
                    <a href={`/events/${event._id}`}>
                      <button
                        id="editEvent"
                        className="btn btn-info custom-color editEvent"
                      >
                        Edit Event
                      </button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllEvents;
