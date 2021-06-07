const express = require("express");

const router = express.Router();

const { getUsers } = require("../controller/usersController");
const getHtmlResponse = require("../middlewares/common/decoratHtmlresponse");
router.get("/", getHtmlResponse("users"), getUsers);

module.exports = router;
