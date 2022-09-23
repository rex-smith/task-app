import React from "react";

function Overview(props) {
  const { taskArray, deleteTask } = props;
  const taskList = taskArray.map((task, index) => {
    return (
      <li key={task.id}>
        {index} {task.taskValue}
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTask(task.id)}
        ></i>
      </li>
    );
  });

  return <ul>{taskList}</ul>;
}

export default Overview;
