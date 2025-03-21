const express = require("express");
const { connect } = require("./models");

const pokemonsRouter = require("./routes/pokemons");

const app = express();

// declarando rotas
app.use("/pokemons", pokemonsRouter);

app.listen(3000, () => {
  connect();

  console.log("Servidor ouvindo na porta 3000.");
});
