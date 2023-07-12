import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import "./List.css";
// import { tasks } from "../tasks";
import AddTask from "./AddTask";
import Timer from "./Timer";

const List = () => {
  const [tasksList, setTasksList] = useState([]);
  const [newTaskDeadline, setNewTaskDeadline] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [updateValue, setUpdateValue] = useState()
  const url =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        setTasksList(await response.json());
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const isDeadlineValid = (deadline) => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);
    return deadlineDate >= currentDate;
  };

  const handleAddTask = (e) => {
    e.preventDefault()

    if (!isDeadlineValid(newTaskDeadline)) {
      alert("Deadline should not be before the current day.");
      return;
    }

    const taskToAdd = {
      id: tasksList.length + 1,
      description: newTaskDescription,
      deadline: newTaskDeadline
    };

      setTasksList([...tasksList, taskToAdd]);
      setNewTaskDescription("");
      setNewTaskDeadline("");
  };

  const handleDelete = (id) => {
    const filterTasks = tasksList.filter(task => task.id !== id)
    setTasksList(filterTasks)
  };




  return (
    <>
    <h1>Todo List</h1>
    <div className="list">
      <Timer />
      <AddTask
        handleAddTask={handleAddTask}
        setNewTaskDescription={setNewTaskDescription}
        newTaskDescription={newTaskDescription}
        newTaskDeadline={newTaskDeadline}
        setNewTaskDeadline={setNewTaskDeadline}
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
              deadline={task.deadline}
              handleDelete={handleDelete}
              updateValue={updateValue}
              setUpdateValue={setUpdateValue}
              newTaskDescription={newTaskDescription}
              setNewTaskDescription={setNewTaskDescription}
            />
          );
        })}
      </ul>
      }
    </div>
    </>
  );
};

export default List;
