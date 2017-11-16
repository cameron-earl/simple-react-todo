import React, { Component } from 'react'
import MdDeleteForever from 'react-icons/lib/md/delete-forever';

class TodoItem extends Component {

  handleDelete = (e) => {
    this.props.deleteTodo(+this.props.id)
  }

  render() {
    return (
      <div className="collection-item">
        {this.props.todo}
        <MdDeleteForever onClick={this.handleDelete} className="delete" />
      </div>
    )
  }
}

export default TodoItem
