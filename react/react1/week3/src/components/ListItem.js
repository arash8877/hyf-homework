import React, { useState } from "react";
import "./ListItem.css";
import Border from "./Border";

const ListItem = ({ description, id, handleDelete, deadline }) => {
  const [done, setDone] = useState(false);
  const [editing, setEditing] = useState(false);
  const [taskDescription, setTaskDescription] = useState(description);
  const handleDone = (id) => {
    setDone(!done);
  };

  const handleSaveEdit = (e) => {
    setEditing(!editing);
    if (editing) {
      setTaskDescription(taskDescription);
    }
    if (taskDescription === "") {
      setTaskDescription(description); // Skip the update if taskDescription is empty 
    }
  };

  const handleEdit = (e) => {
    setTaskDescription(e.target.value);
  };


  return (
    <Border>
    <div className="list_item">
      <li className={`${done ? "done" : ""}`}>
        {editing ? (
          <span>
            <input
              type="text"
              name="edit"
              value={taskDescription}
              onChange={(e) => handleEdit(e)}
            />
          </span>
        ) : (
          <span>{taskDescription}</span>
        )}{" "}
        | {deadline}
      </li>
      <div className="options">
        <div>
          <input type="checkbox" onClick={() => handleDone(id)} />
        </div>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <button className="edit-btn" onClick={(e) => handleSaveEdit(e)}>
          {editing ? "Update" : "Edit"}
        </button>
      </div>
    </div>
    </Border>

  );
};

export default ListItem;
