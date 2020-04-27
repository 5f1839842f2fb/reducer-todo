import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChanges = event => {
    this.setState({ 
      newTodo: event.target.value 
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTodoData(this.state.newTodo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges}/>
      </form>
    )
  }
}

export default TodoForm