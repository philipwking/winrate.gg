const router = require("express").Router();
const summonersRoutes = require("./summoners");
const matchRoutes = require("./matchList")
const matchDetailsRoutes = require("./matchDetails")


router.use("/summoners", summonersRoutes);
router.use("/matchList", matchRoutes);
router.use("/matchDetails", matchDetailsRoutes);

module.exports = router;
