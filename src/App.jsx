import { useReducer } from "react"
import { Mycontext } from "./Components/Mycontext.jsx"
import ToDo_Container from "./Components/ToDo_Container.jsx"

const initialState = { todos: [] }

const reducerfunction = (State, action) => {
  switch (action.type) {
    case 'addtask':
      return {
        ...State, todos: [...State.todos, action.payload]
      }
    case 'removetask':
      return {
        ...State, todos: State.todos.filter((_, i) => i !== action.payload)
      }
    default:
      return State;
  }
}


function App() {

  const [State, dispatch] = useReducer(reducerfunction, initialState)

  return (
    <>
      <Mycontext.Provider value={{ State, dispatch }}>
        <ToDo_Container />
      </Mycontext.Provider>
    </>
  )
}

export default App
