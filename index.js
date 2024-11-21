const express = require("express");

const app = express();

//Definición de routing
app.get("/", (req, res) => {
  res.send("Hola mundo con express");
});

app.listen(4000, () => console.log("Servidor funcionando"));
