const express = require("express");
const router = express.Router();
const ctrlUsers = require("../controllers/user");

router.delete("/:id", ctrlUsers.delUser);

router.get("/", ctrlUsers.getAllUsers);

router.get("/:id", ctrlUsers.getUser);

router.post("/reg", ctrlUsers.addUser);
router.post("/auth", ctrlUsers.addUser);

module.exports = router;
