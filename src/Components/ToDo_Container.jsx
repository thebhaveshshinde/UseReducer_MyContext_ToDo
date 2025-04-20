import { useContext } from "react"
import ToDo_List from "./ToDo_List"
import { Mycontext } from "./Mycontext"

function ToDo_Container() {

  const {State,dispatch} = useContext(Mycontext)
  
  return (
    <>
      <ToDo_List State={State} dispatch={dispatch} />
    </>
  )
}

export default ToDo_Container
