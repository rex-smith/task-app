import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDraft: false,
      taskText: "",
    };
    this.toggleDraft = this.toggleDraft.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      taskText: event.target.value,
    });
  };

  draftOutput() {
    return (
      <form className="inline-form">
        <input
          type="text"
          value={this.state.taskText}
          onChange={this.handleChange}
        ></input>
        <button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.resubmitTask(this.props.id, this.state.taskText);
          }}
        ></button>
      </form>
    );
  }

  staticOutput() {
    return (
      <div>
        {this.props.taskValue}{" "}
        <button onClick={this.toggleDraft()}>Edit</button>
      </div>
    );
  }

  toggleDraft() {
    this.setState((prevState) => ({
      isDraft: !prevState.isDraft,
    }));
  }

  componentDidMount() {
    if (this.props.taskValue) {
      this.setState({
        taskText: this.props.taskValue,
      });
    }
  }

  render() {
    const { id, index, deleteTask } = this.props;
    let taskOutput;
    let draftOutput = this.draftOutput();
    let staticOutput = this.staticOutput();
    if (this.state.isDraft) {
      taskOutput = draftOutput;
    } else {
      taskOutput = staticOutput;
    }

    return (
      <li key={id}>
        {index}. {taskOutput}{" "}
        <i className="fa-solid fa-trash" onClick={() => deleteTask(id)}></i>
      </li>
    );
  }
}

export default Task;
