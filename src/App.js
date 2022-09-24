import React from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        taskValue: "",
        id: uniqid(),
      },
      taskArray: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      task: {
        taskValue: event.target.value,
        id: this.state.task.id,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      taskArray: [
        ...prevState.taskArray,
        { taskValue: this.state.task.taskValue, id: this.state.task.id },
      ],
      task: {
        taskValue: "",
        id: uniqid(),
      },
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      taskArray: prevState.taskArray.filter((task) => task.id !== id),
    }));
  };

  resubmitTask = (id, value) => {
    this.setState((prevState) => ({
      taskArray: prevState.taskArray.map((task) => {
        if (task.id === id) {
          return { id: task.id, taskValue: value };
        } else {
          return task;
        }
      }),
    }));
  };

  https://reactjs.org/docs/conditional-rendering.html
  https://bobbyhadz.com/blog/react-replace-object-in-state-array

  render() {
    const { task, taskArray } = this.state;

    return (
      <div className="main-cntainer">
        <div>
          <h1>Task List</h1>
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="taskInput"></label>
            <input
              type="text"
              id="taskInput"
              value={task.taskValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <Overview
          taskArray={taskArray}
          deleteTask={this.deleteTask}
          resubmitTask={this.resubmitTask}
        />
      </div>
    );
  }
}

export default App;
