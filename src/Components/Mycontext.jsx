import { createContext, useReducer } from "react";
export const Mycontext = createContext();

const initialState = { todos: [] }

const reducerfunction = (State, action) => {
    switch (action.type) {
        case 'addtask':
            return {
                ...State, todos: [...State.todos, action.payload]
            }
        case 'removetask':
            return {
                ...State,todos: State.todos.filter((_, i) =>  i !== action.payload )
            }
    }
}

function Reducing({ children }) {

    const [State, dispatch] = useReducer(reducerfunction, initialState)
    
    return (
        <>
            <Mycontext.Provider value={{ State, dispatch }}>
                {children}
            </Mycontext.Provider>
        </>
    )
}

export default Reducing
