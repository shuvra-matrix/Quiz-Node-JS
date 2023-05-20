const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/", adminController.adminIndex);
router.get("/add-topic", adminController.getAddTopic);
router.post("/add-topic", adminController.postAddTopic);
router.get("/show-topic", adminController.showAllTopic);
router.post("/show-edit-topic", adminController.showEditTopic);

module.exports = router;
