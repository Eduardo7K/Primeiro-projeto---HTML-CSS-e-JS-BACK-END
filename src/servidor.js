const porta = 3003;

const cors = require("cors");
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
const index = require("./index");
var md5 = require("md5");
var token;
const crypto = require("crypto");

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res, next) => {
  const result = await index.getUser();
  res.send(result.rows);
});

app.post("/api/users/cleartoken", async (req, res, next) => {
  token = "";
});

app.post("/api/users/login", async (req, res, next) => {
  const user = await index.getLogin({
    email: req.body.email,
    password: md5(req.body.password)
  });
  if (user) {
    token = crypto.randomBytes(40).toString("hex");
    res.json({ token });
    console.log("entrou no if");
    console.log(token);
  } else {
    console.log("entrou no else");
    console.log(token);
    res.json(null);
  }
});

app.post("/api/users/verificar", (req, res, next) => {
  //console.log("teste");
  //console.log(req.body);
  //console.log(token);
  res.json(token === req.body.token);
});

app.post("/api/users", (req, res, next) => {
  const user = index.insertUser({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    data: req.body.data,
    role: req.body.role,
    status: req.body.status,
    statusimg: req.body.statusimg,
    img: req.body.img,
    language: req.body.language,
    mobilephone: req.body.mobilephone,
    birthday: req.body.birthday,
    month: req.body.month,
    year: req.body.year,
    email: req.body.email,
    password: md5(req.body.password)
  });

  res.send(user);
});

app.delete("/api/users/:id", async (req, res, next) => {
  const user = await index.deleteUser(req.params.id);
  res.send(user);
});

app.put("/api/users/:id", (req, res, next) => {
  const user = index.updateUser({
    id: req.body.iduser,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    data: req.body.data,
    role: req.body.role,
    status: req.body.status,
    statusimg: req.body.statusimg,
    img: req.body.img,
    language: req.body.language,
    mobilephone: req.body.mobilephone,
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
