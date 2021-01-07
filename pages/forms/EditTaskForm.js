import React, { useState, useEffect } from "react";

const EditTaskForm = (props) => {
  const [task, setTask] = useState(props.currentTask);

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateTask(task.id, task);
      }}
    >
      <label>Task Title : </label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
      /><br />
      <label>Task Discription : </label>
      <textarea
        name="discription"
        value={task.discription}
        onChange={handleInputChange}></textarea><br />
      <button>Update Task</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form >
  );
};

export default EditTaskForm;