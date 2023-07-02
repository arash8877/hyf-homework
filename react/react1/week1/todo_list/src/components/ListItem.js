import React from "react";
import "./ListItem.css";

const ListItem = ({ todo, time, id }) => {
  return (
      <li>
          {id}- {todo}: {time}
      </li>
  );
};

export default ListItem;
