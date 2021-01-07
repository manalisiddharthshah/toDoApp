import React, { useState } from "react";

const AddTaskForm = (props) => {
  const initialFormState = { id: null, title: "", discription: "" };
  const [task, setTask] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!task.title || !task.discription) return;

        props.addTask(task);
        setTask(initialFormState);
      }}
    >
      <label>Task Title : </label>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleInputChange}
      /><br />
      <label>Task discription : </label>
      <textarea
        name="discription"
        value={task.discription}
        onChange={handleInputChange}
      /><br />
      <button>Add New Task</button>
    </form>
  );
};

export default AddTaskForm;
