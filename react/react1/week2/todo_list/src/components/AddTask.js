import React, { useEffect } from "react";
import "./AddTask.css";

const AddTask = ({ handleAddTask, setNewTask ,newTask}) => {
  
    

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add a task"
        onChange={(e) => setNewTask(e.target.value)}
        required
        value={newTask}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
