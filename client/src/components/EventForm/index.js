import React, { Component } from 'react';
import "./style.css";
import Col from '../Col';
import Row from '../Row';
import Axios from 'axios';
import API from "../../utils/API"
import DateTimePicker from 'react-datetime-picker';
class EventForm extends Component {
    state = {
        communites: [],
        event: {},
        eventName:"",
        description:""
    };

    constructor(props) {
        super(props);
        this.changeCommunity = this.changeCommunity.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeDateTime = this.changeDateTime.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
    }
    componentDidMount(){
        API.AllCommunity().then(res => {
            this.state.event.dateAndTime = new Date();
            this.state.communites = res.data;
            this.setState({...this.state});
        })
    }
    changeCommunity(event){
        //console.log(this.state.event);
        this.state.event.communityID = this.state.communites[event.target.value-1]._id;
        console.log(this.state.communites[event.target.value-1]);
        this.setState({...this.state})
    }
    changeName(event){
        console.log(event.target.value);
        this.state.event.name=event.target.value;
        this.setState({...this.state})
    }
    changeDateTime = (date) => {
        console.log(date);
        console.log(this.state.event);
        this.state.event.dateAndTime = date
        this.setState({...this.state, event:{...this.state.event, dateAndTime:date}  })
    }
    changeDescription(event){
        this.state.event.details=event.target.value;
        this.setState({ ...this.state })
    }
    
    handleSubmit(event, communityID){
        event.preventDefault();
        //console.log(`/api/event/${this.props.match.params.id}`);
        //console.log("this.state.event.communityID "+this.state.event.communityID);

        const body = {communityID:communityID}
        console.log(body);
        Axios({
            method: 'post',     //put
            url: `/api/event/`,
            data: {...this.state.event}
          }).then(data=> {
            //for some reason a find one and update is taking a long time to run so this needs to be done to get the data reloaded so let's wait half a second and reload.
            setTimeout(()=>{this.setState({...this.state})},500)})
    }

 render() {
     console.log(this.state.event);
     return (
         <form className="wrapper mx-auto align-middle">
                <div id="addEventTitle">
                    <h1>ADD EVENT</h1>
                </div>
            <Row>
                <Col>
                <label className="" htmlFor="inputGroupSelect01">Community</label>

                <div className="input-group mb-3" label="Community">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Community</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={event => {this.changeCommunity(event)}}>
                    <option selected disabled>Choose...</option>
                    {this.state.communites.map((community, index)=>{
                        return <option key={index+1} value={index+1}>{community.name}</option>
                    })}
                    
                </select>
                </div>
                <label>Date And Time</label>
                <div></div>
                <DateTimePicker 
                    onChange={this.changeDateTime}
                    value={this.state.event.dateAndTime}
                />
                </Col>
                <Col>
                    <div className="form-group">
                        <label>Event Name</label>
                        <input type="text" className="form-control"  onChange={(event) => this.changeName(event)} value={this.state.event.name}/>
                    </div>                  
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <label className="description" htmlFor="description">Description</label>
                    <textarea className="descriptionInput"  onChange={(event)=> this.changeDescription(event)} value={this.state.event.details}></textarea>
                </Col>
            </Row>
            <button id="submitResident" className="btn btn-info custom-color" onClick={(event)=> this.handleSubmit(event)}>Create Event</button>
        </form>
     )
  }
}

export default EventForm;