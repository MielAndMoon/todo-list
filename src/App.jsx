import { useEffect, useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [todoValue, setTodoValue] = useState('')
  const [todos, setTodos] = useState([])

  const persistData = (todos) => {
    localStorage.setItem('todos', JSON.stringify({ todos: todos }))
  }

  const handleAddTodo = (todo) => {
    const newTodoList = [...todos, todo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((_, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const todo = todos[index]
    setTodoValue(todo)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue}></TodoInput>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}></TodoList>
    </>
  )
}

export default App
