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
        <Overview taskArray={taskArray} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
