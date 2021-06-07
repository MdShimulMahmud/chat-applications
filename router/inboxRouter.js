const express = require("express");

const router = express.Router();

const { getInbox } = require("../controller/inboxController");
const getHtmlResponse = require("../middlewares/common/decoratHtmlresponse");
router.get("/", getHtmlResponse("inbox"), getInbox);

module.exports = router;
