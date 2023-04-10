const express = require("express");
const router = express.Router();

const listaDeTareas = [
  {
    titulo: "Prueba 1",
    prioridad_id: 1,
    usuario_id: 1,
    completado: true,
  },
  {
    titulo: "Prueba 2",
    prioridad_id: 1,
    usuario_id: 1,
    completado: false,
  },
];

router.get("/tareas", (req, res) => {
  const tareas = {
    titulo: "Mi primera tarea",
    prioridad: 1,
    autor_id: 1,
    completado: true,
  };

  res.send(tareas);
});

router.post("/tareas", (req, res) => {
  const titulo = req.body.titulo;
  const prioridad = req.body.prioridad;
  const usuario_id = req.body.usuario_id;

  const nuevaTarea = {
    titulo,
    prioridad,
    usuario_id,
  };

  listaDeTareas.push(nuevaTarea);

  return res.status(200).json({
    tareas: listaDeTareas,
    tareaNueva: nuevaTarea,
  });
});

module.exports = router;
