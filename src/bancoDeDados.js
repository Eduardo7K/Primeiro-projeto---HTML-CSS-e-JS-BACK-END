let users = [
  {
    id: 1,
    firstName: "Michael",
    lastName: "Holz",
    data: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\michael.jpg",
    language: "English",
    mobilePhone: "(55) 55555-5555",
    birthday: 10,
    month: 1,
    year: 1985,
    email: "michael@gmail.com"
  },
  {
    id: 2,
    firstName: "Paula",
    lastName: "Wilson",
    data: "05/08/2014",
    role: "Publisher",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\paula.jpg",
    language: "English",
    mobilePhone: "(55) 55555-5555",
    birthday: 20,
    month: 10,
    year: 1990,
    email: "paula@gmail.com"
  },
  {
    id: 3,
    firstName: "Antonio",
    lastName: "Moreno",
    data: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
    statusImg: "imgs\\red-circle.png",
    img: "imgs\\antonio.png",
    language: "English",
    mobilePhone: "(55) 55555-5555",
    birthday: 5,
    month: 3,
    year: 1980,
    email: "antonio@gmail.com"
  },
  {
    id: 4,
    firstName: "Mary",
    lastName: "Saveley",
    data: "06/09/2016",
    role: "Reviewer",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\mary.jpg",
    language: "English",
    mobilePhone: "(55) 55555-5555",
    birthday: 23,
    month: 4,
    year: 1979,
    email: "mary@gmail.com"
  },
  {
    id: 5,
    firstName: "Martin",
    lastName: "Sommer",
    data: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
    statusImg: "imgs\\yellow-circle.png",
    img: "imgs\\martin.jpg",
    language: "English",
    mobilePhone: "(55) 55555-5555",
    birthday: 12,
    month: 3,
    year: 1988,
    email: "martin@gmail.com"
  }
];

function salvarUser(user) {
  users.push(user);
  return user;
}

function editUser(user) {
  debugger;
  const index = users.findIndex(x => x.id === parseInt(user.id));

  (users[index].firstName = user.firstName),
    (users[index].lastName = user.lastName),
    (users[index].data = user.data),
    (users[index].role = user.role),
    (users[index].status = user.status),
    (users[index].statusImg = user.statusImg),
    (users[index].img = user.img),
    (users[index].language = user.language),
    (users[index].mobilePhone = user.mobilePhone),
    (users[index].birthday = user.birthday),
    (users[index].month = user.month),
    (users[index].year = user.year),
    (users[index].email = user.email);
}

//não utilizado
function getUser(id) {
  const index = users.findIndex(x => x.id === parseInt(idUser));
  //return Object.values(users);
  return Object.values(users) || {};
}

function getUsers() {
  return Object.values(users);
}

function removeUser(id1) {
  const user = users.find(x => x.id === parseInt(id1));
  const index = users.findIndex(x => x.id === parseInt(id1));
  users.splice(index, 1);
  return user;
}

module.exports = { salvarUser, getUser, getUsers, removeUser, editUser };
