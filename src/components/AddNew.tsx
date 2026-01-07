import { useContext, useState } from "react";
import { TodoDataContext } from "../context/ToDoDataContext";

type Priority = "high" | "medium" | "low";
type Status = "completed" | "in-progress" | "pending";

const AddNew = () => {
  const { dispatch } = useContext(TodoDataContext)
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("high");
  const [status, setStatus] = useState<Status>("pending");
  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      name: title,
      priority_level: priority,
      status,
      due_date: dueDate,
      created_at: new Date().toISOString(),
    };


    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">

      <input
        type="text"
        placeholder="Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
        <option value="completed">Completed</option>
        <option value="in-progress">In Progress</option>
        <option value="pending">Pending</option>
      </select>

      <input
        type="date"
        value={dueDate}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddNew;
