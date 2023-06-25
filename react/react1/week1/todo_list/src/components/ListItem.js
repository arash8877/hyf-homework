import React from "react";
import "./ListItem.css";

const ListItem = ({ todo, time, id }) => {
  return (
    <div>
      <li>
        <h3>
          {id}: {todo}: {time}
        </h3>
      </li>
    </div>
  );
};

export default ListItem;
