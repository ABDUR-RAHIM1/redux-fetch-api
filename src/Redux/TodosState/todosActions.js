import axios from "axios"
import { TODO_FAILED, TODO_REQUEST, TODO_SUCCESS } from "./todosConstatns"


export const getAllTodos = () => async (dispatch) => {
    dispatch({ type: TODO_REQUEST })
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch({ type: TODO_SUCCESS, payload: res.data })
    } catch (error) {
       dispatch({type : TODO_FAILED , payload : error.message})
    }


}