import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "./api/taskApi";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(newTask);
    setNewTask({ title: "", description: "" });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Tareas</h1>

      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Título"
            value={newTask.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Descripción"
            value={newTask.description}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Agregar
          </button>
        </div>
      </form>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>{task.title}</strong> - {task.description}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>
              ? Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
