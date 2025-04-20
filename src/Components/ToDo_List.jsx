import React, { useContext, useState } from 'react'
import { Mycontext } from './Mycontext'

function ToDo_List() {

    const [input,setinput] = useState("")

    const {State,dispatch} = useContext(Mycontext)

    const AddTask = () => {
        if(input.trim() !== ''){
        dispatch({type:'addtask',payload:input})
        setinput("")
        }
    }

    const DeleteTask = (index) => {
          dispatch({type:'removetask',payload:index})
    }

  return (
    <>
    <div className='flex w-screen flex-col'>

      <div className='fixed top-0 h-15 bg-blue-900 w-screen flex items-center justify-center'>
        <input  className='border-2  text-xl text-cyan-50 bold italic' type='text' value={input} onChange={(e)=>setinput(e.target.value)} />
        <button className='text-sm bg-purple-500 text-cyan-100  bold rounded border-2 p-2 ml-4' onClick={AddTask}>Add Task</button>
      </div>

      <div className='mt-15 justify-center items-center w-screen  overflow-auto  flex flex-col  '>

        {State.todos.map((T,index)=>(
            <div  className='flex  flex-row m-4' key={index}>
                <p className='m-2 black text-xl'>{T}</p>
                <button className='m-2 text-sm text-blue-800  bold rounded-sm border-2 p-1 ml-4' onClick={()=> DeleteTask(index)}>Delete Task</button>
            </div>
        ))}

      </div>
    </div>
     
      
    </>
  )
}

export default ToDo_List
