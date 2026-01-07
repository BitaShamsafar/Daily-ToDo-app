import { useContext } from "react"
import TodoRow from "./TodoRow"
import { TodoDataContext } from "../context/ToDoDataContext"
const TodoHeader = () => {
    return(
        <div className="todo_row todo_header">
            <div className="todo_el">Task Name</div>
            <div className="todo_el">Priority Level</div>
            <div className="todo_el">Due Date</div>
            <div className="todo_el">Status</div>
        </div>
    )
}
const Todos = () => {
   
  const {todoData, isloading} = useContext(TodoDataContext)
    return (
        <div style={{ padding: '30px' }}>
          {isloading && <p>Loading...</p>}
          <div className="todo-list">
            <TodoHeader />
            {todoData.map((todo: any) => <TodoRow key={todo.id} todo={todo} />)}
          </div>
        </div>
    )

}

export default Todos