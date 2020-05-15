import React, { Component } from 'react';
import "./style.css";

export default class ChartHistory extends Component {
    render () {
        return (
            <div className="wrapper mx-auto align-middle">
                <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Category</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    
                    <option selected disabled key="1" name= "category" value="ageBracket">Choose ...</option>
                    <option key="2" name= "category" value="ageBracket">AgeBracket</option>
                    <option key="3" name= "gender" value="gender">Gender</option>
                    
                    
                </select>
                </div>
                    <button className="generate" >Generate</button>
                <div className="wrapperThree">Chart History
                </div>
            </div>
        )
    }
}