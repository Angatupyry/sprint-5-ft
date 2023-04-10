const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

app.get("/tareas", (req, res) => {
  const tareas = {
    titulo: "Mi primera tarea",
    prioridad: 1,
    autor_id: 1,
    completado: true,
  };

  res.send(tareas);
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});
