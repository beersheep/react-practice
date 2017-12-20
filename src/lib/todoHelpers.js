export const addTodo = (list, item) => [...list, item] 

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ( {...todo, isComplete: !todo.isComplete} )

export const updateTodo = (todos, todo) => {
  const updatedIndex = todos.findIndex(item => item.id === todo.id)
  return [
    ...todos.slice(0, updatedIndex),
    todo,
    ...todos.slice(updatedIndex + 1)
  ]
}

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex + 1)
  ]


}