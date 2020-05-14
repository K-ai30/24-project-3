import React from "react";
import './style.css';

const TextInput = props => {
<<<<<<< HEAD
   
    if (props.HandleOnChangeText) {
        return (
            <div className="form-group">
                <label htmlFor={props.id}>{props.labelText}</label>
                <input onChange={(e) => {props.HandleOnChangeText(e, props.name)}} type="text" className="form-control" id={props.id} placeholder={props.placeholder}/>
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <label htmlFor={props.id}>{props.labelText}</label>
                <input type="text" className="form-control" id={props.id} placeholder={props.placeholder}/>
            </div>
        )   
    }
    
   
=======
    return (

        <div className="form-group">
            <label htmlFor={props.id}>{props.labelText}</label>
            <input type="text" className="form-control" id={props.id} placeholder={props.placeholder}/>
        </div>
    )
>>>>>>> 7dd0ce13a11f6491fb361a97369d39e2c84a97a2
}

export default TextInput;