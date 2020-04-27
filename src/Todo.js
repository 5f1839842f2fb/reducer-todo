import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: props.todo
    }
  }

  toggle = () => {
    /* this.setState({ todo: {...this.state.todo, completed: !this.state.todo.completed}}) */
    this.props.toggle(this.state.todo.task)
  }

  render() {
    return (
      <h2 onClick={this.toggle} style={this.state.todo.completed ? {"textDecoration": "line-through"} : null}>{this.state.todo.task}</h2>
    )
  }
}

export default Todo