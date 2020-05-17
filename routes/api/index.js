const router = require("express").Router();
const summonersRoutes = require("./summoners");
const matchRoutes = require("./match")
const matchDetailsRoutes = require("./matchDetails")


router.use("/summoners", summonersRoutes);
router.use("/matchLists", matchRoutes);
router.use("/matchDetails", matchDetailsRoutes);

module.exports = router;
