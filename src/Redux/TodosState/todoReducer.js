import { TODO_FAILED, TODO_REQUEST, TODO_SUCCESS } from "./todosConstatns";

const initialTodosState = {
     todos : [],
     isLoading : false,
     error : null
}

const todosReducer = (state = initialTodosState , action)=>{
     switch (action.type) {
        case TODO_REQUEST :
            return{
                ...state,
                isLoading : true
            }
       case TODO_SUCCESS:
        return{
             ...state,
             isLoading : false,
             todos :action.payload
        }
        case TODO_FAILED :
            return{
                 ...state,
                 isLoading :false,
                 error : action.payload
            }
        default:
            return state;
     }
}

export default todosReducer