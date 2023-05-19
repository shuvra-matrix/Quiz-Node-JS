const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/", adminController.adminIndex);
router.get("/add-topic", adminController.getAddTopic);

module.exports = router;
