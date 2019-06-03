var express = require("express");
var router = express.Router();

var homeController = require("../controllers/home.controller");
router.post("/", homeController.getIndex);
router.post("/test", homeController.test);

module.exports = router;
