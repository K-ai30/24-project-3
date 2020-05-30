import React, { Component } from "react";
import "./style.css";
import Axios from "axios";
import API from "../../utils/API";

class UpdateAttendance extends Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  state = {
    event: {},
    residents: [],
  };
    componentDidMount(){
      this.getEvent(this.props.match.params.id).then(res=>{
          this.state.event = res.data;
          API.AllUsers().then(residents => {
              let commID = this.state.event.communityID._id;
              let arr = residents.data.filter(resident => {
                return commID === resident.communityID._id;
              });
              this.setState({...this.state,residents:arr});
          })
      })
  }
  getEvent(eventId){
      return Axios.get(`/api/event/${eventId}`)
  }

  handleCheckbox(checkbox,resId){
    let newEvent = this.state.event;
    if(checkbox.target.checked){
      newEvent.usersAttended.push(resId);
    }
    else{
      let index = newEvent.usersAttended.indexOf(resId);
      if(index >-1){
        newEvent.usersAttended.splice(index,1)
      }

    }
    Axios.put(`/api/event/${this.props.match.params.id}`,{usersAttended: newEvent.usersAttended } ).then(res =>{
      this.setState({...this.state, event: newEvent})
    })
    
    

  }
  render() {
    return (
      <div className="container">
        <div className="updateAttendance">
          <h1>UPDATE ATTENDANCE</h1>
          <h4>{this.state.event.name} - <span>{this.state.event.communityID ? this.state.event.communityID.name : undefined}</span></h4>
          
        </div>
        <table className="table table-striped table-dark tableContent">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Attended</th>
            </tr>
          </thead>
          <tbody>
            {this.state.residents.map((resident, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{resident.first}</td>
                  <td>{resident.last}</td>
                  <td><input type="checkbox" onChange={(event) => {this.handleCheckbox(event,resident._id)}}
                  checked={this.state.event.usersAttended !== undefined ? this.state.event.usersAttended.indexOf(resident._id)!==-1 : false}>
                    </input></td>
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
