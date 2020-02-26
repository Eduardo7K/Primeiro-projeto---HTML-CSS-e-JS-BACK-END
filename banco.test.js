const { removeUser, salvarUser } = require("./src/bancoDeDados");

test("remover usuario deve funcionar", () => {
  expect(removeUser(1)).toStrictEqual({
    id: 1,
    pName: "Michael Holz",
    data: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\michael.jpg"
  });
});

test("remover usuario não deve remover", () => {
  expect(removeUser(-1)).toBe(undefined);
});

test("deve remover após adicionar novo usuario", () => {
  salvarUser({
    id: 6,
    pName: "Michael Holz",
    data: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\michael.jpg"
  });
  expect(removeUser(6)).toStrictEqual({
    id: 6,
    pName: "Michael Holz",
    data: "04/10/2013",
    role: "Admin",
    status: "Active",
    statusImg: "imgs\\green-circle.png",
    img: "imgs\\michael.jpg"
  });
});
