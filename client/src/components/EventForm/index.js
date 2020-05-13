import React, { Component } from 'react';
import "./style.css";
import Col from '../Col';
import Row from '../Row';
import TextInput from "../TextInput";
// import GraphBanner from '../BannerImage';

class EventForm extends Component {
 state = {
     title: null,
     date: '',
 };

 render() {
     return (
         <form className="wrapper mx-auto align-middle">
            <Row>
                <Col>
                <label className="" HTMLfor="inputGroupSelect01">Community</label>

                <div className="input-group mb-3" labelText="Community">
                <div className="input-group-prepend">
                    <label className="input-group-text" HTMLfor="inputGroupSelect01">Community</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">Community 1</option>
                    <option value="2">Community 2</option>
                    <option value="3">Community 3</option>
                    <option value="4">Community 4</option>
                    <option value="5">Community 5</option>
                </select>
                </div>
                    <TextInput id="event" placeholder="1:PM" labelText="Event Time" />
                </Col>
                <Col>
                    <TextInput id="eventName" placeholder="Senior Yoga Class" labelText="Even Name"/>
                    <TextInput id="evendate" placeholder="05/02/2020" labelText="Event Date"/>
                  
                    
                </Col>
                
            </Row>
            <Row>
            <Col>
            <label className="description" HTMLfor="description">Description</label>
            <textarea className="descriptionInput" placeholder="Low-impact yoga for senior"></textarea>
                </Col>
            </Row>
            <button id="submitResident" className="btn btn-info custom-color">+ Add Event</button>
        </form>
     )
  }
}

export default EventForm;