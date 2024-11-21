import express from "express";

const app = express();

//Definición de routing
app.get("/", (req, res) => {
  res.send("Hola mundo con express / typescript");
});

app.get("/nosotros", (req, res) => {
  res.send("Ruta de nosotros");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Servidor funcionando en el puerto:", port));
