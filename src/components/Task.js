import React from "react";

class Task extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      isDraft: false,
      taskValue: this.props.taskValue,
    };
    this.toggleDraft = this.toggleDraft.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      taskValue: event.target.value,
    });
  }

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

  toggleDraft() {
    this.setState((prevState) => ({
      isDraft: !prevState.isDraft,
    }));
  }

  render() {
    const { id, taskValue, index, deleteTask, resubmitTask } = this.props;
    const isDraft = this.state.isDraft;
    let taskOutput;
    if (isDraft) {
      taskOutput = (
        <form>
          <input type="text" 
            value={taskValue}
            onChange={this.handleChange}
          ></input>
          <button
            type="submit"
            onSubmit={() => {
              resubmitTask(id, taskValue);
              this.toggleDraft();
            }}
          ></button>
        </form>
      );
    } else {
      taskOutput = taskValue <button onClick={this.toggleDraft()}>Edit</button>;
    }

    return (
      <li key={id}>
        {index}. {taskOutput}
        <i className="fa-solid fa-trash" onClick={() => deleteTask(id)}></i>
      </li>
    );
  }
}

function TaskInput(props) {
  
}