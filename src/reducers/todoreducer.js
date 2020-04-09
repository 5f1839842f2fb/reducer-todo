export const todoReducer = (state, action) => {
  let newState = {...state};  
  console.log("reducer", state, action)
  if (action.type === 'ADD_TODO') {
    newState.list.push({task: action.payload})
  } else 
  if (action.type === 'TOGGLE_COMPLETED') {
    const index = newState.list.findIndex(element => element.task === action.payload)
    if(newState.list[index].completed === true) {
      newState.list[index] = {...newState.list[index], completed: false}
    } else {
      newState.list[index] = {...newState.list[index], completed: true}
    }
  }
  return newState
}

export const initialTodoList = {list: [
  {task: 'Do dishes', completed: false},
  {task: 'Wash car', completed: false},
  {task: 'Get groceries', completed: false}
]}