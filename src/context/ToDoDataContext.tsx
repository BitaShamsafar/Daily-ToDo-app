import { createContext, useEffect, useReducer } from "react"
import useFetchData from "../hooks/useFetchData"

type ContextPropsType = {
    todoData?: any,
    dispatch: React.Dispatch<any>,
    isloading?: boolean,
    error?: any 
}

const todoReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            localStorage.setItem('todoData', JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        case 'REMOVE_TODO':
            const updatedTodos = state.filter((todo: any) => todo.id !== action.payload)
            localStorage.setItem('todoData', JSON.stringify(updatedTodos))
            return updatedTodos
        case 'update_TODO':  
            const newTodos = state.map((todo:  any) =>
                todo.name === action.payload.name
                ? { ...todo, ...action.payload.updates }
                : todo      
            );  
            localStorage.setItem('todoData', JSON.stringify(newTodos))
            return newTodos;
        case 'SET_TODOS':
            return action.payload;
        default:
            return state
    }
}

export const TodoDataContext = createContext<ContextPropsType>({
    todoData: [],
    dispatch: () => {},
    isloading: false,
    error: null
})

const TodoDataContextProvider = ({ children }: { children: React.ReactNode }) => {
    const {data, isloading} = useFetchData() 
    console.log('data in context', data)
    const [todoData, dispatch] = useReducer(todoReducer, [])
    useEffect(() => {
        if (data) {
            dispatch({ type: "SET_TODOS", payload: data });
        }
    }, [data]);

    return (
        <TodoDataContext.Provider value={{ todoData, dispatch, isloading }}>
            {children}
        </TodoDataContext.Provider>
    )
}

export default TodoDataContextProvider