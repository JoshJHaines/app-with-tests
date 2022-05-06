var express = require("express");
var router = express.Router();

const {
	createPC,
	getAllPC
} = require("./controller/playerCharactersController");

router.get("/", getAllPC);

router.post(
	"/create-pc",
	createPC
);


module.exports = router;
