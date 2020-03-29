const express = require('express');
const mongoose = require('mongoose');

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const cors = require('cors')
mongoose.connect('mongodb+srv://meninolucasdedd:1r44gmu9@estudos-lqiba.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);


app.use((req, res, next) => {
  req.io = io;

  return next();

});
app.use(cors())
app.use(express.json());
app.use(
  require('./Routes')
);

server.listen(3000, () => {
  console.log('Servidor funcionou nego na porta 3000')
})