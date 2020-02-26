const porta = 3003;

const cors = require("cors");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
const bancoDeDados = require("./bancoDeDados");

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res, next) => {
  res.send(bancoDeDados.getUsers());
});

//não utilizado
app.get("/api/users/:id", (req, res, next) => {
  res.send(bancoDeDados.getUser(req.params.id));
});

var personId = bancoDeDados.getUsers().slice(-1)[0].id;

app.post("/api/users", (req, res, next) => {
  personId++;
  const user = bancoDeDados.salvarUser({
    id: personId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    data: req.body.data,
    role: req.body.role,
    status: req.body.status,
    statusImg: req.body.statusImg,
    img: req.body.img,
    language: req.body.language,
    mobilePhone: req.body.mobilePhone,
    birthday: req.body.birthday,
    month: req.body.month,
    year: req.body.year,
    email: req.body.email
  });

  res.send(user);
});

app.delete("/api/users/:id", (req, res, next) => {
  const user = bancoDeDados.removeUser(req.params.id);
  res.send(user);
});

app.put("/api/users/:id", (req, res, next) => {
  debugger;
  const user = bancoDeDados.editUser({
    id: req.body.idUser,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    data: req.body.data,
    role: req.body.role,
    status: req.body.status,
    statusImg: req.body.statusImg,
    img: req.body.img,
    language: req.body.language,
    mobilePhone: req.body.mobilePhone,
    birthday: req.body.birthday,
    month: req.body.month,
    year: req.body.year,
    email: req.body.email
  });
  res.send(user);
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
