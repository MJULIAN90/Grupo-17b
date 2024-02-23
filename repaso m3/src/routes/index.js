const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  getUserByQuery,
  getUserByBody,
  deleteUserByBody,
} = require("../controllers/users");

const { getEmailUser  } = require("../controllers/emails");

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get("/user", getUserByQuery);
router.post("/user", getUserByBody);
router.delete("/user", deleteUserByBody);

router.post('/showEmail', getEmailUser)

module.exports = router;
