import React, { Component } from 'react'
import MdAdd from 'react-icons/lib/md/add';

class AddTodo extends Component {
  state = {
    newTodo: ""
  }

  handleInputChange = (e) => {
    this.setState({newTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.newTodo === "") return;
    this.props.addNewTodo(this.state.newTodo)
    this.setState({newTodo:""})
  }

  render() {
    return (
      <div className="row container">
        <form className="col s12" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col offset-s3 s6">
              <input onChange={this.handleInputChange} value={this.state.newTodo} autoFocus="true" id="new-todo" type="text" className="validate" />
              <label htmlFor="new-todo">Add New Todo</label>
              <button className="btn waves-effect waves-light blue" type="submit" name="action">Add
    <i className="right"><MdAdd /></i>
  </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo
