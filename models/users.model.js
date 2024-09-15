const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "MD: MASUD ALAM",
    email: "mdmasudalam2349@gmail.com",
  },
  {
    id: uuidv4(),
    username: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: uuidv4(),
    username: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    id: uuidv4(),
    username: "Alice Johnson",
    email: "alicejohnson@example.com",
  },
  {
    id: uuidv4(),
    username: "Bob Brown",
    email: "bobbrown@example.com",
  },
];

module.exports = users;
