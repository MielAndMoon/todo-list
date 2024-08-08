export function TodoInput({ handleAddTodo, setTodoValue, todoValue }) {
  return (
    <header>
      <input type='text' placeholder='Enter todo...' onChange={(e) => {
        setTodoValue(e.target.value)
      }} value={todoValue} />
      <button onClick={() => {
        handleAddTodo(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

