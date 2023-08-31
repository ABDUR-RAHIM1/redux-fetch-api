import React, { useEffect } from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../Redux/TodosState/todosActions';

function Todos() {
  const { isLoading, todos, error } = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <div>
      {
        isLoading && <p>Loading . . . .</p>
      }
      {
        error && <p> Shomthing went wrong </p>
      }

      <div className='py-4 px-10 flex gap-1 items-center justify-between flex-wrap'>
        {
          todos && todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Todos