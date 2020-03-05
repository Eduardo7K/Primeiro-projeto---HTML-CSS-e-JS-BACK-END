const { Pool, Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "bancoDeDados",
  password: "1234",
  port: 5432
});
client.connect();

async function deleteUser(user) {
  return await client.query("DELETE FROM public.users WHERE id = $1;", [user]);
}

async function insertUser(user) {
  return await client.query(
    "INSERT INTO public.users( firstname, lastname, data, role, status, statusimg, img, language, mobilephone, birthday, month, year, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
    [
      user.firstname,
      user.lastname,
      user.data,
      user.role,
      user.status,
      user.statusimg,
      user.img,
      user.language,
      user.mobilephone,
      user.birthday,
      user.month,
      user.year,
      user.email,
      user.password
    ]
  );
}

async function getUser() {
  return await client.query(
    "SELECT id, firstname, lastname, data, role, status, statusimg, img, language, mobilephone, birthday, month, year, email FROM public.users ORDER BY id"
  );
}

async function getLogin(user) {
  return await client.query(
    "SELECT email FROM public.users WHERE email = $1 AND password = $2;",
    [user.email, user.password]
  );
}

function updateUser(user) {
  client.query(
    "UPDATE public.users SET firstname = $1, lastname = $2, data = $3, role = $4, status = $5, statusimg = $6, img = $7, language = $8, mobilephone = $9, birthday = $10, month = $11, year = $12, email = $13 WHERE id = $14",
    [
      user.firstname,
      user.lastname,
      user.data,
      user.role,
      user.status,
      user.statusimg,
      user.img,
      user.language,
      user.mobilephone,
      user.birthday,
      user.month,
      user.year,
      user.email,
      user.id
    ]
  );
}

module.exports = { deleteUser, insertUser, getUser, updateUser, getLogin };
