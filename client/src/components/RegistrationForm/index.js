import React, { Component } from "react";
import "./style.css";
import Col from "../Col";
import Row from "../Row";
import TextInput from "../TextInput";
// import GraphBanner from '../BannerImage';
import API from "../../utils/API";

class RegistrationForm extends Component {
  state = {
    userInfo: {
      communityID: "",
      first: "",
      last: "",
      gender: "",
      phone: "",
      ageBracket: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      dob: "",
      email: "",
      password: "",
      zip: "",
      isAdmin: false,
    },
    community: [],
  };
  componentDidMount() {
    this.GetAllCommunity();
  }
  GetAllCommunity() {
    API.AllCommunity().then((res) => {
      let allCommunity = res.data.map((community) => {
        return community;
      });
      this.setState({ community: allCommunity });
    });
  }
  HandleOnChangeForm(e, name) {
    e.preventDefault();
    let newUserObj = Object.assign({}, this.state.userInfo); // creating copy of state variable jasper
    newUserObj[e.target.name] = e.target.value;
    this.setState({ userInfo: newUserObj });
  }

  HandleOnChangeText = (e, name) => {
    let newUserObj = Object.assign({}, this.state.userInfo); // creating copy of state variable jasper
    newUserObj[name] = e.target.value;
    this.setState({ userInfo: newUserObj });
  };

  // Sening New User information to the database
  HandleSubmitForm(e) {
    e.preventDefault();
    API.CreateNewUser(this.state.userInfo)
      .then((res) => {
        console.log("-->>> New User Created Successfully ! <<<--");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log("STATE",this.state);
    return (
      <form className="wrapper mx-auto align-middle">
        <div className="registerTitle">
          <h1 className="eventTitle">User Registration</h1>
        </div>
        <Row>
          <Col>
            <div className="input-group mb-3" labeltext="Community">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Community
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                name="communityID"
                onChange={(e) => {
                  this.HandleOnChangeForm(e);
                }}
              >
                <option selected disabled>
                  Choose...
                </option>
                {this.state.community.map((community, index) => {
                  return (
                    <option key={index} value={community._id}>
                      {community.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group mb-3" labeltext="ageBracket">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  htmlFor="inputGroupSelect01"
                >
                  Age Bracket
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                name="ageBracket"
                onChange={(e) => {
                  this.HandleOnChangeForm(e);
                }}
              >
                <option defaultValue>Choose...</option>
                <option name="ageBracket" value="senior">
                  Senior
                </option>
                <option value="parent">Parent</option>
                <option value="adult">Adult</option>
                <option value="youth">Youth</option>
              </select>
            </div>
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="first-name"
              placeholder="Jane"
              name="first"
              labeltext="First Name"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="phone"
              placeholder="(404) 300-5000"
              name="phone"
              labeltext="Phone Number"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="addressOne"
              placeholder="123 Some Street"
              name="address1"
              labeltext="Address 1"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="city"
              placeholder="Atlanta"
              labeltext="City"
              name="city"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="state"
              placeholder="Georgia"
              labeltext="State"
              name="state"
            />
          </Col>
          <Col>
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="dateOfBirth"
              type="date"
              placeholder="05-01-1959"
              name="dob"
              labeltext="Date of Birth"
            />

            <div className="input-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="exampleRadios1"
                  value="male"
                  onChange={(e) => {
                    this.HandleOnChangeForm(e);
                  }}
                />
                <label className="form-check-label" htmlFor="gender">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="exampleRadios1"
                  value="female"
                  onChange={(e) => {
                    this.HandleOnChangeForm(e);
                  }}
                />
                <label className="form-check-label" htmlFor="gender">
                  Female
                </label>
              </div>
            </div>

            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="last-name"
              placeholder="Smith"
              name="last"
              labeltext="Last Name"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="emailTwo"
              placeholder="Jane_Smith@test.com"
              name="email"
              labeltext="Email"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="password"
              placeholder="******"
              name="password"
              labeltext="Password"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="addressTwo"
              placeholder="Apt 100"
              name="address2"
              labeltext="address 2"
            />
            <TextInput
              HandleOnChangeText={this.HandleOnChangeText}
              id="zip"
              placeholder="30310"
              type="number"
              name="zip"
              labeltext="Zip"
            />
          </Col>
        </Row>
        <button
          id="submitResident"
          className="btn btn-info custom-color"
          onClick={(e) => this.HandleSubmitForm(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
