import React, { Component } from 'react';
import "./style.css";
import API from '../../utils/API';
import Axios from 'axios';


class AllCommunities extends Component {

    constructor(props) {
        super(props);
        this.handleChangeCommunityNameText = this.handleChangeCommunityNameText.bind(this);
    }
 state = {
    results:[],
    communityName:"",
    newComm : ""
 };

 componentDidMount() {
    this.GetAllCommunities();
  }

  GetAllCommunities = ()=> {
    API.AllCommunity()
      .then((res)=>{
        console.log('This is result from Database',res.data);
         this.setState({...this.state, results: res.data })
         console.log(this.state);
      })
      .catch(err => console.log("This is the ERR",err));
    
  };
updateCommunityName(id,newName){
    console.log(id);
    console.log(newName);
    Axios.put(`/api/update_community/${id}`, {name:newName})
}
addNewCommunity(newName){
    Axios.post(`/api/community/`, {name:newName}).then(()=>{
        window.location.reload()
    })
}
handleChangeText(event){
    this.setState({...this.state, newComm:event.target.value})
}
handleChangeCommunityNameText(event, index){
    this.state.results[index].name= event.target.value

    this.setState({...this.state});
}
 render(newItem) {
     console.log(this.state.results);
     return (
         <div className="container">
        <div className="formtitle">
          <h1>ALL COMMUNITIES</h1>
        </div>
        <table id="allCommunityTable" className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Community Name</th>
                </tr>
            </thead>
            
            <tbody>
                {this.state.results.map(
                    (community,index)=>{
                    return(
                        <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td><input type="text" onChange={(event)=>this.handleChangeCommunityNameText(event, index)} value={this.state.results[index].name}></input></td>
                            <td><button onClick={() => this.updateCommunityName(community._id, this.state.results[index].name)}>Save</button></td>
                        </tr>
                    )}
                )}
                <tr key={this.state.results.length +1}>
                    <th scope="row">{this.state.results.length +1}</th>
                    <td><input type="text" id="newItemField" onChange={(event)=> this.handleChangeText(event)} value={this.state.newComm}></input></td>
                    <td><button onClick={() => this.addNewCommunity( this.state.newComm)}>Add</button></td>
                </tr>
            </tbody>
        </table>
        </div>
         
     )
  }
}

export default AllCommunities;