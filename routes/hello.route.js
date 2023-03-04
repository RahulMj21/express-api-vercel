const { Router } = require("express");
const { hello } = require("../controllers/hello.controller");

const router = Router();

router.get("/hello", hello);

module.exports = router;
