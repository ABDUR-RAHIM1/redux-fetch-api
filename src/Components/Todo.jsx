import React from 'react'

function Todo(props) {
  const {id, title, completed} = props.todo
  return (
    <div className='mt-10 p-2 bg-slate-200 w-2/5 md:w-1/5'>
        <p>todo no : {id}</p>
        <p>{title}</p>
        <p>complited ? {completed}</p>
    </div>
  )
}

export default Todo