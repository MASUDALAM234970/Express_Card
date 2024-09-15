let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");
const { use } = require("../routes/users.route");
const getAllUseer = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;

  users
    .filter((user) => user.id === id)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.email = email;
    });

  res.status(200).json(users);
};

const DeleteUser = (req, res) => {
  const id = req.params.id;
  users.filter((user) => user.id !== id);
  res.status(200).json(users);
};

module.exports = { getAllUseer, createUser, updateUser, DeleteUser };
