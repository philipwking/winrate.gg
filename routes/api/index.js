const router = require("express").Router();
const summonersRoutes = require("./summoners");

router.use("/summoners", summonersRoutes);

module.exports = router;
