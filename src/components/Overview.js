import React from "react";
import Task from "./Task";

function Overview(props) {
  const { taskArray, deleteTask, resubmitTask } = props;

  const taskList = taskArray.map((task, index) => {
    return (
      <Task
        id={task.id}
        taskValue={task.taskValue}
        index={index}
        deleteTask={deleteTask}
        resubmitTask={resubmitTask}
      />
    );
  });

  return <ul>{taskList}</ul>;
}

export default Overview;
