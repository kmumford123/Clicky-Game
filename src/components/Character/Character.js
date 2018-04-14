import React from "react";
import "./Character.css";

const Character = props => (

  
  <div>
    <main className="container">
      <div className="card">
      {/* <div role="img" aria-label="click item" style="background-image: url(&quot;/assets/images/morty.png&quot;);" className="click-item"></div> */}
      <div role="img" aria-label="click item" className="click-item" style={{backgroundImage: `url(${props.image})`}}></div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
        <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
    </span>
      </div>
    </main>
  </div>
);

export default Character;
