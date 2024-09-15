const {
  getAllUseer,
  createUser,
  updateUser,
  DeleteUser,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/", getAllUseer);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", DeleteUser);
module.exports = router;
