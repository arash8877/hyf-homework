import "./AddTask.css";

const AddTask = ({ handleAddTask, setNewTaskDescription, newTaskDescription,setNewTaskDeadline, newTaskDeadline }) => {
  return (
    <form onSubmit={handleAddTask}>
      <div className="text_date_inputs">
        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => setNewTaskDescription(e.target.value)}
          required
          value={newTaskDescription}
        />
        <input 
        type="date" 
        value={newTaskDeadline}
        onChange={(e) => setNewTaskDeadline(e.target.value)}
        required />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
