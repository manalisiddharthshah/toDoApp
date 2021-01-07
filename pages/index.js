import React, { useState, Fragment, useEffect } from "react";
import AddTaskForm from "./forms/AddTaskForm";
import EditTaskForm from "./forms/EditTaskForm";
import TaskTable from "./tables/TaskTable";


export default function Home() {
  // Data
  const initialFormState = { id: null, title: "", discription: "" };
  // Setting state
  const [tasks, setTasks] = useState([]);

  const [currentTask, setCurrentTask] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(tasks));
  }, [tasks]);

  // CRUD operations
  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setEditing(false);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const editRow = (task) => {
    setEditing(true);
    setCurrentTask({ id: task.id, title: task.title, discription: task.discription });
  };

  return (
    <div className="container">
      <h1>To Do App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Task</h2>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add Task</h2>
                <AddTaskForm addTask={addTask} />
              </Fragment>
            )}
        </div>
        <div className="flex-large">
          <h2>View Tasks</h2>
          <TaskTable tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};
