import React from "react";
import "./style.css";

const TextInput = (props) => {
  if (props.HandleOnChangeText) {
    return (
      <div className="form-group">
        <label htmlFor={props.id}>{props.labelText}</label>
        <input
          onChange={(e) => {
            props.HandleOnChangeText(e, props.name);
          }}
          type="text"
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label htmlFor={props.id}>{props.labelText}</label>
        <input
          type="text"
          className="form-control"
          id={props.id}
          placeholder={props.placeholder}
        />
      </div>
    );
  }
};

export default TextInput;
