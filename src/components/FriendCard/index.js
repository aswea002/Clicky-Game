import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}onClick={() => props.clickCharacter(props.id)} />
      </div>
      <div className="content">
        <ul>
          <li>
            {/* <strong>Name:</strong> {props.name} */}
          </li>
          <li>
            {/* <strong>Occupation:</strong> {props.occupation} */}
          </li>
          <li>
            {/* <strong>Location:</strong> {props.location} */}
          </li>
        </ul>
      </div>
      <span onClick={() => props.clickCharacter(props.id)} className="remove">
        {/* example */}
      </span>
    </div>
  );
}

export default FriendCard;
