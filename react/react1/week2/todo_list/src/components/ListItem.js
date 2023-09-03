import React, { useState } from "react";
import "./ListItem.css";

const ListItem = ({ description, id, handleDelete,newTask}) => {
  const [done, setDone] = useState(false);

  const handleDone = (id) => {
    setDone(!done);
  };

  return (
    <div className="list_item">
      <li className={`${done ? "done" : ""}`}>{description}</li>
      <div className="options">
        <div>
          <input type="checkbox" onClick={() => handleDone(id)} />
        </div>
        <button className="delete-btn" onClick={() =>handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;
