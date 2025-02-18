exports.getTasks = (req, res) => {
    res.json({ message: "Lista de tareas" });
  };
  
  exports.createTask = (req, res) => {
    res.json({ message: "Tarea creada" });
  };
  
  exports.updateTask = (req, res) => {
    res.json({ message: `Tarea ${req.params.id} actualizada` });
  };
  
  exports.deleteTask = (req, res) => {
    res.json({ message: `Tarea ${req.params.id} eliminada` });
  };
  