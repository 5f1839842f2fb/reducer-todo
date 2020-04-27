export const todoReducer = (state, action) => {
  let newState = {...state};  
  console.log("reducer", state, action)
  if (action.type === 'ADD_TODO') {
    return {
      list: [...state.list, {task: action.payload, completed: false}]
    }
    newState.list.push({task: action.payload})
  } else 
  if (action.type === 'TOGGLE_COMPLETED') {
    return {
      list: state.list.map(element => {
        if (element.task === action.payload) {
          return {...element, completed: !element.completed}
        }
        return element
      })
    }
  }
  return newState
}

export const initialTodoList = {list: [
  {task: 'Do dishes', completed: false},
  {task: 'Wash car', completed: false},
  {task: 'Get groceries', completed: false}
]}