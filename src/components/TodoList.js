import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo}) => {
  const todoItems = todos.map((e,i)=>
    (
      <TodoItem
        key={i}
        id={i}
        deleteTodo={deleteTodo}
        todo={e}
      />
    )
  )
  return (
    <div className="container collection">
      {todoItems}
    </div>
  )
}

export default TodoList
