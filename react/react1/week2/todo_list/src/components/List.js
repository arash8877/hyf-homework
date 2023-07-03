import React, { useState } from "react";
import ListItem from "./ListItem";
import "./List.css";
import { tasks } from "../tasks";
import AddTask from "./AddTask";
import Timer from "./Timer";

const List = () => {

  const [newTask, setNewTask] = useState("");
  const [tasksList, setTasksList] = useState(tasks)
  

  const handleAddTask = (e) => {
    e.preventDefault()
    const taskToAdd = {id: tasksList.length + 1, 
      description: newTask};
      setTasksList([...tasksList, taskToAdd])
      setNewTask("")
  };

  const handleDelete = (id) => {
    const filterTasks = tasksList.filter(task => task.id !== id)
    setTasksList(filterTasks)
  }

  return (
    <div className="list">
      <Timer/>
      <AddTask 
      handleAddTask={handleAddTask} 
      setNewTask={setNewTask}
      newTask={newTask}
      />
      {
        tasksList.length === 0 
        ? <h3>There is no task to do!</h3>
        :   <ul>
        {tasksList.map((task) => {
          return (
            <ListItem
              key={task.id}
              id={task.id}
              task={task}
              description={task.description}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      }
    
    </div>
  );
};

export default List;
