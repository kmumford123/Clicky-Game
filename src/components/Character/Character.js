import React from "react";
import "./Character.css";

const Character = props => (
  <div>
      <div
        aria-label="click item" 
        className="click-item remove" 
        onClick={props.onClick} 
        role="img" 
        // clicked={props.clicked}
        style={{backgroundImage: `url(${props.image})`}}>
      </div>
  </div>
);

export default Character;
