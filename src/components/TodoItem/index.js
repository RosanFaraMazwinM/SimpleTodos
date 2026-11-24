import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
