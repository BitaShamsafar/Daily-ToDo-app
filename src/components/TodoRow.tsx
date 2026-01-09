import { useContext, useState } from "react"
import { TodoDataContext } from "../context/ToDoDataContext"

const TodoRow = ({todo}: any) => {
    const [status, setStatus] = useState(todo.status)
    const {dispatch} = useContext(TodoDataContext)
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>, name: string) => {
        const newStatus = e.target.value
        setStatus(newStatus)
        dispatch({type: "update_TODO", payload: {name, updates: {status: newStatus}}})
    }
    
    const getColor = (statement: string ) => {
        switch (statement) {
            case 'high':
                return 'red'
            case 'medium':
            case 'in_progress':    
                return 'darkorange'
            case 'low':
            case 'completed':
                return 'green'
            case 'pending':
                return 'gray'    
            default:
                return 'black'
        }
    }
    return(
        <div className="todo_row">
            <div className="todo_el">{todo.name}</div>
            <div className="todo_el" style={{color: getColor(todo.priority_level)}}>{todo.priority_level}</div>
            <div className="todo_el">{todo.due_date}</div>
            <select style={{color: getColor(status)}} value={status} onChange={(e) => handleStatusChange(e, todo.name)}>
                <option value="completed">Completed</option>
                <option value="in_progress">In Progress</option>
                <option value="pending">Pending</option>
            </select>
            <div className="todo_el" style={{color:'red'}} onClick={() => dispatch({type: "REMOVE_TODO", payload: todo.id})}>X</div>
        </div>

    )

}

export default TodoRow