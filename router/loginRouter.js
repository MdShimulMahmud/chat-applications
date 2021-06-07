const express = require("express");

const router = express.Router();

const { getLogin } = require("../controller/loginController");
const getHtmlResponse = require("../middlewares/common/decoratHtmlresponse");
router.get("/", getHtmlResponse("login"), getLogin);

module.exports = router;
