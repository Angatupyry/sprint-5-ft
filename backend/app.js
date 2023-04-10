const express = require("express");
const tareasRouter = require("./routes/tareas");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tareas", tareasRouter);

app.get("/", (req, res) => {
  res.send("Hola, mundo");
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});
