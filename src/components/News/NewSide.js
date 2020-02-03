import React from "react";
//Simple stateless component
const NewSide = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank">
      <div className="section">
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default NewSide;
