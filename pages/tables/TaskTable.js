import React from "react";

const TaskTable = (props) => (
  <table border="1">
    <thead>
      <tr>
        <th>Task Title</th>
        <th>Task Discription</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.tasks.length > 0 ? (
        props.tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.discription}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(task);
                }}
                className="button muted-button"
              >
                Edit Task
              </button>
              <button
                onClick={() => props.deleteTask(task.id)}
                className="button muted-button"
              >
                Delete Task
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3} Style="text-align:center;">No Tasks</td>
          </tr>
        )}
    </tbody>
  </table>
);

export default TaskTable;
